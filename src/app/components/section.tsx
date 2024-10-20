"use client"
import { Box, calc, useColorModeValue } from "@chakra-ui/react"

export const Section = ({ children, isActive = false }: { children: React.ReactNode, isActive?: Boolean }) => {
  const borderColor = useColorModeValue('#000', '#fff')
  return (
    <Box mr={5} borderBottom={isActive ? `2px solid ${borderColor}` : ''}>
      {children}
    </Box>
  )
}
