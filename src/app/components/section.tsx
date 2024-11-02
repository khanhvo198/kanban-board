import { Box, useColorModeValue } from "@chakra-ui/react"
import { FC, ReactNode } from "react"

export interface SectionProps {
  children: ReactNode,
  isActive?: boolean,
  onClick?: () => void,
}


export const Section: FC<SectionProps> = ({ isActive, children, onClick }) => {
  const borderColor = useColorModeValue('#000', '#fff')

  return (
    <Box mr={5} onClick={onClick} borderBottom={isActive ? `2px solid ${borderColor}` : ''} cursor="pointer">
      {children}
    </Box>
  )
}
