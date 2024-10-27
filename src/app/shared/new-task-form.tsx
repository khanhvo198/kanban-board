import { AddIcon } from "@chakra-ui/icons";
import { Button, Checkbox, Flex, FormControl, FormLabel, Input, List, ListIcon, ListItem, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Stack, Text, Textarea, useDisclosure, VStack } from "@chakra-ui/react";
import { FC, useState } from "react";
import { CiCircleRemove } from "react-icons/ci";
import { FaRegCircle } from "react-icons/fa";
import { Select } from "chakra-react-select"
import { MdOutlineChecklist } from "react-icons/md";

interface TaskFormProps {

}


export const AddNewTaskForm: FC<TaskFormProps> = () => {
  const [checkList, setCheckList] = useState<string[]>([])

  const handleAddNewCheckList = () => {

    setCheckList([
      ...checkList,
      ""
    ])
  }

  const handleRemoveCheckList = (index: number) => {
    checkList.splice(index, 1)
    setCheckList([...checkList])
  }

  const handleOnChangeCheckList = (event: React.ChangeEvent<HTMLInputElement>, index: number) => {
    checkList[index] = event.target.value
    setCheckList([
      ...checkList
    ])
  }

  return (
    <>
      <Stack>
        <FormControl>
          <Input variant="flushed" placeholder='Title' size="lg" />
        </FormControl>
        <FormControl>
          <Textarea
            variant="flushed"
            placeholder='Description'
            size='lg'
          />
        </FormControl>
        <FormControl>
          <FormLabel>Assignee</FormLabel>
          <Select
            isMulti
            variant="flushed"
            options={[
              {
                label: "MyStic",
                value: "MyStic"
              },
              {
                label: "Gumayusi",
                value: "Gumayusi"
              }
            ]}
          >

          </Select>
        </FormControl>
        <FormControl mt={6} >
          <FormLabel fontWeight="semibold">Due date</FormLabel>
          <Input variant="flushed" type="date" placeholder="Due date" />
        </FormControl>
        <FormControl mt={6}>
          <Flex justify="space-between" align="center">
            <FormLabel fontWeight="semibold">Check list</FormLabel>
            <AddIcon onClick={handleAddNewCheckList} cursor="pointer" />
          </Flex>
          <List>
            {checkList.map((text, index) => (
              <ListItem display="flex" alignItems="center" key={index}>
                <ListIcon as={MdOutlineChecklist} />
                <Input variant="flushed" value={text} onChange={(event) => handleOnChangeCheckList(event, index)} />
                <ListIcon as={CiCircleRemove} fontSize="20" onClick={() => handleRemoveCheckList(index)} />
              </ListItem>
            ))}
          </List>
        </FormControl>
        <FormControl mt={6}>
          <FormLabel>Tags</FormLabel>
          <Select
            isMulti
            variant="flushed"
            options={[
              {
                label: "Design",
                value: "Design",
                colorScheme: "teal",
              },
              {
                label: "Web",
                value: "Web",
                colorScheme: "red"
              },
            ]}
          >

          </Select>
        </FormControl>
      </Stack>

    </>
  )

}
