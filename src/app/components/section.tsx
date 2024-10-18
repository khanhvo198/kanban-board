import { Box, calc } from "@chakra-ui/react"

export const Section = ({ children, isActive = false }: { children: React.ReactNode, isActive?: Boolean }) => {
  return (
    <Box mr={5} borderBottom={isActive ? '2px solid #000' : ''}>
      {children}
    </Box>
  )
}
