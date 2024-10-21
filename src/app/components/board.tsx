import { Box, Button } from "@chakra-ui/react"
import { Column } from "./column"
import { CiViewTable } from "react-icons/ci"
import { LuKanbanSquare } from "react-icons/lu"

export const KanbanBoard = () => {
  return (
    <Box
      pt={{ base: "8rem" }}
      px={{ base: "1rem", md: "3rem" }}
    >
      <Box
        pb={{ base: "1rem" }}
      >
        <Button leftIcon={<LuKanbanSquare />} mr={2}>Kanban</Button>
        <Button leftIcon={<CiViewTable />} colorScheme="blackAlpha">Table</Button>
      </Box>

      <Box
        display="flex"
        justifyContent="space-between"
        minW="700px"
        gap={2}
      >
        <Column />
        <Column />
        <Column />
      </Box>

    </Box>
  )
}
