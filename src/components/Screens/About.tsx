"use client"

import { getAbout } from "@/sanity/sanity-utils";
import { About } from "@/types";
import { Flex, FlexProps, Image, Text } from "@chakra-ui/react";
import { PortableText } from "@portabletext/react";
import { useEffect, useState } from "react";
import { Fade } from "react-awesome-reveal";

type AboutType = FlexProps & {}

export default function AboutScreen({ ...rest }: AboutType) {
  const [aboutObj, setAboutObj] = useState<About>({} as About);

  const search = async () => {
    const response = await getAbout();
    console.log("response =>", response[0])
    setAboutObj(response[0]);
  }

  useEffect(() => {
    search();
  }, [])
  return (
    <Flex flexDir="column" align="center" justify={{ base: 'inherit', md: 'center' }} w={{ base: "full", md: "100vw" }} h={{ base: "full", md: "100vh" }} bg="#F8F8F8" {...rest}>
      <Text mt={{ base: 5, md: 0 }} mb={{ base: 5, md: 0 }} align="center" fontSize={{ base: "2xl", md: "5xl" }} color="#112126ff" textTransform="uppercase" fontWeight="bold" fontFamily="var(--font-lemonMilk)">Sobre Nós</Text>
      <Flex
        mt={{ base: 0, md: 14 }}
        px={{ base: 0, sm: 14, '2xl': 96 }}
        gap={{ base: 5, md: 10 }}
        w="full"
        align="center"
        flexDir={{ base: 'column', md: 'row' }}
      >
        <Flex zIndex={1} w={{ base: "20rem", md: "50rem" }} h={{ base: "20rem", md: "40rem" }} borderRadius="25px" overflow="hidden" boxShadow="0px 58px 50px -27px rgba(210, 181, 151, 1),0px 8px 100px 13px rgba(0,0,0,0.1)">
          <Fade>
            <Image w="full" src={aboutObj.image} objectFit="cover" />
          </Fade>
        </Flex>
        <Flex zIndex={0} w={{ base: "20rem", md: "50rem" }} h={{ base: "20rem", md: "40rem" }} textAlign={{ base: 'center', md: 'left' }} >
          <Fade direction="left" delay={500}>
            <Text fontSize={{ base: "md", md: "2xl", xl: "3xl" }}>
              <PortableText value={aboutObj.description} />
            </Text>
          </Fade>
        </Flex>
      </Flex>
    </Flex >
  )
}