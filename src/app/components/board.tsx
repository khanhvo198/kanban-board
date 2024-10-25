import { Box } from "@chakra-ui/react"
import { DragDropContext, DropResult } from "@hello-pangea/dnd"
import { useEffect, useState } from "react"
import { CardProps } from "./card"
import { Column } from "./column"
interface DataType {
  columnname: string,
  cards: CardProps[]
}

const data: CardProps[] = [
  {
    id: 1,
    text: "hehehe1",
    status: "NEW"
  },
  {
    id: 2,
    text: "hehehe2",
    status: "NEW"
  },
  {
    id: 3,
    text: "hehehe3",
    status: "IN_PROGRESS"
  },
  {
    id: 4,
    text: "hehehe4",
    status: "IN_PROGRESS"
  },
]

export const KanbanBoard = () => {


  const statuses = ["NEW", "IN_PROGRESS"]

  const [tasks, setTasks] = useState<CardProps[]>(data)


  const handleOnDragEnd = (result: DropResult) => {
    const { destination, source } = result
    if (!destination) {
      return
    }

    if (destination.droppableId === source.droppableId && destination.index === source.index) {
      return
    }
  }


  return (
    <DragDropContext onDragEnd={handleOnDragEnd}>
      <Box
        pt={{ base: "12rem" }}
        px={{ base: "1rem" }}
      >
        <Box
          display="flex"
          justifyContent="space-between"
          minW="700px"
          gap={2}
        >
          {
            statuses.map(status => {
              const cards: CardProps[] = tasks.filter(task => task.status === status)
              return <Column cards={cards} status={status} key={status} />
            })
          }
        </Box>
      </Box>
    </DragDropContext>
  )
}
