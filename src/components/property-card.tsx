import { Flex, Text } from "@chakra-ui/react";
import { FC, ReactNode } from "react";

export interface FieldCardProps {
  label: string;
  isVertical?: boolean;
  children?: ReactNode;
}

export const PropertyCard: FC<FieldCardProps> = ({
  label,
  isVertical,
  children,
}) => {
  return (
    <Flex w="100%" direction={isVertical ? "column" : "row"}>
      <Flex flex="1">
        <Text fontWeight="semibold">{label}</Text>
      </Flex>
      <Flex flex="2" align="center">
        {children}
      </Flex>
    </Flex>
  );
};
