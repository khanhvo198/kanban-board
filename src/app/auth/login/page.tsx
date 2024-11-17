"use client"
import { ErrorMessage } from "@/components/error-message";
import { LoginFormData } from "@/shared/utils/types";
import { LoginValidationSchema } from "@/shared/utils/validations";
import { Box, Button, Flex, FormControl, FormLabel, Heading, Input, Link, Spinner, Stack, Text, useToast } from "@chakra-ui/react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect } from "react";
import { useFormState, useFormStatus } from "react-dom";
import { useForm } from "react-hook-form";
import loginAction from "./actions";
import { useAuthStore } from "@/stores/auth.store";
import { useRouter } from "next/navigation"


const LoginForm = () => {
  const { register, formState: { errors } } = useForm<LoginFormData>({ mode: 'onChange', resolver: zodResolver(LoginValidationSchema) })
  const { pending } = useFormStatus()

  return (
    <Box>
      <Heading textAlign="center">Login to your account</Heading>
      <Stack spacing={5} mt="2rem">
        <FormControl isRequired isDisabled={pending}>
          <FormLabel>Email</FormLabel>
          <Input tabIndex={1} borderColor="#868686" {...register("email")} />
          <ErrorMessage error={errors.email} />
        </FormControl>

        <FormControl isRequired isDisabled={pending}>
          <Flex justifyContent="space-between">
            <FormLabel>Password</FormLabel>
            <Link color="#1570EF" href="#">Forgot ?</Link>
          </Flex>
          <Input tabIndex={2} type="password" borderColor="#868686" {...register("password")} />
          <ErrorMessage error={errors.password} />
        </FormControl>
        <Button disabled={pending} colorScheme="blue" mt="1rem" type="submit">Login</Button>
        <Text textAlign="center">Don't have an account? <Link color="#1570EF" href="/auth/register">Register</Link></Text>
      </Stack>
      <Spinner position="absolute" hidden={!pending} left="50%" bottom="50%" />
    </Box>
  )
}

export default function Login() {
  const [state, formAction] = useFormState(loginAction, null)

  const router = useRouter()

  const toast = useToast()


  useEffect(() => {
    if (state?.status === "error" && state.message) {
      toast({
        title: state.message,
        position: "top-right",
        isClosable: false,
        status: "error",
        duration: 3000
      })
    } else if (state?.status === "success" && state.userInfo) {
      console.log(state.userInfo)
      useAuthStore.setState({ user: { ...state.userInfo } })
      router.push("/")
    }
  }, [state])


  return (
    <form action={formAction}>
      <LoginForm />
    </form>
  )


}
