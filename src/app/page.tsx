"use client";
import { MainLayout } from "@/components/layout/main";
import { useAuthStore } from "@/stores/auth.store";
import { useSideBarStore } from "@/stores/sidebar.store";
import { Box, Text } from "@chakra-ui/react";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    useAuthStore.getState().fetchUser();
    useSideBarStore.getState().fetchProjects();
  }, []);

  return (
    <MainLayout>
      <Box ml={{ base: 0, md: "255px" }} w="100%">
        <Box
          height="100%"
          width="100%"
          display="flex"
          flexDir="column"
          alignItems="center"
          justifyContent="center"
        >
          <Text fontSize="2rem">Welcome to WorkSpace</Text>
          <Text fontSize="1.5rem">
            Have a nice day. Hope you enjoy our journey
          </Text>
        </Box>
      </Box>
    </MainLayout>
  );
}
