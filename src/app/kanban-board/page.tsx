import { KanbanBoard } from "@/components/kanban-board";
import { MainLayout } from "@/components/layout/main";
import { NavBar } from "@/components/navbar";
import { Box } from "@chakra-ui/react";

export default function Board() {
  return (
    <MainLayout>
      <Box ml={{ base: 0, md: "255px" }} >
        <NavBar />
        <KanbanBoard />
      </Box>
    </MainLayout>
  )
}
