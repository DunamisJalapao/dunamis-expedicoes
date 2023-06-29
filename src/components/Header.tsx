"use client"
import { Button, Flex, Icon, Image, Text, useDisclosure, useMediaQuery } from "@chakra-ui/react";
import { ButtonPrimary } from "./ButtonPrimary";
import Link from "next/link";
import { useCallback } from "react";
import { NavBar } from "./NavBar";
import { Box, Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerHeader, DrawerOverlay, useBreakpointValue } from "@chakra-ui/react";
import { CgMenuRight } from 'react-icons/cg';
import { useUtils } from "@/hooks/utils";

export function Header() {
  const [isMobile] = useMediaQuery("(max-width: 820px)");
  const { isOpen, onToggle } = useUtils();
  return (
    <Flex
      w="full"
      h="5rem"
      bg="rgba(255,255,255,0.2)"
      boxShadow="lg"
      borderRadius="2xl"
      backdropFilter='auto'
      backdropBlur='8px'
      px={{ base: "0.5rem", md: "4rem" }}
      align="center"
    >
      <Flex w={{ base: "25%", md: "40%", "2xl": "50%" }}>
        <Image
          src="/assets/logo.png"
          w="5rem"
        />
      </Flex>

      <Flex
        w="full"
      >
        {isMobile ?
          <Flex w="full" justify="right" onClick={() => onToggle(true)}>
            <Icon color="white" fontSize="4xl" as={CgMenuRight} />
          </Flex>
          :
          <>
            <NavBar />
            <ButtonPrimary />
          </>
        }
      </Flex>

      <Drawer isOpen={isOpen} size="full" placement="left" onClose={() => onToggle(false)}>
        <DrawerOverlay>
          <DrawerContent bg="#112126ff" p="4">
            <DrawerCloseButton color="white" mt={6} />
            <DrawerHeader>Navegação</DrawerHeader>
            <DrawerBody>
              <Flex flexDir="column" h="full" align="center">
                <NavBar />
                <Flex mt="auto" flexDir="column" color="#ffffff4b" align="center" fontFamily="var(--font-lato)" gap={2}>
                  <Image w="25%" src='/assets/logo.png' alt="logo Dunamis Expedições" />
                  <Text fontSize="sm">© Todos os direitos reservados</Text>
                </Flex>
              </Flex>
            </DrawerBody>
          </DrawerContent>
        </DrawerOverlay>
      </Drawer>
    </Flex >
  )
}