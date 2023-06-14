"use client"
import { Box, Flex, FlexProps, Icon, Image, Text } from "@chakra-ui/react";
import IconPin from '../../public/assets/icon-pin.svg';
import { Attractivie } from "@/types";
import Color, { useColor } from "color-thief-react";
import Link from "next/link";

type CardPlacesType = FlexProps & {
  card: Attractivie
};

export function CardPlaces({ card, ...rest }: CardPlacesType) {
  return (
    <Link href={card.url ? card.url : 'javascript:void(0)'} target={card.url ? "_blank" : undefined}>
      <Flex
        w="300px"
        h="350px"
        bg="white"
        boxShadow="lg"
        flexDir="column"
        overflow="auto"
        borderRadius="15px"
        {...rest}
      >


        <Color src={card.image} format="rgbString" crossOrigin="anonymous">
          {({ data, loading, error }) => (
            <Flex
              w="full"
              h="65%"
              overflow="hidden"
              boxShadow={`0px 30px 40px -27px ${data}`}

            >
              <Image
                src={card.image}
                objectFit="cover"
                transition="transform .2s ease"
                _hover={{
                  transform: 'scale(1.05)'
                }}
              />
            </Flex>
          )}
        </Color>
        <Flex flexDir="column" h="35%" py={4} px={3}>
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