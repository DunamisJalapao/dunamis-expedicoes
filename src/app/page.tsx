"use client";
import { Drawer } from "@/components/Drawer";
import { Header } from "@/components/Header";
import AboutScreen from "@/components/screens/About";
import Contact from "@/components/screens/Contact";
import Footer from "@/components/screens/Footer";
import Gallery from "@/components/screens/Gallery";
import HomeScreen from "@/components/screens/Home";
import Packs from "@/components/screens/Packs";
import Places from "@/components/screens/Places";
import Image from "next/image";
import { useEffect, useState } from "react";

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
          src="/assets/logo-white.webp"
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
