"use server"

import { API_URL } from "@/shared/utils/constants"
import { State } from "@/shared/utils/types"
import { StatHelpText } from "@chakra-ui/react"
import { redirect } from "next/navigation"


export default async function registerAction(prevState: State, formData: FormData) {
  const res = await fetch(`${API_URL}/users`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(Object.fromEntries(formData)),
  })

  const parsedRes = await res.json()

  if (!res.ok) {
    console.log(parsedRes)
    if (parsedRes.statusCode === 422) {
      return {
        status: "error" as const,
        message: "Email already taken"
      }
    }

    return {
      status: "error" as const,
      message: parsedRes.message
    }
  }

  redirect("/auth/login")
}
