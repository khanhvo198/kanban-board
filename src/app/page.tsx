"use client"
import { Box } from "@chakra-ui/react";
import { KanbanBoard } from "../components/board";
import { NavBar } from "../components/navbar";

export default function Home() {
  return (
    <Box ml={{ base: 0, md: "255px" }} >
      <NavBar />
      <KanbanBoard />
    </Box>
  );
}
