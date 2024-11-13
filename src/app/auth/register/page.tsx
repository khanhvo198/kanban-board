"use client"
import { ErrorMessage } from "@/components/error-message";
import { RegisterValidationSchema } from "@/shared/utils/validations";
import { Box, Button, FormControl, FormLabel, Heading, Input, Spinner, Stack, useToast } from "@chakra-ui/react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect } from "react";
import { useFormState, useFormStatus } from "react-dom";
import { useForm } from "react-hook-form";
import { FcGoogle } from "react-icons/fc";
import registerAction from "./actions";

type RegisterFormData = {
  email: string,
  password: string,
  confirmPassword: string
}

const RegisterForm = () => {
  const { register, formState: { errors } } = useForm<RegisterFormData>({ mode: "onChange", resolver: zodResolver(RegisterValidationSchema) })
  const { pending } = useFormStatus()

  return (
    <Box>
      <Heading textAlign="center">Register</Heading>
      <Stack spacing={5} mt="2rem">
        <FormControl isRequired isDisabled={pending}>
          <FormLabel>Email</FormLabel>
          <Input tabIndex={1} borderColor="#868686" {...register("email")} />
          <ErrorMessage error={errors.email} />
        </FormControl>

        <FormControl isRequired isDisabled={pending}>
          <FormLabel>Password</FormLabel>
          <Input tabIndex={2} type="password" borderColor="#868686" {...register("password")} />
          <ErrorMessage error={errors.password} />
        </FormControl>

        <FormControl isRequired isDisabled={pending}>
          <FormLabel>Confirm Password</FormLabel>
          <Input tabIndex={3} type="password" borderColor="#868686" {...register("confirmPassword")} />
          <ErrorMessage error={errors.confirmPassword} />
        </FormControl>

        <Button colorScheme="blue" mt="1rem" type="submit" disabled={pending}>Register</Button>
      </Stack>
      <Stack mt="0.5rem">
        <Button leftIcon={<FcGoogle size="24px" />} width="100%" disabled={pending}>Continue with Google</Button>
      </Stack>
      <Spinner position="absolute" hidden={!pending} left="50%" bottom="50%" />
    </Box>
  )
}

export default function Register() {
  const [state, formAction] = useFormState(registerAction, null)
  const toast = useToast()

  useEffect(() => {
    console.log(state)
    if (state?.status === "error" && state.message) {
      toast({
        title: state.message,
        position: "top-right",
        isClosable: false,
        status: "error",
        duration: 3000
      })
    }
  }, [state])

  return (
    <form action={formAction}>
      <RegisterForm />
    </form>
  )
}
