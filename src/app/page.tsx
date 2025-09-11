"use client";
import { Drawer } from "@/components/Drawer";
import { Header } from "@/components/Header";
import Image from "next/image";
import { lazy, useEffect, useState } from "react";

const AboutScreen = lazy(() => import("@/components/screens/About"));
const HomeScreen = lazy(() => import("@/components/screens/Home"));
const Contact = lazy(() => import("@/components/screens/Contact"));
const Footer = lazy(() => import("@/components/screens/Footer"));
const Gallery = lazy(() => import("@/components/screens/Gallery"));
const Packs = lazy(() => import("@/components/screens/Packs"));
const Places = lazy(() => import("@/components/screens/Places"));

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);

  if (isLoading) {
    return (
      <div className="w-full h-screen flex flex-col items-center justify-center bg-[#112126]">
        <Image
          src="/assets/logo.png"
          alt="Dunamis Expedições Logo"
          sizes="(max-width: 640px) 120px, (max-width: 1024px) 150px, 200px"
          className="w-auto h-8 sm:h-10 lg:h-12 object-contain animate-bounce"
          width={200}
          height={60}
          priority
        />
        <p className="text-white text-2xl mt-5 font-blue-dream">
          Carregando...
        </p>
      </div>
    );
  }

  return (
    <main className="flex flex-col overflow-x-hidden">
      <nav className="w-full -mb-16 sm:-mb-20 lg:-mb-24 z-50 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-20 fixed top-2 sm:top-3 lg:top-4">
        <Header />
      </nav>
      <HomeScreen id="container-home" />
      <Packs id="container-pack" />
      <AboutScreen id="container-about" />
      <Places id="container-places" />
      <Gallery id="container-gallery" />
      <Contact id="container-contact" />
      <Footer />
      <Drawer />
    </main>
  );
}
