"use client"
import { Header } from '@/components/Header'
import { AboutScreen } from '@/components/Screens/About'
import { Contact } from '@/components/Screens/Contact'
import { Footer } from '@/components/Screens/Footer'
import { HomeScreen } from '@/components/Screens/Home'
import { Gallery } from '@/components/Screens/Gallery'
import { Places } from '@/components/Screens/Places'
import { Flex, Modal } from '@chakra-ui/react'
import { ModalGallery } from '@/components/ModalGallery'

export default function Home() {

  return (
    <Flex
      flexDir="column"
      overflowX="hidden"
    >
      <HomeScreen id="container-home" />
      <AboutScreen id="container-about" />
      <Places id="container-places" />
      <Gallery id="container-gallery" />
      <Contact id="container-contact" />
      <Footer />
    </Flex>
  )
}
