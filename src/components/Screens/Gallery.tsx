"use client"

import { getPhotos } from "@/sanity/sanity-utils";
import { Flex, FlexProps, GridItem, Image, SimpleGrid, Text, keyframes, usePrefersReducedMotion } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { Photos } from "@/types";

type ItinerariesType = FlexProps & {}

const rightToLeft = keyframes`
  from {transform: translate(0);}
  to {transform: translate(-85vw)}
`
const leftToRight = keyframes`
  from {transform: translate(-85vw);}
  to {transform: translate(0)}
`

export function Gallery({ ...rest }: ItinerariesType) {
  const [photosGallery, setphotosGallery] = useState<string[]>([] as string[]);
  const prefersReducedMotion = usePrefersReducedMotion();

  const animationToRight = prefersReducedMotion ? undefined : `${leftToRight} infinite alternate 180s linear`
  const animationToLeft = prefersReducedMotion ? undefined : `${rightToLeft} infinite alternate 180s linear`

  const search = async () => {
    const response = await getPhotos();
    console.log("response =>", response)
    if (response.length > 0) {
      console.log(response[0])
      response[0].images.map(image => {
        console.log(photosGallery.includes(image.url));
        if (!photosGallery.includes(image.url)) setphotosGallery(prev => [...prev, image.url])
      })
    }
  }

  useEffect(() => {
    search();
  }, [])

  return (
    <Flex w={{ base: "full", md: "100vw" }} h={{ base: "full", md: "100vh" }}   {...rest}>
      <Flex w="full" h="full" pt={{ base: 4, md: 10 }} pb={{ base: 8, md: 10 }} flexDir="column" bg="#F8F8F8" gap={5}>

        <Flex px={{ base: 5, md: 20 }} flexDir="column" fontWeight="bold">
          <Text fontFamily="var(--font-lato)" fontSize="5xl">Galeria</Text>
          <Text>Pequeno parágrafo para a galeria</Text>
        </Flex>

        <Flex h="full" justify="center" flexDir="column" gap={2}>
          <Flex w="full" gap={2} animation={animationToRight}>
            {photosGallery.map((photos, index) => (
              <Flex
                minW={{ base: "150px", md: "350px" }}
                h={{ base: '150px', md: "250px" }}
                bgImage={photos}
                bgSize="cover"
                rounded="xl"
              />
            ))}
          </Flex>

          <Flex
            w="full"
            gap={2}
            animation={animationToLeft}
          >
            {photosGallery.map((photos, index) => (
              <Flex
                minW={{ base: "150px", md: "350px" }}
                h={{ base: '150px', md: "250px" }}
                bgImage={photos}
                bgSize="cover"
                rounded="xl"
              />
            ))}
          </Flex>
        </Flex>

      </Flex>
    </Flex>
  )
}