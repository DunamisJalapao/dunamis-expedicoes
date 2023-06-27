"use client"

import { Flex, Icon, Text } from "@chakra-ui/react";
import { ElementType } from "react";

type CardVantagensType = {
  icon: ElementType,
  title: string,
  description: string
}

export function CardVantagens({ icon, title, description }: CardVantagensType) {
  return (
    <Flex
      w="full"
      maxW="420px"
      bg="white"
      boxShadow="lg"
      borderRadius="xl"
      px={6}
      py={2}
      gap={6}
    >
      <Icon as={icon} fontSize="7xl" />
      <Flex flexDir="column">
        <Text fontWeight="bold">{title}</Text>
        <Text fontSize="md">{description}</Text>
      </Flex>
    </Flex>
  )
}