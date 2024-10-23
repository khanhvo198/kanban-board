"use client"
import { ChakraProvider } from "@chakra-ui/react";
import theme from "./lib/theme";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";


export const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <ChakraProvider theme={theme}>
      <DndProvider backend={HTML5Backend}>
        {children}
      </DndProvider>
    </ChakraProvider>
  )
}
