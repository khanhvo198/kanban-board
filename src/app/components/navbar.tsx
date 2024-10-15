"use client"

import { Avatar, Box, Flex, Icon, IconButton, Stack, Text } from "@chakra-ui/react"
import { ProjectManagementIcon } from "../assets/icons/logo"
import { DoubleArrowIcon } from "../assets/icons/double-arrow"
import { NotoficationIcon } from "../assets/icons/notification"
import { ArrowDown } from "../assets/icons/arrow-down"
import { MoonIcon, SunIcon } from "@chakra-ui/icons"
import { CiDark } from "react-icons/ci"
import { ToggleThemeButton } from "./toggle-theme-button"

export const NavBar = () => {
  return (
    <Box
      as="nav"
      w="100%"
      borderBottom="1px"
      borderBottomWidth="1px"
      borderBottomColor="#DBDBDB"
      display="flex"
      justifyContent="space-between"

    >
      <Box
        minW={{ md: "255px" }}
        borderRight={{ base: 'none', md: '1px solid #DBDBDB' }}
        padding={{ md: "25px" }}
        py={{ base: "25px" }}
        display="flex"
        justifyContent="space-between"
      >
        <Box display={{ base: 'none', md: "inline-flex" }}>
          <ProjectManagementIcon />
          <Text
            ml={3}
            fontWeight="semibold"
          >
            Project M.
          </Text>
        </Box>
        <DoubleArrowIcon />
      </Box>
      <Flex align="center" mr={5}>
        <ToggleThemeButton />
        <Icon as={NotoficationIcon} />
        <Flex align="center" ml={6}>
          <Box lineHeight="sm" textAlign="right">
            <Text>Anima Agrawal</Text>
            <Text fontSize="xs">U.P, India</Text>
          </Box>
          <Avatar name="avatar" size="sm" ml={5} mr={2} />
          <Icon as={ArrowDown} />
        </Flex>
      </Flex>
    </Box >
  )
}
