import { Box } from "@chakra-ui/react"
import { Column } from "./column"

export const KanbanBoard = () => {
  return (
    <Box
      pt={{ base: "12rem" }}
      px={{ base: "1rem" }}
    >

      <Box
        display="flex"
        justifyContent="space-between"
        minW="700px"
        gap={2}
      >
        <Column />
        <Column />
        <Column />
        <Column />
        <Column />
        <Column />
      </Box>

    </Box>
  )
}
