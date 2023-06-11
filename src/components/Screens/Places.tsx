"use client"

import { Flex, FlexProps, Icon, Image, SimpleGrid, Text } from "@chakra-ui/react";
import { CardPlaces } from "../CardPlaces";
import { useEffect, useState } from "react";
import { Attractivie } from "@/types/Attractivies";
import { getAttractivies } from "@/sanity/sanity-utils";
type PackType = FlexProps & {}

export function Places({ ...rest }: PackType) {
  const [dataCard, setDataCard] = useState<Attractivie[]>([] as Attractivie[]);
  console.log("dataCard =>", dataCard);

  const search = async () => {
    const response = await getAttractivies();
    setDataCard(response)
  }
  useEffect(() => {
    search();
  }, [])

  return (
    <Flex w="100vw" h="100vh" bg="white" {...rest}>
      <Flex w="full" h="full" py={50} justify="center" flexDir="column" gap={10}>
        <Text align="center" fontSize="4xl" color="#112126ff" fontWeight="bold" fontFamily="var(--font-lato)">Encontre os lugares <br /> para se apaixonar</Text>
        <Flex w="full" h="full" justify="center">
          {dataCard.map(ops => (
            <Text>{ops.attractivie}</Text>

          ))}
          <SimpleGrid columns={4} spacingX='20px' spacingY="0px">
            {[1, 2, 3, 4, 5, 6, 7, 8].map(card => (
              <CardPlaces />
            ))}
          </SimpleGrid>
        </Flex>
      </Flex>
    </Flex>
  )
}