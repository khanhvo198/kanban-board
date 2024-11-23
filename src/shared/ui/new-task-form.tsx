import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Stack,
  Textarea,
  UseDisclosureProps,
} from "@chakra-ui/react";
import { Select } from "chakra-react-select";
import { FC, useEffect } from "react";
import { Controller, useForm } from "react-hook-form";

interface FormValues {
  title: string;
  description: string;
  assignee: Option[];
  due: string;
  tags: Option[];
}

interface Option {
  value: string;
  colorScheme?: string;
}

export const AddNewTaskForm: FC<Partial<UseDisclosureProps>> = ({
  onClose,
  isOpen,
}) => {
  const { register, control, handleSubmit } = useForm<FormValues>();

  const onSubmit = handleSubmit((data) => {
    console.log(data);
  });

  return (
    <Modal onClose={onClose!} size={{ base: "sm", md: "md" }} isOpen={isOpen!}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Task</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <form>
            <Stack>
              <FormControl>
                <Input
                  variant="flushed"
                  placeholder="Title"
                  size="lg"
                  {...register("title")}
                />
              </FormControl>
              <FormControl>
                <Textarea
                  variant="flushed"
                  placeholder="Description"
                  size="lg"
                  {...register("description")}
                />
              </FormControl>
              <FormControl>
                <FormLabel>Assignee</FormLabel>
                <Controller
                  name="assignee"
                  control={control}
                  render={({ field }) => (
                    <Select
                      {...field}
                      isMulti
                      variant="flushed"
                      options={[
                        {
                          label: "MyStic",
                          value: "MyStic",
                        },
                        {
                          label: "Gumayusi",
                          value: "Gumayusi",
                        },
                      ]}
                    ></Select>
                  )}
                />
              </FormControl>
              <FormControl mt={6}>
                <FormLabel fontWeight="semibold">Due date</FormLabel>
                <Input
                  variant="flushed"
                  type="date"
                  placeholder="Due date"
                  {...register("due")}
                />
              </FormControl>
              {/* <FormControl mt={6}> */}
              {/*   <Flex justify="space-between" align="center"> */}
              {/*     <FormLabel fontWeight="semibold" m="0"> */}
              {/*       Check list */}
              {/*     </FormLabel> */}
              {/*     <AddIcon onClick={handleAddNewCheckList} cursor="pointer" /> */}
              {/*   </Flex> */}
              {/*   <List> */}
              {/*     {checkList.map((text, index) => ( */}
              {/*       <ListItem display="flex" alignItems="center" key={index}> */}
              {/*         <ListIcon as={MdOutlineChecklist} /> */}
              {/*         <Input */}
              {/*           variant="flushed" */}
              {/*           value={text} */}
              {/*           onChange={(event) => handleOnChangeCheckList(event, index)} */}
              {/*         /> */}
              {/*         <ListIcon */}
              {/*           as={CiCircleRemove} */}
              {/*           fontSize="20" */}
              {/*           onClick={() => handleRemoveCheckList(index)} */}
              {/*           cursor="pointer" */}
              {/*         /> */}
              {/*       </ListItem> */}
              {/*     ))} */}
              {/*   </List> */}
              {/* </FormControl> */}
              {/* <FormControl mt={6}> */}
              {/*   <Flex justify="space-between" align="center"> */}
              {/*     <FormLabel fontWeight="semibold" m="0"> */}
              {/*       Attachments */}
              {/*     </FormLabel> */}
              {/*     <FileUpload onChange={handleOnFileChange} /> */}
              {/*   </Flex> */}
              {/*   <List spacing={2} mt={2}> */}
              {/*     {files.map((file, index) => ( */}
              {/*       <ListItem */}
              {/*         key={index} */}
              {/*         display="flex" */}
              {/*         alignItems="center" */}
              {/*         justifyItems="space-between" */}
              {/*       > */}
              {/*         <Text flexGrow="1" isTruncated> */}
              {/*           {file.name} */}
              {/*         </Text> */}
              {/*         <ListIcon */}
              {/*           as={CiCircleRemove} */}
              {/*           fontSize="20" */}
              {/*           onClick={() => handleRemoveFile(index)} */}
              {/*           cursor="pointer" */}
              {/*         /> */}
              {/*       </ListItem> */}
              {/*     ))} */}
              {/*   </List> */}
              {/* </FormControl> */}
              <FormControl mt={6}>
                <FormLabel>Tags</FormLabel>
                <Controller
                  name="tags"
                  control={control}
                  render={({ field }) => (
                    <Select
                      {...field}
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
                          colorScheme: "red",
                        },
                      ]}
                    ></Select>
                  )}
                />
              </FormControl>
            </Stack>
          </form>
        </ModalBody>
        <ModalFooter>
          <Button colorScheme="blue" mr={3} onClick={onSubmit}>
            Create
          </Button>
          <Button onClick={onClose}>Close</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};
