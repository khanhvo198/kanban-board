import { AddIcon } from "@chakra-ui/icons"
import { Stack, Flex, IconButton, List, ListItem, Text } from "@chakra-ui/react"
import { FaCircle } from "react-icons/fa"
import { CardComponent } from "./card"

export const Column = () => {
  return (
    <Stack w="350px">
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
  )
}
