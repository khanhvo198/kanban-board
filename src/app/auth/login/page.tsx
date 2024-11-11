"use client"
import { Box, Button, Flex, FormControl, FormLabel, Heading, Input, Link, Stack, Text } from "@chakra-ui/react";
import { redirect } from "next/navigation";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";


type FormData = {
  email: string,
  password: string
}

const API_URL = 'http://localhost:8080/api'

export default function Login() {

  const { register, handleSubmit } = useForm<FormData>({ mode: 'onChange' })

  const router = useRouter()

  const onSubmit = async (data: FormData) => {
    const res = await fetch(`${API_URL}/auth/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    })

    if (!res.ok) {
      // TODO: show error
      return
    }

    const parsedRes = await res.json()
    router.push("/")

  }

  return (
    <Box>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Heading textAlign="center">Login to your account</Heading>
        <Stack spacing={5} mt="2rem">
          <FormControl>
            <FormLabel>Email</FormLabel>
            <Input borderColor="#868686" {...register("email")} />
          </FormControl>

          <FormControl>
            <Flex justifyContent="space-between">
              <FormLabel>Password</FormLabel>
              <Link color="#1570EF" href="#">Forgot ?</Link>
            </Flex>
            <Input type="password" borderColor="#868686" {...register("password")} />
          </FormControl>
          <Button colorScheme="blue" mt="1rem" type="submit">Login</Button>
          <Text textAlign="center">Don't have an account? <Link color="#1570EF" href="/register">Register</Link></Text>
        </Stack>
      </form>
    </Box>
  )


}
