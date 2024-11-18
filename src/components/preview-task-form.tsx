import {
  Avatar,
  AvatarGroup,
  DrawerBody,
  DrawerHeader,
  Flex,
  Stack,
  Tag,
  Text,
} from "@chakra-ui/react";
import { useState } from "react";
import { TbEdit } from "react-icons/tb";
import { NavigationTab } from "./navigation-tab";
import { PropertyCard } from "./property-card";
import { Section } from "./section";

export type TAB = "DETAIL" | "COMMENTS" | "ACTIVITIES";

export const PreviewTaskForm = () => {
  const [tab, setTab] = useState<TAB>("DETAIL");

  return (
    <Stack>
      <DrawerHeader
        display="flex"
        alignItems="center"
        justifyContent="space-between"
      >
        <Text>New Year Marketing Campaign</Text>
        <TbEdit />
      </DrawerHeader>
      <hr />
      <DrawerBody>
        <Stack>
          <PropertyCard label="Assignees">
            <AvatarGroup size="sm">
              <Avatar />
              <Avatar />
            </AvatarGroup>
          </PropertyCard>

          <PropertyCard label="Due date">
            <Text>23 Jan 2023</Text>
          </PropertyCard>

          <PropertyCard label="Status">
            <Text>In progress</Text>
          </PropertyCard>

          <PropertyCard label="Tags">
            <Flex w="100%">
              <Tag colorScheme="teal">Design</Tag>
              <Tag colorScheme="yellow" ml="2">
                Web
              </Tag>
            </Flex>
          </PropertyCard>

          <PropertyCard label="Created by">
            <Avatar size="sm" />
          </PropertyCard>
        </Stack>
        <Stack mt={5}>
          <Flex h="2.2rem" borderBottom="1px solid #DBDBDB">
            <Section
              isActive={tab === "DETAIL"}
              onClick={() => setTab("DETAIL")}
            >
              Description
            </Section>
            <Section
              isActive={tab === "COMMENTS"}
              onClick={() => setTab("COMMENTS")}
            >
              Comments
            </Section>
            <Section
              isActive={tab === "ACTIVITIES"}
              onClick={() => setTab("ACTIVITIES")}
            >
              Activities
            </Section>
          </Flex>
          <NavigationTab tab={tab} />
        </Stack>
      </DrawerBody>
    </Stack>
  );
};
