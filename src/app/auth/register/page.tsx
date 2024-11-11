"use client"
import { Box, Button, Flex, FormControl, FormLabel, Heading, Input, Link, Stack, Text } from "@chakra-ui/react";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { FcGoogle } from "react-icons/fc";

type FormData = {
  email: string,
  password: string,
  confirmPassword: string
}

const API_URL = 'http://localhost:8080/api'


export default function Register() {

  const router = useRouter()

  const { register, handleSubmit } = useForm<FormData>()
  const onSubmit = async (data: FormData) => {
    const res = await fetch(`${API_URL}/users`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    })

    const parsedRes = await res.json()


    if (!res.ok) {
      // TODO: show message here
      console.log(parsedRes.message)
      return
    }
    router.push("/auth/login")
  }

  return (
    <Box>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Heading textAlign="center">Register</Heading>
        <Stack spacing={5} mt="2rem">
          <FormControl>
            <FormLabel>Email</FormLabel>
            <Input borderColor="#868686" {...register("email")} />
          </FormControl>

          <FormControl>
            <FormLabel>Password</FormLabel>
            <Input type="password" borderColor="#868686" {...register("password")} />
          </FormControl>

          <FormControl>
            <FormLabel>Confirm Password</FormLabel>
            <Input type="password" borderColor="#868686" {...register("confirmPassword")} />
          </FormControl>


          <Button colorScheme="blue" mt="1rem" type="submit">Register</Button>
        </Stack>
        <Stack mt="0.5rem">
          <Button leftIcon={<FcGoogle size="24px" />} width="100%">Continue with Google</Button>
        </Stack>
      </form>
    </Box>
  )
}
