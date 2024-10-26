import { Box } from "@chakra-ui/react"
import { DragDropContext, DropResult } from "@hello-pangea/dnd"
import { useState } from "react"
import { CardProps } from "./card"
import { Column } from "./column"

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

type CardWithStatus = Record<string, CardProps[]>


export const KanbanBoard = () => {


  const statuses = ["NEW", "IN_PROGRESS"]

  const [tasks, setTasks] = useState<CardWithStatus>(Object.groupBy(data, ({ status }) => status) as CardWithStatus)


  const handleOnDragEnd = (result: DropResult) => {
    const { destination, source } = result
    if (!destination) {
      return
    }

    if (destination.droppableId === source.droppableId && destination.index === source.index) {
      return;
    }

    console.log(destination, source)

    const sourceStatus = source.droppableId as CardProps["status"];
    const destinationStatus = destination.droppableId as CardProps["status"];
    const sourcePost = tasks[sourceStatus][source.index]!;
    const destinationPost = tasks[destinationStatus][
      destination.index
    ] ?? {
      status: destinationStatus,
      index: undefined, // undefined if dropped after the last item
    };

    // compute local state change synchronously
    setTasks(
      updatePostStatusLocal(
        sourcePost,
        { status: sourceStatus, index: source.index },
        { status: destinationStatus, index: destination.index },
        tasks
      )
    );


  }

  const updatePostStatusLocal = (
    sourcePost: CardProps,
    source: { status: CardProps["status"]; index: number },
    destination: {
      status: CardProps["status"];
      index?: number; // undefined if dropped after the last item
    },
    tasks: CardWithStatus
  ) => {
    if (source.status === destination.status) {
      // moving deal inside the same column
      const column = tasks[source.status];
      column.splice(source.index, 1);
      column.splice(destination.index ?? column.length + 1, 0, sourcePost);
      return {
        ...tasks,
        [destination.status]: column,
      };
    } else {
      // moving deal across columns
      const sourceColumn = tasks[source.status];
      const destinationColumn = tasks[destination.status];
      sourceColumn.splice(source.index, 1);
      destinationColumn.splice(
        destination.index ?? destinationColumn.length + 1,
        0,
        sourcePost
      );
      return {
        ...tasks,
        [source.status]: sourceColumn,
        [destination.status]: destinationColumn,
      };
    }
  };
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
              return <Column cards={tasks[status]} status={status} key={status} />
            })
          }
        </Box>
      </Box>
    </DragDropContext>
  )
}
