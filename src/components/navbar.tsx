"use client";

import {
  Avatar,
  AvatarGroup,
  Box,
  Button,
  Divider,
  Flex,
  Heading,
  useColorModeValue,
} from "@chakra-ui/react";
import { CiViewTable } from "react-icons/ci";
import { LuKanbanSquare } from "react-icons/lu";
import { AddMemberButton } from "./add-member-button";
import { Section } from "./section";
import { ToggleThemeButton } from "./toggle-theme-button";
import { useProjectStore } from "@/stores/project.store";

export const NavBar = () => {
  const { name, members } = useProjectStore((state) => state.currentProject);

  return (
    <Box
      position="fixed"
      bg={useColorModeValue("#fff", "#000")}
      right="0"
      left={{ base: 0, md: "255px" }}
      zIndex="100"
    >
      <Box
        px={{ base: "1rem" }}
        py={{ base: "1rem" }}
        display="flex"
        justifyContent="space-between"
        alignItems="center"
      >
        <Heading as="h2" fontWeight="semibold" fontSize="3xl">
          {name}
        </Heading>

        <ToggleThemeButton />
      </Box>
      <Box px={{ base: "1rem" }} borderBottom="1px solid #DBDBDB">
        <Flex justifyContent="space-between">
          <Flex>
            <Section>Discussions</Section>
            <Section isActive>Tasks</Section>
            <Section>Files</Section>
          </Flex>

          <Flex align="center">
            <AvatarGroup size="sm" max={3} ml="3" px={2}>
              {members &&
                members.map((member) => <Avatar key={member.information.id} />)}
            </AvatarGroup>
            <Divider
              orientation="vertical"
              px={1}
              borderColor="#DBDBDB"
              mb={1}
              h="28px"
            />
            <AddMemberButton />
          </Flex>
        </Flex>
      </Box>
    </Box>
  );
};
