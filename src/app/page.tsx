'use client'
import { Header } from "@/components/Header";
import AboutScreen from "@/components/screens/About";
import Contact from "@/components/screens/Contact";
import Footer from "@/components/screens/Footer";
import Gallery from "@/components/screens/Gallery";
import HomeScreen from "@/components/screens/Home";
import Packs from "@/components/screens/Packs";
import Places from "@/components/screens/Places";


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
    </main>
  )
}
