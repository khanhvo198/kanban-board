"use client";
import { MainLayout } from "@/components/layout/main";
import { Box } from "@chakra-ui/react";
import { ReactNode } from "react";

export default function ProjectLayout({ children }: { children: ReactNode }) {
  return (
    <MainLayout>
      <Box ml={{ base: 0, md: "255px" }} w="100%">
        {children}
      </Box>
    </MainLayout>
  );
}
