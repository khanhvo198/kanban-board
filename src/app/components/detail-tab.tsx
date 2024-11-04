import { Box, Checkbox, Flex, Link, List, ListIcon, ListItem, Stack, Text, Textarea } from "@chakra-ui/react"
import { useState } from "react"
import { BsFileImage, BsFilePdf, BsFilesAlt } from "react-icons/bs"
import { FaRegFile } from "react-icons/fa"
import { MdAttachFile } from "react-icons/md"

interface CheckListState {
  id: number,
  isChecked: boolean,
  text: string

}

interface AttachmentState {
  id: number,
  fileName: string,
  fileType: string
}



const mockCheckListData: CheckListState[] = [
  {
    id: 1,
    isChecked: true,
    text: "Complete task 1, everything is done"
  },
  {
    id: 2,
    isChecked: false,
    text: "Complete task 2"
  },
  {
    id: 3,
    isChecked: false,
    text: "Complete task 3"
  },
  {
    id: 4,
    isChecked: false,
    text: "Complete task 3"
  },
  {
    id: 5,
    isChecked: false,
    text: "Complete task 3"
  }


]

const mockFileData: AttachmentState[] = [
  {
    id: 1,
    fileName: "Who naming for this river.pdf",
    fileType: "PDF"
  },
  {
    id: 1,
    fileName: "Test test test test.png",
    fileType: "PNG"
  }
]

export const DetailTab = () => {
  const [checkList, setCheckList] = useState<CheckListState[]>(mockCheckListData)
  const [attachments, setAttachments] = useState<AttachmentState[]>(mockFileData)

  const handleToggleCheckBox = (id: number) => {
    const task = checkList.find(task => task.id === id)
    if (task) {
      task.isChecked = !task.isChecked

      setCheckList([
        ...checkList
      ])
    }
  }

  const handleFormatThumbnail = (type: string) => {
    const regxImage = /(gif|jp?g|bmp|png)/
    if (type) {
      if (type.toLowerCase().includes("pdf")) {
        return BsFilePdf
      } else if (regxImage.test(type.toLowerCase())) {
        return BsFileImage
      } else {
        return BsFilesAlt
      }
    } else {
      return BsFilesAlt
    }
  }

  return (
    <Stack>

      <Box
        w="100%"
        pb={20}
        borderRadius="20px"
        bg="#F0F0F0"
        mt={2}
        pl={5}
        pt={3}
      >
        Hello worlds
      </Box>
      <Stack mt={2}>
        <Flex justifyContent="space-between">
          <Text fontWeight="semibold">Subtasks</Text>
          <Text fontWeight="semibold">
            {
              checkList.filter(task => task.isChecked).length
            }
            /
            {
              checkList.length
            }
          </Text>
        </Flex>
        {
          checkList.map((task, index) => {
            return (
              <Checkbox key={index} isChecked={task.isChecked} onChange={() => handleToggleCheckBox(task.id)} textDecoration={task.isChecked ? "line-through" : ""}>{task.text}</Checkbox>
            )
          })
        }
      </Stack>

      <Stack mt={2}>
        <Text fontWeight="semibold">Attachments</Text>
        <List spacing={2}>
          {
            attachments.map((attachment, index) => (
              <Box key={index} border="0.5px solid #868686" borderRadius="5px" p="5px">
                <ListItem display="flex" alignItems="center" justifyItems="space-between">
                  <ListIcon as={handleFormatThumbnail(attachment.fileType)} fontSize="32px" />
                  <Stack spacing={0}>
                    <Link href="#" isTruncated color="blue">{attachment.fileName}</Link>
                    <Text fontSize="sm">Type: {attachment.fileType}</Text>
                  </Stack>
                </ListItem>
              </Box>
            ))
          }
        </List>

      </Stack>
    </Stack>
  )
}
