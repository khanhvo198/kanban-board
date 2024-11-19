import { NewProjectModal } from "@/shared/ui/new-project.modal";
import { useProjectStore } from "@/stores/project.store";
import {
  Avatar,
  Box,
  Flex,
  IconButton,
  List,
  ListItem,
  Stack,
  Text,
  useColorModeValue,
  useDisclosure,
} from "@chakra-ui/react";
import Link from "next/link";
import { AddIcon } from "../../public/assets/icons/add-button";
import { ProjectManagementIcon } from "../../public/assets/icons/logo";
import { SideBarItem } from "./sidebar-item";
import { createProject } from "@/api/project";

export const SideBar = () => {
  const textColor = useColorModeValue("#787486", "white");

  const modalProps = useDisclosure();

  const { projects } = useProjectStore();

  const handleOnCreate = async (title: string) => {
    const projectData = {
      project: {
        name: title,
      },
    };
    const newProject = await createProject(projectData);

    useProjectStore.setState((state) => ({
      projects: [newProject, ...state.projects],
    }));
    modalProps.onClose();
  };

  return (
    <>
      <Box
        display={{ base: "none", md: "flex" }}
        flexDirection="column"
        minW={{ md: "255px" }}
        borderRightWidth="1px"
        borderStyle="solid"
        borderRight="1px"
        borderColor="#DBDBDB"
        position="fixed"
        top="0"
        left="0"
        bottom="100vh"
        bg={useColorModeValue("#fff", "#000")}
        zIndex="100"
        minH="100%"
        justifyContent="space-between"
      >
        <Box mt="1rem">
          <Link href="/">
            <Box
              display="flex"
              alignItems="center"
              justifyContent="space-evenly"
            >
              <ProjectManagementIcon />
              <Text fontSize="1.5rem" fontWeight="semibold">
                Arcturus
              </Text>
            </Box>
          </Link>
          <List spacing={2} px="0.5rem" py="0.6rem">
            <ListItem
              display="flex"
              alignItems="center"
              justifyContent="space-between"
              px="15px"
            >
              <Text color={textColor} fontSize="sm" fontWeight="bold">
                MY PROJECTS
              </Text>
              <IconButton
                icon={<AddIcon />}
                aria-label="new-project"
                onClick={modalProps.onOpen}
                variant="unstyled"
                display="flex"
                justifyContent="end"
              />
            </ListItem>
            {/* <ListItem display="flex" alignItems="center"> */}
            {/*   <ListIcon as={FaCircle} color="#7AC555" fontSize="8px" /> */}
            {/*   <Text ml={3} fontWeight="bold">Mobile App</Text> */}
            {/* </ListItem> */}
            {/* <ListItem display="flex" alignItems="center"> */}
            {/*   <ListIcon as={FaCircle} color="#FFA500" fontSize="8px" /> */}
            {/*   <Text ml={3} color={textColor}>Website Redesign</Text> */}
            {/* </ListItem> */}
            {/* <ListItem display="flex" alignItems="center"> */}
            {/*   <ListIcon as={FaCircle} color="#E4CCFD" fontSize="8px" /> */}
            {/*   <Text ml={3} color={textColor}>Design System</Text> */}
            {/* </ListItem> */}
            {/* <ListItem display="flex" alignItems="center"> */}
            {/*   <ListIcon as={FaCircle} color="#76A5EA" fontSize="8px" /> */}
            {/*   <Text ml={3} color={textColor}>Wireframes</Text> */}
            {/* </ListItem> */}

            {projects.map((project, index) => (
              <SideBarItem key={index} project={project} />
            ))}
          </List>
        </Box>
        <Stack mb={5}>
          <hr
            style={{ width: "100%", margin: "auto", borderColor: "#DBDBDB" }}
          />
          <Flex alignItems="center" justifyContent="center">
            <Avatar size="sm" />
            <Stack ml="1rem" spacing={0}>
              <Text fontWeight="semibold">Khanh Vo Tuan</Text>
              <Text color="#868686">KhanhVT4@fpt.com</Text>
            </Stack>
          </Flex>
        </Stack>
      </Box>
      <NewProjectModal onCreate={handleOnCreate} {...modalProps} />
    </>
  );
};
