"use client"
import { KanbanBoard } from "@/components/kanban-board";
import { NavBar } from "@/components/navbar";
import { Box } from "@chakra-ui/react";

export default function MainProjectPage() {
  return (
    <Box>
      <NavBar />
      <KanbanBoard />
    </Box>

  )
}
