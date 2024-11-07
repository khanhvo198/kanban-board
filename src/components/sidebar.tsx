import { Avatar, Box, Button, Flex, FormControl, Icon, IconButton, Input, List, ListIcon, ListItem, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Stack, Text, useColorModeValue, useDisclosure } from "@chakra-ui/react"
import { FaCircle } from "react-icons/fa"
import { AddIcon } from "../../public/assets/icons/add-button"
import { useRef } from "react"


export const SideBar = () => {
  const textColor = useColorModeValue('#787486', 'white')

  const titleRef = useRef<HTMLInputElement>(null)

  const { isOpen, onOpen, onClose } = useDisclosure()

  const handleCreateNewProject = () => {

  }

  const handleOnClick = () => {
    console.log("Hahahah")

  }

  return (
    <>
      <Box
        display={{ base: "none", md: "flex" }}
        flexDirection="column"
        minW={{ md: "255px" }}
        borderRightWidth="1px"
        borderStyle="solid"
        borderRight="1px"
        borderColor="#DBDBDB"
        position="fixed"
        top="0"
        left="0"
        bottom="100vh"
        bg={useColorModeValue('#fff', '#000')}
        zIndex="100"
        minH="100%"
        justifyContent="space-between"
      >
        <List spacing={6} px="20px" py="30px">
          <ListItem display="flex" alignItems="center" justifyContent="space-between">
            <Text color={textColor} fontSize="sm" fontWeight="bold">MY PROJECTS</Text>
            <IconButton
              icon={<AddIcon />}
              aria-label="new-project"
              onClick={onOpen}
              variant="unstyled"
              display="flex"
              justifyContent="end"
            />
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

        <Stack mb={5}>
          <hr style={{ width: "100%", margin: "auto", borderColor: "#DBDBDB" }} />
          <Flex alignItems="center" justifyContent="center">
            <Avatar size="sm" />
            <Stack ml="1rem" spacing={0}>
              <Text fontWeight="semibold">Khanh Vo Tuan</Text>
              <Text color="#868686">KhanhVT4@fpt.com</Text>
            </Stack>
          </Flex>
        </Stack>
      </Box >

      <Modal onClose={onClose} size={{ base: 'sm', md: 'md' }} isOpen={isOpen}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Create New Project</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <FormControl>
              <Input variant="flushed" ref={titleRef} placeholder='Add title for this project' size="lg" />
            </FormControl>
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={handleCreateNewProject}>Create</Button>
            <Button onClick={onClose}>Close</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}
