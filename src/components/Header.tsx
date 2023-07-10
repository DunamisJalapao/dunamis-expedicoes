"use client"
import { useUtils } from "@/hooks/utils";
import { Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerHeader, DrawerOverlay, Flex, Icon, Image, Text, useMediaQuery } from "@chakra-ui/react";
import { HTMLAttributes, useEffect, useState } from "react";
import { CgMenuRight } from 'react-icons/cg';
import { FaInstagram, FaTiktok, FaWhatsapp, FaYoutube } from "react-icons/fa";
import { twMerge } from "tailwind-merge";
import { NavBar } from "./NavBar";

type HeaderProps = HTMLAttributes<HTMLDivElement> & {}

const listIcons = [
  { icon: <FaWhatsapp />, route: 'https://api.whatsapp.com/send?phone=556392437096' },
  { icon: <FaInstagram />, route: 'https://www.instagram.com/dunamis_expedicoes/' },
  { icon: <FaTiktok />, route: 'https://www.tiktok.com/@dunamis_expedicoes' },
  { icon: <FaYoutube />, route: 'https://www.youtube.com/@dunamis_expedicoes' },
]

export function Header({ ...rest }: HeaderProps) {
  const [isMobile] = useMediaQuery("(max-width: 1024px)");
  const [color, _setColor] = useState('rgba(255,2555,255,0.2)');

  const handleScrollWindow = () => {
    const position = window.scrollY;

    console.log('position =>', position)
    position <= 100 ? _setColor('rgba(255,2555,255,0.2)') : _setColor('#112126a8');
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScrollWindow)
    return () => {
      window.removeEventListener('scroll', handleScrollWindow);
    }
  }, []);

  const { isOpen, onToggle } = useUtils();
  return (
    <div className={twMerge(`flex w-full h-[5rem] bg-[${color}] shadow-lg rounded-2xl backdrop-filter backdrop-blur px-[0.5rem] md:px-[4rem] items-center transition`, rest.className)}>
      <div className="flex flex-1">
        <Image
          src="/assets/logo.png"
          w={"5rem"}
        />
      </div>

      {isMobile ?
        <div className="flex flex-1 justify-end" onClick={() => onToggle(true)}>
          <Icon color="white" fontSize="4xl" as={CgMenuRight} />
        </div>
        :
        <>
          <div className="w-full flex-[5] pt-1">
            <NavBar className="text-md text-center justify-center" />
          </div>
          <div className="flex w-full items-center flex-1 justify-end">
            {listIcons.map((buttons, _) => (
              <a href={buttons.route} target="_blank" key={_}>
                <div className="flex cursor-pointer p-1 pr-3 text-white text-xl rounded-full hover:scale-105">
                  {buttons.icon}
                </div>
              </a>
            ))}
          </div>
        </>
      }

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
    </div>
  )
}