import {
  Box,
  Button,
  FormControl,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Stack,
  useDisclosure,
} from "@chakra-ui/react";
import { DragDropContext, DropResult } from "@hello-pangea/dnd";
import { useEffect, useRef, useState } from "react";
import { CardProps } from "./card";
import { Column } from "./column";

const data: CardProps[] = [
  {
    id: 1,
    text: "hehehe1",
    status: "New",
  },
  {
    id: 2,
    text: "hehehe2",
    status: "New",
  },
  {
    id: 3,
    text: "hehehe3",
    status: "In progress",
  },
  {
    id: 4,
    text: "hehehe4",
    status: "In progress",
  },
  {
    id: 5,
    text: "hehehe5",
    status: "Done",
  },
  {
    id: 6,
    text: "hehehe6",
    status: "Done",
  },
  {
    id: 7,
    text: "hehehe7",
    status: "Done",
  },
  {
    id: 8,
    text: "hehehe8",
    status: "Done",
  },
];

type CardWithStatus = Record<string, CardProps[]>;

export const KanbanBoard = () => {
  const [statuses, setStatuses] = useState<string[]>([
    "New",
    "In progress",
    "Done",
  ]);

  const [tasks, setTasks] = useState<CardWithStatus>({});

  const { isOpen, onClose, onOpen } = useDisclosure();

  const titleRef = useRef<HTMLInputElement>(null);

  const handleCreateNewList = () => {
    if (!titleRef.current) {
      return;
    }
    const title = titleRef.current.value;
    statuses.push(title);

    setStatuses([...statuses]);

    onClose();
  };

  useEffect(() => {
    setTasks(Object.groupBy(data, ({ status }) => status) as CardWithStatus);
  }, []);

  const handleOnDragEnd = (result: DropResult) => {
    const { destination, source } = result;
    if (!destination) {
      return;
    }

    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      return;
    }

    const sourceStatus = source.droppableId as CardProps["status"];
    const destinationStatus = destination.droppableId as CardProps["status"];
    const sourcePost = tasks[sourceStatus][source.index]!;
    const destinationPost = tasks[destinationStatus][destination.index] ?? {
      status: destinationStatus,
      index: undefined, // undefined if dropped after the last item
    };

    // compute local state change synchronously
    setTasks(
      updatePostStatusLocal(
        sourcePost,
        { status: sourceStatus, index: source.index },
        { status: destinationStatus, index: destination.index },
        tasks,
      ),
    );
  };

  const updatePostStatusLocal = (
    sourcePost: CardProps,
    source: { status: CardProps["status"]; index: number },
    destination: {
      status: CardProps["status"];
      index?: number; // undefined if dropped after the last item
    },
    tasks: CardWithStatus,
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
        sourcePost,
      );
      return {
        ...tasks,
        [source.status]: sourceColumn,
        [destination.status]: destinationColumn,
      };
    }
  };
  return (
    <>
      <DragDropContext onDragEnd={handleOnDragEnd}>
        <Box pt={{ base: "12rem" }} px={{ base: "1rem" }}>
          <Box
            display="flex"
            justifyContent="space-between"
            minW="700px"
            gap={2}
          >
            {statuses.map((status) => {
              return (
                <Column cards={tasks[status]} status={status} key={status} />
              );
            })}

            <Stack w="350px">
              <Button onClick={onOpen}>Add another list</Button>
            </Stack>
          </Box>
        </Box>
      </DragDropContext>

      <Modal onClose={onClose} size={{ base: "sm", md: "md" }} isOpen={isOpen}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Create New List</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <FormControl>
              <Input
                variant="flushed"
                ref={titleRef}
                placeholder="Add title for this list"
                size="lg"
              />
            </FormControl>
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={handleCreateNewList}>
              Create
            </Button>
            <Button onClick={onClose}>Close</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};
