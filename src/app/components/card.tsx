"use client"
import { Avatar, AvatarGroup, Card, CardBody, Flex, Heading, HStack, Stack, Tag, Text, useColorModeValue } from "@chakra-ui/react"
import { useRef } from "react"
import { useDrag } from "react-dnd"
import { IoIosAttach } from "react-icons/io"
import { LuMessageSquare } from "react-icons/lu"
import { ItemType } from "../types"

export interface CardProps {
  id: number,
  text: string,
  status: string
}

export const CardComponent = ({ card }: { card: CardProps }) => {
  const ref = useRef(null)

  const [{ isDragging }, drag] = useDrag(() => (
    {
      type: ItemType.CARD,
      item: { type: "CARD", id: card.id },
      collect: (monitor) => ({
        isDragging: monitor.isDragging()
      })
    }
  ))

  drag(ref)

  return (
    <Card
      ref={ref}
      bgColor={useColorModeValue('#EEF2F6', '#141414')}
      opacity={isDragging ? "0.5" : "1"}
    >
      <CardBody
        px={4}
        pt={4}
      >
        <Stack>
          <HStack spacing={2}>
            <Tag size="md" colorScheme="teal">Design</Tag>
            <Tag size="md" colorScheme="yellow">Web</Tag>
          </HStack>
          <Heading fontWeight="semibold" fontSize="md">{card.text}</Heading>
          <Text fontSize="sm" color="#4D4F52">All the details are in the file, I'm sure it will turn out cool</Text>
          <Flex justifyContent="space-between">
            <AvatarGroup max={2} size="sm">
              <Avatar />
              <Avatar />
              <Avatar />
              <Avatar />
              <Avatar />
            </AvatarGroup>
            <HStack>
              <Flex align="center">
                <LuMessageSquare size="16px" />
                <Text fontSize="xs">20</Text>
              </Flex>
              <Flex align="center">
                <IoIosAttach size="16px" />
                <Text fontSize="xs">2</Text>
              </Flex>
            </HStack>
          </Flex>
        </Stack>
      </CardBody>
    </Card >
  )
}
