import { Box } from "@chakra-ui/react"

export const SideBar = () => {

  return (
    <Box
      display={{ base: "none", md: "flex" }}
      w={{ md: "300px" }}
      borderRightWidth="1px"
      borderStyle="solid"
      borderRight="1px"
      borderColor="#DBDBDB"
    >
      SideBar here
    </Box >

  )
}
