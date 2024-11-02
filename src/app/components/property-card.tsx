import { Flex, Text } from "@chakra-ui/react"
import { ReactNode, FC } from "react"

export interface FieldCardProps {
  label: string,
  children?: ReactNode
}

export const PropertyCard: FC<FieldCardProps> = ({ label, children }) => {
  return (
    <Flex w="100%">
      <Flex flex="1">
        <Text>{label}</Text>
      </Flex>
      <Flex flex="2" align="center">
        {children}
      </Flex>
    </Flex>
  )
}

