"use client";
import { Box } from "@chakra-ui/react";
import { SideBar } from "../sidebar";
import { useAuthStore } from "@/stores/auth.store";
import { useEffect } from "react";

export const MainLayout = ({ children }: { children: React.ReactNode }) => {
  useEffect(() => {
    useAuthStore.getState().fetchUser();
  }, []);

  return (
    <Box h="100%" w="100%" overflowX="auto" overflowY="hidden">
      <Box display="inline-flex" h="100%" w="100%">
        <SideBar />
        {children}
      </Box>
    </Box>
  );
};
