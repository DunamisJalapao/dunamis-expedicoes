"use client"

import { Box, Flex, FlexProps, Image, keyframes, useMediaQuery } from "@chakra-ui/react";
import { Header } from "../Header";
import { TabsHome } from "../TabsHome";
import { getPhotos } from '@/sanity/sanity-utils';
import { useCallback, useEffect, useMemo, useState } from 'react';
import { SlideShow } from "../SlideShow";

type HomeScreenType = FlexProps & {}

export function HomeScreen({ ...rest }: HomeScreenType) {
  const [photosGallery, setphotosGallery] = useState<string[]>([] as string[]);
  const [isMobile] = useMediaQuery("(max-width: 768px)");

  const animateArrow = keyframes`
    0%   { transform:translate(0,-10px) rotate(45deg); opacity: 0;  }
    50%  { opacity: 1;  }
    100% { transform:translate(0,10px) rotate(45deg); opacity: 0; }
  `

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
        h={{ base: "100vh", md: "80vh" }}
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
          px={{ base: "20px", md: "220px" }}
          py="13px"

          justify="space-between"
        >
          <Header />
          {!isMobile ?
            <TabsHome />
            :
            <>
              <Box
                position="absolute"
                left="50%"
                bottom="10px"
                display="block"
                textAlign="center"
                fontSize="20px"
                zIndex={100}
                textDecoration="none"
                textShadow={0}
                width="25px"
                height="25px"
                borderBottom="4px solid #fff"
                borderRight="4px solid #fff"
                boxShadow="lg"
                animation={`${animateArrow} 3s ease-in-out infinite`}
              />
              <Box
                position="absolute"
                left="50%"
                bottom="25px"
                display="block"
                textAlign="center"
                fontSize="20px"
                zIndex={100}
                textDecoration="none"
                textShadow={0}
                width="25px"
                height="25px"
                borderBottom="4px solid #fff"
                borderRight="4px solid #fff"
                boxShadow="lg"
                animation={`${animateArrow} 3s ease-in-out infinite`}
              />
            </>
          }
        </Flex>
      </Flex>

    </Flex >
  )
}