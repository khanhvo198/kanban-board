import { Box, List, ListIcon, ListItem, Text } from "@chakra-ui/react"
import { HomeIcon } from "../assets/icons/home"
import { MemberIcon } from "../assets/icons/member"
import { SettingIcon } from "../assets/icons/setting"

export const SideBar = () => {
  return (
    <Box
      display={{ base: "none", md: "flex" }}
      w={{ md: "255px" }}
      borderRightWidth="1px"
      borderStyle="solid"
      borderRight="1px"
      borderColor="#DBDBDB"
    >
      <List spacing={6} px="15px" py="30px">
        <ListItem display="flex">
          <ListIcon as={HomeIcon} />
          <Text ml={4}>Home</Text>
        </ListItem>
        <ListItem display="flex">
          <ListIcon as={MemberIcon} />
          <Text ml={4}>Members</Text>
        </ListItem>
        <ListItem display="flex">
          <ListIcon as={SettingIcon} />
          <Text ml={4}>Settings</Text>
        </ListItem>
      </List>
    </Box >

  )
}
