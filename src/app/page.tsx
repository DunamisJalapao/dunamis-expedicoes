"use client"
import { lazy } from 'react'

const HomeScreen = lazy(() => import('../components/Screens/Home'))
const Packs = lazy(() => import('../components/Screens/Packs'))
const AboutScreen = lazy(() => import('../components/Screens/About'))
const Places = lazy(() => import('../components/Screens/Places'))
const Gallery = lazy(() => import('../components/Screens/Gallery'))
const Contact = lazy(() => import('../components/Screens/Contact'))
const Footer = lazy(() => import('../components/Screens/Footer'))


export default function Home() {

  return (
    <div className="flex flex-col overflow-x-hidden">
      <HomeScreen id="container-home" />
      <Packs id="container-packs" />
      <AboutScreen id="container-about" />
      <Places id="container-places" />
      <Gallery id="container-gallery" />
      <Contact id="container-contact" />
      <Footer />
    </div>
  )
}
