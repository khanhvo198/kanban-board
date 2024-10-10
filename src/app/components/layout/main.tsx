"use client"
import { NavBar } from "../navbar"
import { SideBar } from "../sidebar"
import { Box } from "@chakra-ui/react"

export const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <Box h="100%">
      <NavBar />
      <Box display="flex" h="100%">
        <SideBar />
        {children}
      </Box>
    </Box>
  )
}
