import { createNewColumn } from "@/api/column";
import { Task } from "@/shared/utils/types";
import { useProjectStore } from "@/stores/project.store";
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
import { Column } from "./column";

type CardWithStatus = Record<string, Task[]>;

export const KanbanBoard = () => {
  const [statuses, setStatuses] = useState<string[]>([]);

  const [tasks, setTasks] = useState<CardWithStatus>({});
  const { isOpen, onClose, onOpen } = useDisclosure();
  const titleRef = useRef<HTMLInputElement>(null);
  const currentProject = useProjectStore((state) => state.currentProject);

  useEffect(() => {
    if (!currentProject.tasks) {
      return;
    }

    if (!currentProject.columns) {
      return;
    }
    setStatuses([...currentProject.columns]);

    setTasks(
      Object.groupBy(
        currentProject.tasks,
        ({ status }) => status,
      ) as CardWithStatus,
    );
  }, [currentProject]);

  const handleCreateNewList = async () => {
    if (!titleRef.current) {
      return;
    }
    const title = titleRef.current.value;

    const newColumn = await createNewColumn(
      {
        name: title,
      },
      currentProject.id,
    );

    setStatuses([...statuses, newColumn.name]);

    onClose();
  };

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

    const sourceStatus = source.droppableId as Task["status"];
    const destinationStatus = destination.droppableId as Task["status"];
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
    sourcePost: Task,
    source: { status: Task["status"]; index: number },
    destination: {
      status: Task["status"];
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
        <Box pt={{ base: "10rem" }} px={{ base: "1rem" }}>
          <Box display="flex" minW="700px" gap={2}>
            {statuses.map((status, index) => {
              return (
                <Column cards={tasks[status]} status={status} key={index} />
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
