"use client"
import { Box } from "@chakra-ui/react";
import { KanbanBoard } from "./components/board";
import { NavBar } from "./components/navbar";

export default function Home() {
  return (
    <Box w="100%">
      <NavBar />
      <KanbanBoard />
    </Box>
  );
}
