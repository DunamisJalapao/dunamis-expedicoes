"use client"

import { Flex, FlexProps, Image } from "@chakra-ui/react";
import { Header } from "../Header";
import { TabsHome } from "../TabsHome";
import { getPhotos } from '@/sanity/sanity-utils';
import { useCallback, useEffect, useMemo, useState } from 'react';
import { SlideShow } from "../SlideShow";

type HomeScreenType = FlexProps & {}

export function HomeScreen({ ...rest }: HomeScreenType) {
  const [photosGallery, setphotosGallery] = useState<string[]>([] as string[]);

  const photosMemo = async () => {
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
    photosMemo();
  }, [])

  return (
    <Flex
      w="100vw"
      h="100vh"
      {...rest}
    >
      <Flex
        w="full"
        h="80vh"
        pos="relative"
      >
        {photosGallery.length > 0 &&
          <SlideShow photos={photosGallery} />
        }
        <Flex
          pos="absolute"
          top={0}
          left={0}
          w="full"
          h="full"
          flexDir="column"
          align="center"
          px="220px"
          py="13px"

          justify="space-between"
        >
          <Header />
          <TabsHome />
        </Flex>
      </Flex>

    </Flex >
  )
}