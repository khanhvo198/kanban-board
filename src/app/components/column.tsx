import { AddIcon } from "@chakra-ui/icons"
import { Flex, IconButton, List, ListItem, Stack, Text } from "@chakra-ui/react"
import { FaCircle } from "react-icons/fa"
import { CardComponent, CardProps } from "./card"
import { Droppable } from "@hello-pangea/dnd"

export interface ColumnProps {
  cards: CardProps[],
  status: string
}


export const Column = ({ cards, status }: ColumnProps) => {

  return (
    <Stack
      w="350px"
      pb="30rem"
    >
      <Flex align="center">
        <FaCircle color="red" fontSize="8px" />
        <Text ml={2}>
          New Request
        </Text>
      </Flex>
      <IconButton aria-label="add-icon" icon={<AddIcon />} />
      <Droppable droppableId={status}>
        {(droppableProvided, snapshot) => (
          <List
            as="div"
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
          </List>
        )}
      </Droppable>
    </Stack>
  )
}
