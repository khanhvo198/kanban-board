"use client";
import {
  Avatar,
  AvatarGroup,
  Box,
  Card,
  CardBody,
  Drawer,
  DrawerContent,
  DrawerOverlay,
  Flex,
  Heading,
  HStack,
  Stack,
  Tag,
  Text,
  useColorModeValue,
  useDisclosure,
} from "@chakra-ui/react";
import { Draggable } from "@hello-pangea/dnd";
import { useRef } from "react";
import { IoIosAttach } from "react-icons/io";
import { LuMessageSquare } from "react-icons/lu";
import { PreviewTaskForm } from "./preview-task-form";
import { Task } from "@/shared/utils/types";

export const CardComponent = ({
  card,
  index,
}: {
  card: Task;
  index: number;
}) => {
  const cardRef = useRef(null);

  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Draggable
        key={String(card.id)}
        draggableId={String(card.id)}
        index={index}
      >
        {(provided, snapshot) => (
          <Box
            {...provided.draggableProps}
            {...provided.dragHandleProps}
            ref={provided.innerRef}
          >
            <Card
              bgColor={useColorModeValue("#EEF2F6", "#141414")}
              onClick={onOpen}
              ref={cardRef}
            >
              <CardBody px={4} pt={4}>
                <Stack>
                  <HStack spacing={2} wrap="wrap">
                    {card.tags.map((tag) => (
                      <Tag
                        key={tag.name}
                        size="md"
                        colorScheme={tag.colorScheme}
                      >
                        {tag.name}
                      </Tag>
                    ))}
                  </HStack>
                  <Heading fontWeight="semibold" fontSize="md">
                    {card.title}
                  </Heading>
                  <Text fontSize="sm" color="#4D4F52">
                    {card.description}
                  </Text>
                  <Flex justifyContent="space-between">
                    <AvatarGroup max={2} size="sm">
                      {card.assignees.map((assignee) => (
                        <Avatar key={assignee.userId} />
                      ))}
                    </AvatarGroup>
                    <HStack>
                      {card.comments.length > 0 && (
                        <Flex align="center">
                          <LuMessageSquare size="16px" />
                          <Text fontSize="xs">{card.comments.length}</Text>
                        </Flex>
                      )}
                      {card.files.length > 0 && (
                        <Flex align="center">
                          <IoIosAttach size="16px" />
                          <Text fontSize="xs">{card.files.length}</Text>
                        </Flex>
                      )}
                    </HStack>
                  </Flex>
                </Stack>
              </CardBody>
            </Card>
          </Box>
        )}
      </Draggable>
      <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        finalFocusRef={cardRef}
        size="md"
      >
        <DrawerOverlay />
        <DrawerContent>
          <PreviewTaskForm />
        </DrawerContent>
      </Drawer>
    </>
  );
};
