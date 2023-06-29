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
