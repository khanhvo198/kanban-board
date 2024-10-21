import { Box } from "@chakra-ui/react"
import { Column } from "./column"

export const KanbanBoard = () => {
  return (
    <Box
      px={{ base: "1rem" }}
      display="flex"
      justifyContent="space-between"
      minW="700px"
    >
      <Column />
      <Column />
      <Column />
    </Box>
  )
}
