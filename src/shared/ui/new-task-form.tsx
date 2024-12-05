import { InputWithTag } from "@/components/tag-input";
import { useProjectStore } from "@/stores/project.store";
import {
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
import { FC, useEffect, useRef, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { TagListHandle, Task } from "../utils/types";
import { createNewTask } from "@/api/task";

interface FormValues {
  title: string;
  description: string;
  assignees: Option[];
  due: Date;
  tags: Option[];
}

interface Option {
  value: string;
  colorScheme?: string;
}

type AddNewTaskFormProps = {
  status: string;
} & Partial<UseDisclosureProps>;

export const AddNewTaskForm: FC<AddNewTaskFormProps> = ({
  onClose,
  isOpen,
  status,
}) => {
  const { register, control, handleSubmit } = useForm<FormValues>();

  const currentProject = useProjectStore((state) => state.currentProject);
  const [options, setOptions] = useState<Option[]>([]);

  const tagListRef = useRef<TagListHandle>(null);

  useEffect(() => {
    const newOptions = currentProject.members
      ? currentProject.members.map((member) => {
          return {
            value: member.information.id,
            label: member.information.name,
          } as Option;
        })
      : [];
    setOptions(newOptions);
  }, [currentProject.members, currentProject]);

  const onSubmit = handleSubmit(async (data) => {
    const task = {
      title: data.title,
      description: data.description,
      due: data.due,
      assignees: data.assignees.map((assignee) => ({ userId: assignee.value })),
      tags: tagListRef.current?.tags,
      projectId: currentProject.id,
      status: status,
    } as Task;

    const response = await createNewTask(task);

    useProjectStore.setState({ currentProject: response.currentProject });
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
                <FormLabel>Assignees</FormLabel>
                <Controller
                  name="assignees"
                  control={control}
                  render={({ field }) => (
                    <Select
                      {...field}
                      isMulti
                      variant="flushed"
                      options={options}
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
                {/* <Controller */}
                {/*   name="tags" */}
                {/*   control={control} */}
                {/*   render={({ field }) => ( */}
                {/*     <Select */}
                {/*       {...field} */}
                {/*       isMulti */}
                {/*       variant="flushed" */}
                {/*       options={[ */}
                {/*         { */}
                {/*           label: "Design", */}
                {/*           value: "Design", */}
                {/*           colorScheme: "teal", */}
                {/*         }, */}
                {/*         { */}
                {/*           label: "Web", */}
                {/*           value: "Web", */}
                {/*           colorScheme: "red", */}
                {/*         }, */}
                {/*       ]} */}
                {/*     ></Select> */}
                {/*   )} */}
                {/* /> */}
                <InputWithTag ref={tagListRef} />
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
