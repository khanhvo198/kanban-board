"use client"
import { Avatar, AvatarGroup, Box, Flex, Heading, List, ListItem } from "@chakra-ui/react";
import { Section } from "./components/section";

export default function Home() {
  return (
    <Box w="100%">
      <Box
        px={{ base: "1rem", md: "3rem" }}
        py={{ base: "0.8", md: "1rem" }}
        w="100%"
      >
        <Heading as="h2" fontWeight="semibold" fontSize="3xl">
          Mobile App
        </Heading>


      </Box >
      <Box
        px={{ base: "1rem", md: "3rem" }}
        borderBottom="1px solid #DBDBDB"
      >
        <Flex justifyContent="space-between">
          <Flex>
            <Section>Hello there</Section>
            <Section isActive>Hello</Section>
            <Section>Hello</Section>
            <Section>Hello</Section>
            <Section>Hello</Section>

          </Flex>

          <AvatarGroup size="sm" max={4} ml="3" pb={1}>
            <Avatar />
            <Avatar />
            <Avatar />
            <Avatar />
            <Avatar />
          </AvatarGroup>
        </Flex>

      </Box>
    </Box>
  );
}
