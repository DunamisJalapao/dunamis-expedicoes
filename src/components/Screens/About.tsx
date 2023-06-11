"use client"

import { getAbout } from "@/sanity/sanity-utils";
import { About } from "@/types";
import { Flex, FlexProps, Image, Text } from "@chakra-ui/react";
import { PortableText } from "@portabletext/react";
import { useEffect, useState } from "react";

type AboutType = FlexProps & {}

export function AboutScreen({ ...rest }: AboutType) {
  const [aboutObj, setAboutObj] = useState<About>({} as About);

  const search = async () => {
    const response = await getAbout();
    console.log("response =>", response[0])
    setAboutObj(response[0]);
  }

  console.log(aboutObj.description)

  useEffect(() => {
    search();
  }, [])
  return (
    <Flex flexDir="column" align="center" justify="center" w="100vw" h="100vh" bg="#F8F8F8" {...rest}>
      <Text align="center" fontSize="5xl" color="#112126ff" textTransform="uppercase" fontWeight="bold" fontFamily="var(--font-lemonMilk)">Sobre Nós</Text>
      <Flex
        mt={14}
        px={96}
        gap={10}
        w="full"
        align="center"
      >
        <Flex w="50rem" h="40rem" borderRadius="25px" overflow="auto" boxShadow="0px 58px 50px -27px rgba(210, 181, 151, 1),0px 8px 100px 13px rgba(0,0,0,0.1)">
          <Image w="full" src={aboutObj.image} objectFit="cover" />
        </Flex>
        <Flex w="50rem" h="40rem" >
          <Text fontSize="3xl">
            <PortableText value={aboutObj.description} />
          </Text>
        </Flex>
      </Flex>
    </Flex>
  )
}