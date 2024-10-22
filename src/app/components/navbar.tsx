"use client"

import { AddIcon } from "@chakra-ui/icons"
import { Avatar, AvatarGroup, Box, Button, calc, Divider, Flex, Heading, IconButton, useColorModeValue } from "@chakra-ui/react"
import { Section } from "./section"
import { ToggleThemeButton } from "./toggle-theme-button"
import { CiViewTable } from "react-icons/ci"
import { LuKanbanSquare } from "react-icons/lu"

export const NavBar = () => {
  return (
    <Box
      position="fixed"
      bg={useColorModeValue('#fff', '#000')}
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
          Mobile App
        </Heading>

        <ToggleThemeButton />
      </Box >
      <Box
        px={{ base: "1rem" }}
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

    </Box>

  )
}
