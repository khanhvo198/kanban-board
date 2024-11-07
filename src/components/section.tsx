import { Box, BoxProps, useColorModeValue } from "@chakra-ui/react"
import { FC, ReactNode } from "react"

export interface SectionProps extends BoxProps {
  children: ReactNode,
  isActive?: boolean,
  onClick?: () => void,
}


export const Section: FC<SectionProps> = ({ isActive, onClick, children, ...rest }) => {
  const borderColor = useColorModeValue('#000', '#fff')

  return (
    <Box
      mr={5}
      onClick={onClick}
      borderBottom={isActive ? `2px solid ${borderColor}` : ''}
      cursor="pointer"
      fontWeight={isActive ? "semibold" : ""}
      {...rest}
    >
      {children}
    </Box>
  )
}
