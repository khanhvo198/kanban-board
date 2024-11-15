"use client"
import { NavBar } from "../navbar"
import { SideBar } from "../sidebar"
import { Box } from "@chakra-ui/react"

export const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <Box h="100%" w="100%" overflowX="auto" overflowY="hidden">
      <Box display="inline-flex" h="100%" w="100%">
        <SideBar />
        {children}
      </Box>
    </Box>
  )
}
