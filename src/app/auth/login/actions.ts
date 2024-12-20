"use server";
import { API_URL } from "@/shared/utils/constants";
import { State } from "@/shared/utils/types";
import { jwtDecode } from "jwt-decode";
import { cookies } from "next/headers";

export default async function loginAction(
  prevState: State,
  formData: FormData,
) {
  const res = await fetch(`${API_URL}/auth/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(Object.fromEntries(formData)),
  });

  const parsedRes = await res.json();

  if (!res.ok) {
    return {
      status: "error" as const,
      message: "Email or password is invalid",
    };
  }

  setAuthCookie(res);

  return {
    status: "success" as const,
    message: "Login success",
    userInfo: { ...parsedRes.user },
  };
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
