"use client"

import { Flex, FlexProps } from "@chakra-ui/react";
import { Header } from "../Header";
import { TabsHome } from "../TabsHome";

type HomeScreenType = FlexProps & {}

export function HomeScreen({ ...rest }: HomeScreenType) {
  return (
    <Flex
      w="100vw"
      h="80vh"
      flexDir="column"
      align="center"
      justify="space-between"
      bgImage="/bg.jpeg"
      bgSize="cover"
      bgPos="center"
      px="220px"
      py="13px"
      {...rest}
    >
      <Header />

      <TabsHome
        w="80%"
        mb="-10vh"
        zIndex={99999}
        h="30%"
        bg="white"
        borderRadius="xl"
        shadow="2xl"
      />
    </Flex>
  )
}