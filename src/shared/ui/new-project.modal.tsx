import {
  Button,
  FormControl,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  UseDisclosureProps,
} from "@chakra-ui/react";
import { FC, useRef } from "react";

interface Props extends UseDisclosureProps {
  onCreate: (title: string) => void;
}

export const NewProjectModal: FC<Props> = ({ isOpen, onClose, onCreate }) => {
  const titleRef = useRef<HTMLInputElement>(null);

  const handleOnCreate = () => {
    const title = titleRef.current?.value;

    if (title) {
      onCreate(title);
    }
  };

  return (
    <Modal onClose={onClose!} size={{ base: "sm", md: "md" }} isOpen={isOpen!}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Create New Project</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <FormControl>
            <Input
              variant="flushed"
              ref={titleRef}
              placeholder="Add title for this project"
              size="lg"
            />
          </FormControl>
        </ModalBody>
        <ModalFooter>
          <Button colorScheme="blue" mr={3} onClick={handleOnCreate}>
            Create
          </Button>
          <Button onClick={onClose}>Close</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};
