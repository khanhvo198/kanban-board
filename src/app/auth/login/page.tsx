"use client"
import { Box, Button, Flex, FormControl, FormLabel, Heading, Input, Link, Stack, Text } from "@chakra-ui/react";
import { useRouter } from "next/navigation";
import { useFormState } from "react-dom";
import { useForm } from "react-hook-form";
import login from "./action";


export type LoginFormData = {
  email: string,
  password: string
}


export default function Login() {
  const [state, formAction] = useFormState(login, null)
  const { register } = useForm<LoginFormData>({ mode: 'onChange' })

  return (
    <Box>
      <form action={formAction}>
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
