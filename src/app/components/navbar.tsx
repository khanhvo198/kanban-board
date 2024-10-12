"use client"

import { Box, Text } from "@chakra-ui/react"
import { ProjectManagementIcon } from "../assets/icons/logo"
import { DoubleArrowIcon } from "../assets/icons/double-arrow"
import styled from "@emotion/styled"

const LogoBox = styled.div`
  border-right: 1px solid #DBDBDB;
  border-bottom: 1px solid #DBDBDB;
  display: flex;
  justifyContent: space-between;
`

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
        w={{ md: "255px" }}
        borderRightWidth="1px"
        borderStyle="solid"
        borderRight="1px"
        borderRightColor="#DBDBDB"
        padding="30px"
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
    </Box>
  )
}
