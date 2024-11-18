import { Box, Text } from "@chakra-ui/react";
import { FC } from "react";
import { FieldError } from "react-hook-form";

interface ErrorMessageProps {
  error: FieldError | undefined | { message: string };
}

export const ErrorMessage: FC<ErrorMessageProps> = ({ error }) => {
  return (
    <Box mt="0.5rem">
      {error && (
        <Text size="xs" color="red">
          {error.message}
        </Text>
      )}
    </Box>
  );
};
