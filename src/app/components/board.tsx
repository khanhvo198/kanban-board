import { Box } from "@chakra-ui/react"
import { Column } from "./column"
import { CardProps } from "./card"
import { useState } from "react"
interface DataType {
  columnname: string,
  cards: CardProps[]
}

export const KanbanBoard = () => {

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

  const statuses = ["NEW", "IN_PROGRESS"]

  const [tasks, setTasks] = useState(data)

  const moveCard = (card: CardProps, status: string) => {
    console.log(card, status)
    setTasks((previousTask) => previousTask.map(task => task.id === card.id ? { ...task, status } : task))
    console.log(tasks)
  }

  return (
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
            return <Column cards={cards} onDrop={(card, status) => moveCard(card, status)} status={status} />
          })
        }
      </Box>

    </Box>
  )
}
