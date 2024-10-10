"use client"

import { Box, Text } from "@chakra-ui/react"
import { ProjectManagementIcon } from "../assets/icons/logo"
import { DoubleArrowLeft } from "../assets/icons/double-arrow"




export const NavBar = () => {
  return (
    <Box
      as="nav"
      w="100%"
      borderBottom="1px"
      borderBottomWidth="1px"
      borderBottomColor="#DBDBDB"

    >
      <Box
        w={{ md: "300px" }}
        borderRightWidth="1px"
        borderStyle="solid"
        borderRight="1px"
        borderRightColor="#DBDBDB"
        padding="20px"
        display="flex"
        justifyContent="space-between"
      >
        <Box display="inline-flex">
          <ProjectManagementIcon />
          <Text
            ml={3}
            fontWeight="semibold"
          >
            Project M.
          </Text>
        </Box>
        <DoubleArrowLeft />
      </Box>
    </Box>
  )
}
