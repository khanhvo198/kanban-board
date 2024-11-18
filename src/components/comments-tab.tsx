import {
  Avatar,
  Box,
  Input,
  InputGroup,
  InputRightElement,
  List,
  ListItem,
  Stack,
  Text,
} from "@chakra-ui/react";
import { FC, useEffect, useRef } from "react";
import { PiPaperPlaneTiltThin } from "react-icons/pi";

interface CommentMessageProps {
  isAuthor: boolean;
}

const CommentMessage: FC<CommentMessageProps> = ({ isAuthor }) => {
  return (
    <ListItem
      display="flex"
      flexDirection={isAuthor ? "row-reverse" : "row"}
      justifyContent="space-between"
      alignItems="center"
    >
      <Avatar size="sm" />
      <Box border="1px solid #868686" p={2} w="90%" borderRadius="5px">
        <Text>Test comment</Text>
      </Box>
    </ListItem>
  );
};

export const CommentsTab = () => {
  const bottomBoxRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    bottomBoxRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, []);

  return (
    <Stack>
      <List mt={5} spacing={3} pb="50px">
        <CommentMessage isAuthor={false} />
        <CommentMessage isAuthor={false} />
        <CommentMessage isAuthor={false} />
        <CommentMessage isAuthor={true} />
        <CommentMessage isAuthor={true} />
        <CommentMessage isAuthor={false} />
        <CommentMessage isAuthor={false} />
        <CommentMessage isAuthor={false} />
        <CommentMessage isAuthor={true} />
        <CommentMessage isAuthor={true} />
      </List>
      <Box ref={bottomBoxRef} />
      <Box
        position="fixed"
        bottom="10px"
        left="10px"
        width="93%"
        backdropFilter="blur(10px)"
      >
        <InputGroup display="flex">
          <Input borderColor="#868686" />
          <InputRightElement>
            <PiPaperPlaneTiltThin />
          </InputRightElement>
        </InputGroup>
      </Box>
    </Stack>
  );
};
