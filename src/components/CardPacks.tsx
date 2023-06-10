"use client"

import { Flex, Text, Icon } from "@chakra-ui/react";
import IconChecked from '../../public/assets/icon-checked.svg'

export function CardPacks() {
  return (
    <Flex
      px={4}
      py={4}
      w="15rem"
      h="15rem"
      borderRadius="xl"
      flexDir="column"
      justify="space-between"
      bg="white"
      boxShadow="xl"
    >
      <Flex flexDir="column">
        <Text fontSize="sm" color="#2E5C2E" textTransform="uppercase">Nome</Text>
        <Text color="#FF5A00" fontSize="2xl" fontWeight="bold">Jalapão Flash</Text>
      </Flex>
      <Flex flexDir="column">
        <Text color="#2E5C2E" textTransform="uppercase">Informações</Text>
        <Flex align="center" gap={2}>
          <Icon as={IconChecked} />
          <Text>3 dias e 2 noites</Text>
        </Flex>
        <Flex align="center" gap={2}>
          <Icon as={IconChecked} />
          <Text>Alimentação inclusa</Text>
        </Flex>
        <Flex align="center" gap={2}>
          <Icon as={IconChecked} />
          <Text>Hospedagem inclusa</Text>
        </Flex>
      </Flex>

      <Text color="#FF5A00" textAlign="center">% Desconto á vista</Text>
    </Flex>
  )
}