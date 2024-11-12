"use server"
import { API_URL } from "@/shared/constants"
import { State } from "@/shared/types"
import { jwtDecode } from "jwt-decode"
import { cookies } from "next/headers"
import { redirect } from "next/navigation"

export default async function login(_prevState: State, formData: FormData) {
  const res = await fetch(`${API_URL}/auth/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(Object.fromEntries(formData)),
  })

  const parsedRes = await res.json()

  if (!res.ok) {
    // TODO: validate and show error here
    return {
      status: "error" as const,
      message: parsedRes.error
    }
  }

  setAuthCookie(res)
  redirect("/")
}

const setAuthCookie = (response: Response) => {
  const setCookieHeader = response.headers.get("Set-Cookie");
  if (setCookieHeader) {
    const token = setCookieHeader.split(";")[0].split("=")[1];
    cookies().set({
      name: "Authentication",
      value: token,
      secure: true,
      httpOnly: true,
      expires: new Date(jwtDecode(token).exp! * 1000),
    });
  }
};


