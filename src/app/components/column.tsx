import { AddIcon } from "@chakra-ui/icons"
import { Button, Flex, IconButton, List, ListItem, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Stack, Text, useDisclosure } from "@chakra-ui/react"
import { FaCircle } from "react-icons/fa"
import { CardComponent, CardProps } from "./card"
import { Droppable } from "@hello-pangea/dnd"
import { AddNewTaskForm } from "../shared/new-task-form"

export interface ColumnProps {
  cards: CardProps[],
  status: string
}


export const Column = ({ cards, status }: ColumnProps) => {
  const { isOpen, onOpen, onClose } = useDisclosure()


  return (
    <>
      <Stack
        w="350px"
      >
        <Flex align="center">
          <FaCircle color="red" fontSize="8px" />
          <Text ml={2}>
            {status}
          </Text>
        </Flex>
        <IconButton aria-label="add-icon" icon={<AddIcon />} onClick={onOpen} />
        <Droppable droppableId={status}>
          {(droppableProvided, snapshot) => (
            <List
              as="div"
              pb="10rem"
              spacing={3}
              ref={droppableProvided.innerRef}
              {...droppableProvided.droppableProps}
            >
              {
                cards.map((card, index) => (
                  <ListItem key={card.id}>
                    <CardComponent card={card} index={index} />
                  </ListItem>
                ))
              }
              {
                droppableProvided.placeholder
              }
            </List>
          )}
        </Droppable>
      </Stack>
      <Modal onClose={onClose} size={{ base: 'sm', md: 'md' }} isOpen={isOpen}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Task</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <AddNewTaskForm />
          </ModalBody>
          <ModalFooter>
            <Button onClick={onClose}>Close</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}
