import { Avatar, Box, List, ListIcon, ListItem, Text, useColorModeValue } from "@chakra-ui/react"
import { FaCircle } from "react-icons/fa"
import { AddIcon } from "../assets/icons/add-button"
import { HomeIcon } from "../assets/icons/home"
import { MemberIcon } from "../assets/icons/member"
import { SettingIcon } from "../assets/icons/setting"
import { NotificationIcon } from "../assets/icons/notification"


export const SideBar = () => {
  const textColor = useColorModeValue('#787486', 'white')
  return (
    <Box
      display={{ base: "none", md: "block" }}
      minW={{ md: "255px" }}
      borderRightWidth="1px"
      borderStyle="solid"
      borderRight="1px"
      borderColor="#DBDBDB"
      position="sticky"
      left="0"
      bg={useColorModeValue('#fff', '#000')}
      zIndex="100"
    >
      <List spacing={6} px="20px" py="30px">
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
        <ListItem display="flex">
          <ListIcon as={NotificationIcon} />
          <Text ml={4}>Notofications</Text>
        </ListItem>
        <ListItem display="flex">
          <Avatar size="xs" />
          <Text ml={4}>Profile</Text>
        </ListItem>
      </List>

      <hr style={{ width: "90%", margin: "auto", borderColor: "#DBDBDB" }} />

      <List spacing={6} px="20px" py="30px">
        <ListItem display="flex" alignItems="center" justifyContent="space-between">
          <Text color={textColor} fontSize="sm" fontWeight="bold">MY PROJECTS</Text>
          <ListIcon as={AddIcon}></ListIcon>
        </ListItem>
        <ListItem display="flex" alignItems="center">
          <ListIcon as={FaCircle} color="#7AC555" fontSize="8px" />
          <Text ml={3} fontWeight="bold">Mobile App</Text>
        </ListItem>
        <ListItem display="flex" alignItems="center">
          <ListIcon as={FaCircle} color="#FFA500" fontSize="8px" />
          <Text ml={3} color={textColor}>Website Redesign</Text>
        </ListItem>
        <ListItem display="flex" alignItems="center">
          <ListIcon as={FaCircle} color="#E4CCFD" fontSize="8px" />
          <Text ml={3} color={textColor}>Design System</Text>
        </ListItem>
        <ListItem display="flex" alignItems="center">
          <ListIcon as={FaCircle} color="#76A5EA" fontSize="8px" />
          <Text ml={3} color={textColor}>Wireframes</Text>
        </ListItem>
      </List>

    </Box >
  )
}
