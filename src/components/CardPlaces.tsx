"use client"
import { Attractivie } from "@/types";
import { Flex, FlexProps, Icon, Image, Text } from "@chakra-ui/react";
import Color from "color-thief-react";
import Link from "next/link";
import IconPin from '../../public/assets/icon-pin.svg';

type CardPlacesType = FlexProps & {
  card: Attractivie
};

export function CardPlaces({ card, ...rest }: CardPlacesType) {
  return (
    <Link href={card.url} target={"_blank"}>
      <Flex
        w={{ base: "full", md: "300px" }}
        h="full"
        bg="white"
        boxShadow="lg"
        flexDir={"column"}
        overflow="auto"
        borderRadius="15px"
        {...rest}
      >


        <Color src={card.image} format="rgbString" crossOrigin="anonymous">
          {({ data, loading, error }) => (
            <Flex
              w="full"
              h="75%"
              overflow="hidden"
              boxShadow={`0px 30px 40px -27px ${data}`}
            >
              <Image
                src={card.image}
                w="full"
                objectFit="cover"
                transition="transform .2s ease"
                _hover={{
                  transform: 'scale(1.05)'
                }}
              />
            </Flex>
          )}
        </Color>
        <Flex flexDir="column" h="15%" py={4} px={3}>
          <Text fontFamily="var(--font-lemonMilk)">{card.attractivie}</Text>
          <Flex align="center" gap={2}>
            <Icon as={IconPin} />
            <Text color="#7C7C7C">{card.region}</Text>
          </Flex>
        </Flex>

      </Flex>
    </Link>

  )
}