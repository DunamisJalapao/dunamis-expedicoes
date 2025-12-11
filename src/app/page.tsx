"use client";
import { Drawer } from "@/components/Drawer";
import { Header } from "@/components/Header";
import HomeScreen from "@/components/screens/Home";
import dynamic from "next/dynamic";
import Image from "next/image";
import { Suspense, useEffect, useState } from "react";

// Dynamic imports para componentes abaixo do fold - melhora LCP e INP
const Packs = dynamic(
  () =>
    import("@/components/screens/Packs").then((mod) => ({
      default: mod.default,
    })),
  {
    ssr: true,
    loading: () => <div className="min-h-screen bg-[#f8f8f8]" />,
  }
);

const AboutScreen = dynamic(
  () =>
    import("@/components/screens/About").then((mod) => ({
      default: mod.default,
    })),
  {
    ssr: true,
    loading: () => <div className="min-h-[400px] bg-[#f8f8f8]" />,
  }
);

const Places = dynamic(
  () =>
    import("@/components/screens/Places").then((mod) => ({
      default: mod.default,
    })),
  {
    ssr: true,
    loading: () => <div className="min-h-[400px] bg-[#f8f8f8]" />,
  }
);

const Gallery = dynamic(
  () =>
    import("@/components/screens/Gallery").then((mod) => ({
      default: mod.default,
    })),
  {
    ssr: true,
    loading: () => <div className="min-h-[400px] bg-[#f8f8f8]" />,
  }
);

const Contact = dynamic(
  () =>
    import("@/components/screens/Contact").then((mod) => ({
      default: mod.default,
    })),
  {
    ssr: true,
    loading: () => <div className="min-h-[400px] bg-[#f8f8f8]" />,
  }
);

const Footer = dynamic(
  () =>
    import("@/components/screens/Footer").then((mod) => ({
      default: mod.default,
    })),
  {
    ssr: true,
    loading: () => <div className="min-h-[200px] bg-[#112126]" />,
  }
);

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const startTime = Date.now();
    const MIN_LOADING_TIME = 1000; // Mínimo de 1 segundo

    // Garantir que as fontes críticas sejam carregadas antes de finalizar o loading
    const finishLoading = () => {
      const elapsedTime = Date.now() - startTime;
      const remainingTime = Math.max(0, MIN_LOADING_TIME - elapsedTime);

      // Aguardar o tempo restante para garantir mínimo de 1 segundo
      setTimeout(() => {
        setIsLoading(false);
      }, remainingTime);
    };

    if (document.fonts && document.fonts.ready) {
      // Aguardar as fontes carregarem e então garantir mínimo de 1 segundo
      document.fonts.ready.then(() => {
        finishLoading();
      });
    } else {
      // Fallback: aguardar 1 segundo se document.fonts não estiver disponível
      setTimeout(() => {
        setIsLoading(false);
      }, MIN_LOADING_TIME);
    }
  }, []);

  if (isLoading) {
    return (
      <div className="w-full h-screen flex flex-col items-center justify-center bg-[#112126]">
        <Image
          src="/assets/logo-white.webp"
          alt="Dunamis Expedições Logo"
          sizes="(max-width: 640px) 120px, (max-width: 1024px) 150px, 200px"
          className="h-8 sm:h-10 lg:h-24 object-contain"
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
      <Suspense fallback={<div className="min-h-screen bg-[#f8f8f8]" />}>
        <Packs id="container-pack" />
      </Suspense>
      <Suspense fallback={<div className="min-h-[400px] bg-[#f8f8f8]" />}>
        <AboutScreen id="container-about" />
      </Suspense>
      <Suspense fallback={<div className="min-h-[400px] bg-[#f8f8f8]" />}>
        <Places id="container-places" />
      </Suspense>
      <Suspense fallback={<div className="min-h-[400px] bg-[#f8f8f8]" />}>
        <Gallery id="container-gallery" />
      </Suspense>
      <Suspense fallback={<div className="min-h-[400px] bg-[#f8f8f8]" />}>
        <Contact id="container-contact" />
      </Suspense>
      <Suspense fallback={<div className="min-h-[200px] bg-[#112126]" />}>
        <Footer />
      </Suspense>
      <Drawer />
    </main>
  );
}
