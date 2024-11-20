"use client";
import { MainLayout } from "@/components/layout/main";
import { useProjectStore } from "@/stores/project.store";
import { Box } from "@chakra-ui/react";
import { useParams } from "next/navigation";
import { ReactNode, useEffect } from "react";

export default function ProjectLayout({ children }: { children: ReactNode }) {
  const { id } = useParams<{ id: string }>();

  useEffect(() => {
    useProjectStore.getState().fetchCurrentProject(id);
  }, [id]);

  return (
    <MainLayout>
      <Box ml={{ base: 0, md: "255px" }} w="100%">
        {children}
      </Box>
    </MainLayout>
  );
}
