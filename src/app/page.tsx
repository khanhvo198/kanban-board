"use client"
import { Box, Button } from "@chakra-ui/react";
import { CiViewTable } from "react-icons/ci";
import { LuKanbanSquare } from "react-icons/lu";
import { KanbanBoard } from "./components/board";
import { NavBar } from "./components/navbar";

export default function Home() {
  return (
    <Box w="100%">
      <NavBar />
      <Box
        px={{ base: "1rem" }}
        py={{ base: "1rem" }}
      >
        <Button leftIcon={<LuKanbanSquare />} mr={2}>Kanban</Button>
        <Button leftIcon={<CiViewTable />} colorScheme="blackAlpha">Table</Button>
      </Box>
      <KanbanBoard />
    </Box>
  );
}
