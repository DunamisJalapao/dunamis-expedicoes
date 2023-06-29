"use client"

import { Flex, Spinner, Text } from "@chakra-ui/react";

export default function Loading() {
  return (

    <Flex w="100vw" h="100vh" flexDir="column" gap={2} align="center" justify="center">
      <Spinner size="lg" />
      <Text>Carregando...</Text>
    </Flex>

  )
}