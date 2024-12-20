import { NextRequest, NextResponse } from "next/server";

export default function middleware(req: NextRequest) {
  const isAuth = req.cookies.get("Authentication")?.value;
  if (!isAuth) {
    const url = new URL("/auth/login", req.nextUrl.origin);
    return NextResponse.redirect(url.toString());
  }
}
export const config = {
  matcher: ["/", "/projects/:id*"],
};
