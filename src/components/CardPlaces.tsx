"use client"
import { Flex, Icon, Image, Text } from "@chakra-ui/react";
import IconPin from '../../public/assets/icon-pin.svg';

export function CardPlaces() {
  return (
    <Flex
      w="300px"
      h="350px"
      bg="white"
      boxShadow="lg"
      flexDir="column"
      overflow="auto"
      borderRadius="15px"

    >
      <Flex w="full" h="65%" bg="yellow.100">
        <Image src="" />
      </Flex>
      <Flex flexDir="column" h="35%" py={4} px={3}>
        <Text fontFamily="var(--font-lemonMilk)">Dunas do Jalapão</Text>
        <Flex align="center" gap={2}>
          <Icon as={IconPin} />
          <Text color="#7C7C7C">Mateiros - TO</Text>
        </Flex>
      </Flex>

    </Flex>
  )
}