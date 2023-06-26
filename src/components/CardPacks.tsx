"use client"

import { Flex, Text, Icon, FlexProps } from "@chakra-ui/react";
import IconChecked from '../../public/assets/icon-checked.svg'
import Link from "next/link";

type CardPacksType = FlexProps & {
  title: string,
  duration: string,
  foods: string,
  hotel: string,
  doc: string;
}

export function CardPacks({ duration, foods, hotel, title, doc, ...rest }: CardPacksType) {
  return (
    <Link href={doc} target="_blank" passHref>
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
        cursor="pointer"
        transition="0.1s linear"
        _hover={{
          transform: 'scale(1.03)'
        }}
        {...rest}
      >
        <Flex flexDir="column">
          <Text fontSize="sm" fontFamily="var(--font-lemonMilk)" color="#2E5C2E" textTransform="uppercase">Nome</Text>
          <Text color="#FF5A00" fontSize="2xl" fontWeight="bold">{title}</Text>
        </Flex>
        <Flex flexDir="column">
          <Text color="#2E5C2E" fontFamily="var(--font-lemonMilk)" textTransform="uppercase">Informações</Text>
          <Flex align="center" gap={2}>
            <Icon as={IconChecked} />
            <Text>{duration}</Text>
          </Flex>
          <Flex align="center" gap={2}>
            <Icon as={IconChecked} />
            <Text>{foods}</Text>
          </Flex>
          <Flex align="center" gap={2}>
            <Icon as={IconChecked} />
            <Text>{hotel}</Text>
          </Flex>
        </Flex>

        <Text color="#FF5A00" fontSize="md" fontFamily="var(--font-lemonMilk)" textAlign="center">Saiba mais+</Text>
      </Flex>
    </Link>

  )
}