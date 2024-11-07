"use client"
import { Box } from "@chakra-ui/react";
import { KanbanBoard } from "../components/board";
import { NavBar } from "../components/navbar";
import { MainLayout } from "@/components/layout/main";

export default function Home() {
  return (
    <MainLayout>
      <Box ml={{ base: 0, md: "255px" }} >
        <NavBar />
        <KanbanBoard />
      </Box>
    </MainLayout>
  );
}
