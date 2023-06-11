"use client"
import { Header } from '@/components/Header'
import { About } from '@/components/Screens/About'
import { Contact } from '@/components/Screens/Contact'
import { Footer } from '@/components/Screens/Footer'
import { HomeScreen } from '@/components/Screens/Home'
import { Itineraries } from '@/components/Screens/Itineraries'
import { Places } from '@/components/Screens/Places'
import { Flex } from '@chakra-ui/react'

export default function Home() {

  return (
    <Flex
      flexDir="column"
      overflowX="hidden"
    >
      <HomeScreen id="container-home" />
      <About id="container-about" />
      <Places id="container-places" />
      <Itineraries id="container-itineraries" />
      <Contact id="container-contact" />
      <Footer />
    </Flex>
  )
}
