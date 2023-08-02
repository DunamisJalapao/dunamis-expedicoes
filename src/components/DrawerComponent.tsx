import { Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerOverlay, Flex, Image, Text } from "@chakra-ui/react";
import { NavBar } from "./NavBar";

type DrawerComponent = {
  isOpen: boolean,
  toggle: () => void
}

export function DraweComponent({ isOpen, toggle }: DrawerComponent) {
  return (
    <Drawer isOpen={isOpen} size="full" placement="left" onClose={toggle}>
      <DrawerOverlay>
        <DrawerContent bg="#112126ff" p="4">
          <DrawerCloseButton color="white" mt={6} />
          <DrawerBody>
            <Flex flexDir="column" h="full" align="center">
              <Flex align="center" h="full" >
                <NavBar callbackFunc={toggle} />
              </Flex>
              <Flex mt="auto" flexDir="column" color="#ffffff4b" align="center" fontFamily="var(--font-lato)" gap={2}>
                <Image w="25%" src='/assets/logo.png' alt="logo Dunamis Expedições" />
                <Text fontSize="sm">© Todos os direitos reservados</Text>
              </Flex>
            </Flex>
          </DrawerBody>
        </DrawerContent>
      </DrawerOverlay>
    </Drawer>
  )
}