"use client";
import { KanbanBoard } from "@/components/kanban-board";
import { NavBar } from "@/components/navbar";
import { useProjectStore } from "@/stores/project.store";
import { Box, Spinner } from "@chakra-ui/react";

export default function MainProjectPage() {
  const currentProject = useProjectStore((state) => state.currentProject);

  if (!currentProject) {
    return <Spinner />;
  }

  return (
    <Box>
      <NavBar />
      <KanbanBoard />
    </Box>
  );
}
