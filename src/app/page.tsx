"use client"
import { AddIcon } from "@chakra-ui/icons";
import { Avatar, AvatarGroup, Box, Button, Divider, Flex, Heading, IconButton, List, ListItem, Stack, Text } from "@chakra-ui/react";
import { CiViewTable } from "react-icons/ci";
import { FaCircle } from "react-icons/fa";
import { LuKanbanSquare } from "react-icons/lu";
import { CardComponent } from "./components/card";
import { Section } from "./components/section";
import { ToggleThemeButton } from "./components/toggle-theme-button";

export default function Home() {
  return (
    <Box w="100%">
      <Box
        px={{ base: "1rem", md: "3rem" }}
        py={{ base: "0.8", md: "1rem" }}
        w="100%"
        display="flex"
        justifyContent="space-between"
        alignItems="center"
      >
        <Heading as="h2" fontWeight="semibold" fontSize="3xl">
          Mobile App
        </Heading>

        <ToggleThemeButton />
      </Box >
      <Box
        px={{ base: "1rem", md: "3rem" }}
        borderBottom="1px solid #DBDBDB"
      >
        <Flex justifyContent="space-between">
          <Flex>
            <Section>Discussions</Section>
            <Section isActive>Tasks</Section>
            <Section>Files</Section>
          </Flex>

          <Flex align="center">
            <AvatarGroup size="sm" max={3} ml="3" px={2}>
              <Avatar />
              <Avatar />
              <Avatar />
              <Avatar />
              <Avatar />
            </AvatarGroup>
            <Divider orientation='vertical' px={1} borderColor="#DBDBDB" mb={1} h="28px" />
            <IconButton
              aria-label="add-member"
              icon={<AddIcon />}
              mb={1}
              borderRadius="full"
              size="sm"
            />
          </Flex>
        </Flex>
      </Box>
      <Box
        px={{ base: "1rem" }}
        py={{ base: "1rem" }}
      >
        <Button leftIcon={<LuKanbanSquare />} mr={2}>Kanban</Button>
        <Button leftIcon={<CiViewTable />} colorScheme="blackAlpha">Table</Button>
      </Box>
      <Stack px={{ base: "1rem" }} w="350px">
        <Flex align="center">
          <FaCircle color="red" fontSize="8px" />
          <Text ml={2}>
            New Request
          </Text>
        </Flex>
        <IconButton aria-label="add-icon" icon={<AddIcon />} />
        <List>
          <ListItem>
            <CardComponent />
          </ListItem>
        </List>
      </Stack>
    </Box>
  );
}
