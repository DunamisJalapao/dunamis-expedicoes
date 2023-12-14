'use client'
import { Header } from "@/components/Header";
import useFontsLoad from "@/hooks/useFontsLoad";
// import AboutScreen from "@/components/screens/About";
// import Contact from "@/components/screens/Contact";
// import Footer from "@/components/screens/Footer";
// import Gallery from "@/components/screens/Gallery";
// import HomeScreen from "@/components/screens/Home";
// import Packs from "@/components/screens/Packs";
// import Places from "@/components/screens/Places";
import { lazy } from "react";
import Logo from '../../public/logo.svg';


const AboutScreen = lazy(() => import('@/components/screens/About'))
const HomeScreen = lazy(() => import('@/components/screens/Home'))
const Contact = lazy(() => import('@/components/screens/Contact'))
const Footer = lazy(() => import('@/components/screens/Footer'))
const Gallery = lazy(() => import('@/components/screens/Gallery'))
const Packs = lazy(() => import('@/components/screens/Packs'))
const Places = lazy(() => import('@/components/screens/Places'))

export default function Home() {
  const fontsIsLoaded = useFontsLoad();
  return (
    <main className="flex flex-col overflow-x-hidden">
      {
        fontsIsLoaded ? <>
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
        </>
          :
          <div className="bg-[#022712] w-screen h-screen ">
            <div className="flex flex-col items-center justify-center w-full h-full animate-opacity">

              <Logo className="w-60 " />
              <p className="-mt-8 font-bardon-stamp text-[0.9rem]  text-[#d5d3a6]">Carregando...</p>
            </div>
          </div>
      }

    </main>
  )
}
