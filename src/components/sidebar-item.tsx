import { Project } from "@/shared/utils/types"
import { Box, ListIcon, ListItem, Text, useColorModeValue } from "@chakra-ui/react"
import Link from "next/link"
import { redirect, usePathname } from "next/navigation"
import { FC } from "react"
import { FaCircle } from "react-icons/fa"

interface SideBarItemProps {
  project: Project
}


export const SideBarItem: FC<SideBarItemProps> = ({ project }) => {
  const pathname = usePathname()
  const href = `/projects/${project.id}`

  const isActive = pathname === href

  const backgroundColor = useColorModeValue('#F1F4F6', '#1B1D1F')


  return (
    <ListItem
      borderRadius="0.5rem"
      cursor="pointer"
      background={isActive ? backgroundColor : ''}
      _hover={{ background: backgroundColor }}
    >
      <Link href={href}>

        <Box display="flex" alignItems="center" px="1rem" py="0.6rem">
          <ListIcon as={FaCircle} color="#7AC555" fontSize="8px" />
          <Text ml={3} fontWeight="bold">{project.name}</Text>
        </Box>
      </Link>
    </ListItem >

  )
}
