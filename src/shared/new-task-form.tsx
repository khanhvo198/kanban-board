import { AddIcon } from "@chakra-ui/icons";
import { Flex, FormControl, FormLabel, Input, List, ListIcon, ListItem, Stack, Text, Textarea } from "@chakra-ui/react";
import { Select } from "chakra-react-select";
import { FC, useState } from "react";
import { CiCircleRemove } from "react-icons/ci";
import { MdOutlineChecklist } from "react-icons/md";
import { FileUpload } from "../components/file-upload";

interface TaskFormProps {

}

export const AddNewTaskForm: FC<TaskFormProps> = () => {
  const [checkList, setCheckList] = useState<string[]>([])
  const [files, setFiles] = useState<File[]>([])

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

  const handleRemoveFile = (index: number) => {
    files.splice(index, 1)
    setFiles([...files])
  }

  const handleOnChangeCheckList = (event: React.ChangeEvent<HTMLInputElement>, index: number) => {
    checkList[index] = event.target.value
    setCheckList([
      ...checkList
    ])
  }

  const handleOnFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.files)
    if (e.target.files) {
      const newFiles = Array.from(e.target.files)
      setFiles((prevFiles) => [...prevFiles, ...newFiles])
    }
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
            <FormLabel fontWeight="semibold" m="0">Check list</FormLabel>
            <AddIcon onClick={handleAddNewCheckList} cursor="pointer" />
          </Flex>
          <List>
            {checkList.map((text, index) => (
              <ListItem display="flex" alignItems="center" key={index}>
                <ListIcon as={MdOutlineChecklist} />
                <Input variant="flushed" value={text} onChange={(event) => handleOnChangeCheckList(event, index)} />
                <ListIcon as={CiCircleRemove} fontSize="20" onClick={() => handleRemoveCheckList(index)} cursor="pointer" />
              </ListItem>
            ))}
          </List>
        </FormControl>
        <FormControl mt={6}>
          <Flex justify="space-between" align="center">
            <FormLabel fontWeight="semibold" m="0">Attachments</FormLabel>
            <FileUpload onChange={handleOnFileChange} />
          </Flex>
          <List spacing={2} mt={2}>
            {
              files.map((file, index) => (
                <ListItem key={index} display="flex" alignItems="center" justifyItems="space-between">
                  <Text flexGrow="1" isTruncated>{file.name}</Text>
                  <ListIcon as={CiCircleRemove} fontSize="20" onClick={() => handleRemoveFile(index)} cursor="pointer" />
                </ListItem>
              ))
            }
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
