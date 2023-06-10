"use client"

import { Divider, Flex, Icon, Text, Image, Box } from "@chakra-ui/react";
import { FaWhatsapp, FaInstagram, FaFacebookF } from 'react-icons/fa';
import { TfiTwitter } from 'react-icons/tfi'

import LogoPNG from '../../../public/assets/logo.png';

export function Footer() {
  return (
    <Flex w="100vw" h="30vh" px={60} align="center" justify="center" flexDir="column" gap={5}>
      <Flex w="full" textTransform="uppercase" gap={16} fontSize="20px" fontWeight="bold" align="center" color="black" justify="space-between">
        <Flex w="50%" justify="space-between">
          <Text>Início</Text>
          <Text>Sobre Nós</Text>
          <Text>Roteiros</Text>
          <Text>Pacotes</Text>
        </Flex>

        <Flex w="20%" justify="space-between">
          <Flex p={3} border="2px solid #112126ff" borderRadius="50%">
            <Icon as={FaWhatsapp} color="whatsapp.600" />
          </Flex>
          <Flex p={3} border="2px solid #112126ff" borderRadius="50%">
            <Icon as={FaInstagram} />
          </Flex>
          <Flex p={3} border="2px solid #112126ff" borderRadius="50%">
            <Icon as={FaFacebookF} color="facebook.600" />
          </Flex>
          <Flex p={3} border="2px solid #112126ff" borderRadius="50%">
            <Icon as={TfiTwitter} color="twitter.600" />
          </Flex>
        </Flex>
      </Flex>

      <Divider w="110%" bg="black" orientation="horizontal" />

      <Flex w="full" align="center" justify="space-between" fontWeight="bold">
        <Flex flex={1} flexDir="column">
          <Text>© Todos os direitos reservados</Text>
          <Text>Dunamis Expedições</Text>
        </Flex>

        <Flex flex={1} justify="center" w="full">
          <Image w="25%" src='/assets/logo.png' alt="logo Dunamis Expedições" />
        </Flex>

        <Flex flex={1} flexDir="column" textAlign="right">
          <Text>Design and Develop</Text>
          <Text>João Vitor Soares</Text>
        </Flex>
      </Flex>

    </Flex>
  )
}