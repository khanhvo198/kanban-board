import { AddNewTaskForm } from "@/shared/ui/new-task-form";
import { AddIcon } from "@chakra-ui/icons";
import {
  Box,
  Flex,
  IconButton,
  List,
  ListItem,
  Stack,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import { Droppable } from "@hello-pangea/dnd";
import { FaCircle } from "react-icons/fa";
import { CardComponent, CardProps } from "./card";

export interface ColumnProps {
  cards: CardProps[];
  status: string;
}

export const Column = ({ cards, status }: ColumnProps) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Stack w="350px">
        <Flex justifyContent="space-between">
          <Flex align="center">
            <FaCircle color="red" fontSize="8px" />
            <Text ml={2}>{status}</Text>
          </Flex>
          <IconButton
            icon={<AddIcon />}
            aria-label="add-new-task"
            onClick={onOpen}
          />
        </Flex>
        {/* <IconButton aria-label="add-icon" icon={<AddIcon />} onClick={onOpen} /> */}
        <Droppable droppableId={status}>
          {(droppableProvided, snapshot) => (
            <Box maxHeight="calc(100vh - 10rem) " overflowY="scroll">
              <List
                as="div"
                pb="5rem"
                spacing={3}
                ref={droppableProvided.innerRef}
                {...droppableProvided.droppableProps}
              >
                {cards &&
                  cards.map((card, index) => (
                    <ListItem key={card.id}>
                      <CardComponent card={card} index={index} />
                    </ListItem>
                  ))}
                {droppableProvided.placeholder}
              </List>
            </Box>
          )}
        </Droppable>
      </Stack>
      <AddNewTaskForm isOpen={isOpen} onClose={onClose} />
    </>
  );
};
