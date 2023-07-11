"use client"

import { ButtonWhats } from '@/components/ButtonWhats'
import { Header } from '@/components/Header'
import AboutScreen from '@/components/Screens/About'
import Contact from '@/components/Screens/Contact'
import Footer from '@/components/Screens/Footer'
import Gallery from '@/components/Screens/Gallery'
import HomeScreen from '@/components/Screens/Home'
import Packs from '@/components/Screens/Packs'
import Places from '@/components/Screens/Places'



export default function Home() {

  return (
    <main className="flex flex-col overflow-x-hidden">
      <nav className='w-full -mb-[5rem] z-50 px-[20px] fixed top-3'>
        <Header />
      </nav>
      <HomeScreen id="container-home" />
      <Packs id="container-pack" />
      <AboutScreen id="container-about" />
      <Places id="container-places" />
      <Gallery id="container-gallery" />
      <Contact id="container-contact" />
      <Footer />
      <ButtonWhats />
    </main>
  )
}
