"use client"

import { getPhotos } from "@/sanity/sanity-utils";
import { Flex, FlexProps, GridItem, Image, SimpleGrid, Text, keyframes, usePrefersReducedMotion } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { Photos } from "@/types";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";

export default function Gallery() {
  const [photosGallery, setphotosGallery] = useState<string[]>([] as string[]);

  const search = async () => {
    const response = await getPhotos();
    if (response !== undefined) {
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
    <Flex w="100vw" h="100vh">
      <Flex w="full" h="full" py={10} flexDir="column">

        <Flex px={{ base: 5, md: 20 }} flexDir="column" fontWeight="bold">
          <Text fontFamily="var(--font-lato)" fontSize="5xl">Galeria</Text>
          <Text>Pequeno parágrafo para a galeria</Text>
        </Flex>

        <Flex justify="center" py={10} px={{ base: 5, md: 10 }} flexDir="column">
          <ResponsiveMasonry
            columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}
          >
            <Masonry gutter="10px">
              {photosGallery.map(photo => (
                <Image w="full" src={photo} />
              ))}
            </Masonry>
          </ResponsiveMasonry>

        </Flex>

      </Flex>
    </Flex >
  )
}