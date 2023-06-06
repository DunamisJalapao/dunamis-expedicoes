"use client"

import { Flex } from "@chakra-ui/react";
import { Header } from "../Header";
import { TabsHome } from "../TabsHome";

export function HomeScreen() {
  return (
    <Flex
      w="100vw"
      h="100vh"
      flexDir="column"

      justify="space-between"
      align="center"
    >
      <Header />

      <TabsHome
        w="70%"
        h="15rem"
        bg="white"
        borderRadius="xl"
        shadow="2xl"
      />
    </Flex>
  )
}