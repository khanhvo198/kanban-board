import { z } from "zod";
export const LoginValidationSchema = z.object({
  email: z.string().email({ message: "Email is invalid" }),
  password: z
    .string()
    .min(8, { message: "Password at least 8 characters in length" }),
});

export const RegisterValidationSchema = z
  .object({
    email: z.string().email({ message: "Email is invalid" }),
    password: z
      .string()
      .min(8, { message: "Password at least 8 characters in length" }),
    confirmPassword: z.string(),
  })
  .refine((formData) => formData.password === formData.confirmPassword, {
    message: "Password do not match",
    path: ["confirmPassword"],
  });
