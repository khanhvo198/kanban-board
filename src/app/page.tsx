"use client";
import { MainLayout } from "@/components/layout/main";
import { Box, Text } from "@chakra-ui/react";

export default function Home() {
  return (
    <MainLayout>
      <Box ml={{ base: 0, md: "255px" }} w="calc(100vw - 255px)">
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
