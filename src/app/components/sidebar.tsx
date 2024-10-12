import { Box, List, ListIcon, ListItem, Text } from "@chakra-ui/react"
import { HomeIcon } from "../assets/icons/home"
import { MemberIcon } from "../assets/icons/member"
import { SettingIcon } from "../assets/icons/setting"
import { audio } from "framer-motion/client"
import { AddIcon } from "../assets/icons/add-button"
import { CircleWithColor } from "./circle-with-color"
import { FaCircle } from "react-icons/fa"

export const SideBar = () => {
  return (
    <Box
      display={{ base: "none", md: "block" }}
      w={{ md: "255px" }}
      borderRightWidth="1px"
      borderStyle="solid"
      borderRight="1px"
      borderColor="#DBDBDB"
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
      </List>

      <hr style={{ width: "90%", margin: "auto", borderColor: "#DBDBDB" }} />

      <List spacing={6} px="20px" py="30px">
        <ListItem display="flex" alignItems="center" justifyContent="space-between">
          <Text color="#787486" fontSize="sm" fontWeight="bold">MY PROJECTS</Text>
          <ListIcon as={AddIcon}></ListIcon>
        </ListItem>
        <ListItem display="flex" alignItems="center">
          <ListIcon as={FaCircle} color="#7AC555" fontSize="8px" />
          <Text ml={3} fontWeight="bold">Mobile App</Text>
        </ListItem>
        <ListItem display="flex" alignItems="center">
          <ListIcon as={FaCircle} color="#FFA500" fontSize="8px" />
          <Text ml={3} color="#787486">Website Redesign</Text>
        </ListItem>
        <ListItem display="flex" alignItems="center">
          <ListIcon as={FaCircle} color="#E4CCFD" fontSize="8px" />
          <Text ml={3} color="#787486">Design System</Text>
        </ListItem>
        <ListItem display="flex" alignItems="center">
          <ListIcon as={FaCircle} color="#76A5EA" fontSize="8px" />
          <Text ml={3} color="#787486">Wireframes</Text>
        </ListItem>
      </List>

    </Box >
  )
}
