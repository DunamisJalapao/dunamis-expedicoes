"use client"
import { Header } from '@/components/Header'
import { Flex, Icon, Image, Modal, Spinner, Text, } from '@chakra-ui/react'
import { ModalGallery } from '@/components/ModalGallery'
import { lazy, Suspense } from 'react'

import LogoIncomplete from '#/assets/logo-incomplete.png'

const HomeScreen = lazy(() => import('../components/Screens/Home'))
const AboutScreen = lazy(() => import('../components/Screens/About'))
const Places = lazy(() => import('../components/Screens/Places'))
const Gallery = lazy(() => import('../components/Screens/Gallery'))
const Contact = lazy(() => import('../components/Screens/Contact'))
const Footer = lazy(() => import('../components/Screens/Footer'))

const Loading = () => (
  <Flex w="100vw" h="100vh" flexDir="column" gap={2} align="center" justify="center">
    <Spinner size="lg" />
    <Text>Carregando...</Text>
  </Flex>
)

export default function Home() {

  return (
    <Suspense fallback={<Loading />}>

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
    </Suspense>

  )
}
