"use client"
import { Avatar, AvatarGroup, Box, Card, CardBody, Flex, Heading, HStack, Stack, Tag, Text, useColorModeValue } from "@chakra-ui/react"
import { Draggable } from "@hello-pangea/dnd"
import { IoIosAttach } from "react-icons/io"
import { LuMessageSquare } from "react-icons/lu"

export interface CardProps {
  id: number,
  text: string,
  status: string,
}

export const CardComponent = ({ card, index }: { card: CardProps, index: number }) => {


  return (
    <Draggable key={String(card.id)} draggableId={String(card.id)} index={index}>
      {(provided, snapshot) => (
        <Box
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
        >
          <Card
            bgColor={useColorModeValue('#EEF2F6', '#141414')}
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
        </Box>
      )}

    </Draggable>
  )
}
