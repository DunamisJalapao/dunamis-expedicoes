"use client"
import { Header } from '@/components/Header'
import { About } from '@/components/Screens/About'
import { Contact } from '@/components/Screens/Contact'
import { HomeScreen } from '@/components/Screens/Home'
import { Itineraries } from '@/components/Screens/Itineraries'
import { Pack } from '@/components/Screens/Packs'
import { TabsHome } from '@/components/TabsHome'
import { Flex } from '@chakra-ui/react'

export default function Home() {
  return (
    <Flex
      px="50px"
      py="13px"
      w="100vw"
      h="100vh"
      flexDir="column"
      bgImage="/bg.jpeg"
      bgSize="cover"
      bgPos="center"
    >
      <HomeScreen />
      <About />
      <Contact />
      <Itineraries />
      <Pack />
    </Flex>
  )
}
