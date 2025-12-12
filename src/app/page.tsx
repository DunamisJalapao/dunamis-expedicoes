"use client";
import { Drawer } from "@/components/Drawer";
import { Header } from "@/components/Header";
import { LazySection } from "@/components/LazySection";
import HomeScreen from "@/components/screens/Home";
import dynamic from "next/dynamic";

// Dynamic imports para componentes abaixo do fold - melhora LCP e INP
const Packs = dynamic(
  () =>
    import("@/components/screens/Packs").then((mod) => ({
      default: mod.default,
    })),
  {
    ssr: false,
    loading: () => <div className="min-h-screen bg-[#f8f8f8]" />,
  }
);

const AboutScreen = dynamic(
  () =>
    import("@/components/screens/About").then((mod) => ({
      default: mod.default,
    })),
  {
    ssr: false,
    loading: () => <div className="min-h-[400px] bg-[#f8f8f8]" />,
  }
);

const Places = dynamic(
  () =>
    import("@/components/screens/Places").then((mod) => ({
      default: mod.default,
    })),
  {
    ssr: false,
    loading: () => <div className="min-h-[400px] bg-[#f8f8f8]" />,
  }
);

const Gallery = dynamic(
  () =>
    import("@/components/screens/Gallery").then((mod) => ({
      default: mod.default,
    })),
  {
    ssr: false,
    loading: () => <div className="min-h-[400px] bg-[#f8f8f8]" />,
  }
);

const Contact = dynamic(
  () =>
    import("@/components/screens/Contact").then((mod) => ({
      default: mod.default,
    })),
  {
    ssr: false,
    loading: () => <div className="min-h-[400px] bg-[#f8f8f8]" />,
  }
);

const Footer = dynamic(
  () =>
    import("@/components/screens/Footer").then((mod) => ({
      default: mod.default,
    })),
  {
    ssr: false,
    loading: () => <div className="min-h-[200px] bg-[#112126]" />,
  }
);

export default function Home() {
  return (
    <main className="flex flex-col overflow-x-hidden">
      <nav className="w-full -mb-16 sm:-mb-20 lg:-mb-24 z-50 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-20 fixed top-2 sm:top-3 lg:top-4">
        <Header />
      </nav>
      {/* Primeiras duas seções carregadas imediatamente */}
      <HomeScreen id="container-home" />
      <LazySection
        id="container-pack"
        fallback={<div className="min-h-screen bg-[#f8f8f8]" />}
      >
        <Packs />
      </LazySection>
      {/* Demais seções carregadas apenas quando visíveis no scroll */}
      <LazySection
        id="container-about"
        fallback={<div className="min-h-[400px] bg-[#f8f8f8]" />}
      >
        <AboutScreen />
      </LazySection>
      <LazySection
        id="container-places"
        fallback={<div className="min-h-[400px] bg-[#f8f8f8]" />}
      >
        <Places />
      </LazySection>
      <LazySection
        id="container-gallery"
        fallback={<div className="min-h-[400px] bg-[#f8f8f8]" />}
      >
        <Gallery />
      </LazySection>
      <LazySection
        id="container-contact"
        fallback={<div className="min-h-[400px] bg-[#f8f8f8]" />}
      >
        <Contact />
      </LazySection>
      <LazySection fallback={<div className="min-h-[200px] bg-[#112126]" />}>
        <Footer />
      </LazySection>
      <Drawer />
    </main>
  );
}
