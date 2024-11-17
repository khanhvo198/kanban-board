"use client"
import { useAuthStore } from "@/stores/auth.store";
import { useSideBarStore } from "@/stores/sidebar.store";
import { useEffect } from "react";
import "./globals.css";
import { Providers } from "./providers";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  useEffect(() => {
    useAuthStore.getState().fetchUser()
    useSideBarStore.getState().fetchProjects()
  }, [])

  return (
    <html lang="en">
      <body>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}
