"use client"

import { Divider, Flex, Icon, Text, Image, Box, useMediaQuery } from "@chakra-ui/react";
import { FaWhatsapp, FaInstagram, FaTiktok, FaYoutube } from 'react-icons/fa';
import { TfiTwitter } from 'react-icons/tfi'

import LogoPNG from '../../../public/assets/logo.png';
import { NavBar } from "../NavBar";

// ARRUMAR O FOOTER QUE NEM O DO VERCEL

export default function Footer() {
  const [isMobile] = useMediaQuery("(max-width: 768px)");

  const listIcons = [
    { icon: FaWhatsapp, route: 'https://api.whatsapp.com/send?phone=556392437096' },
    { icon: FaInstagram, route: 'https://www.instagram.com/dunamis_expedicoes/' },
    { icon: FaTiktok, route: 'https://www.tiktok.com/@dunamis_expedicoes' },
    { icon: FaYoutube, route: 'https://www.youtube.com/@dunamis_expedicoes' },
  ]

  if (isMobile) {
    return (
      <Flex w="full" h="full" px={4} py={6} align="center" justify="center" flexDir="column" gap={10} color="#0000006c" textAlign="center">
        <Image w="35%" src='/assets/logo.png' alt="logo Dunamis Expedições" />
        <NavBar textAlign="left" isFooter={true} color="black" />
        <Flex flexDir="column" fontFamily="var(--font-lato)">
          <Text>© Todos os direitos reservados</Text>
          <Text>Dunamis Expedições</Text>
        </Flex>
        <Flex w="50%" fontSize="xl" justify="space-between" color="#0000006c">
          {listIcons.map((buttons, _) => (
            <Flex cursor="pointer" as="a" target="_blank" href={buttons.route} key={_} p={1} pr={3} borderRight="2px solid #00000022" _hover={{ trasform: 'scale(1.5)' }}>
              <Icon as={buttons.icon} />
            </Flex>
          ))}
        </Flex>
        <Flex flex={1} flexDir="column" >
          <Text>Design and Develop</Text>
          <Text>João Vitor Soares</Text>
        </Flex>
      </Flex>
    )
  }

  return (
    <Flex w={{ base: "full", md: "100vw" }} h={{ base: "full", md: "30vh" }} px={{ base: 4, md: 60 }} py={{ base: 12, md: 0 }} align="center" justify="center" flexDir="column" gap={5}>
      <Flex w="full" textTransform="uppercase" gap={16} fontSize="20px" fontWeight="bold" align="center" color="black" justify="space-between">
        <Flex display={{ base: 'none', md: 'inherit' }} w="50%" justify="space-between">
          <NavBar color="black" />
        </Flex>

        <Flex w={{ base: "full", md: "20%" }} justify="right">
          {listIcons.map((buttons, _) => (
            <Flex cursor="pointer" as="a" target="_blank" href={buttons.route} key={_} p={3} ml={6} border="2px solid #112126ff" borderRadius="50%" _hover={{ trasform: 'scale(1.5)' }}>
              <Icon as={buttons.icon} />
            </Flex>
          ))}
        </Flex>
      </Flex>

      <Divider w="110%" bg="black" orientation="horizontal" />

      <Flex flexDir={{ base: "column", md: "row" }} w="full" align="center" justify="space-between" fontWeight="bold">
        <Flex flex={1} flexDir="column" textAlign={{ base: "center", md: "inherit" }}>
          <Text>© Todos os direitos reservados</Text>
          <Text>Dunamis Expedições</Text>
        </Flex>

        <Flex flex={1} order={{ base: "-1", md: "inherit" }} justify="center" w="full">
          <Image w="25%" src='/assets/logo.png' alt="logo Dunamis Expedições" />
        </Flex>

        <Flex flex={1} flexDir="column" textAlign={{ base: "center", md: "right" }}>
          <Text>Design and Develop</Text>
          <Text>João Vitor Soares</Text>
        </Flex>
      </Flex>

    </Flex>
  )
}