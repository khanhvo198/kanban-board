import { AddIcon } from "@chakra-ui/icons"
import { Stack, Flex, IconButton, List, ListItem, Text } from "@chakra-ui/react"
import { FaCircle } from "react-icons/fa"
import { CardComponent, CardProps } from "./card"
import { useDrop } from "react-dnd"
import { useRef } from "react"
import { ItemType } from "../types"

export interface ColumnProps {
  cards: CardProps[],
  onDrop: (card: CardProps, status: string) => void,
  status: string
}

export const Column = ({ cards, onDrop, status }: ColumnProps) => {
  const ref = useRef(null)
  const [{ isOver }, drop] = useDrop({
    accept: ItemType.CARD,
    drop: (item: CardProps) => onDrop(item, status),
    collect: (monitor) => ({
      isOver: !!monitor.isOver()
    })
  })

  drop(ref)

  return (
    <Stack
      ref={ref}
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
      <List spacing={3}>
        {cards.map((card) => (
          <ListItem>
            <CardComponent card={card} />
          </ListItem>
        ))}
      </List>
    </Stack>
  )
}
