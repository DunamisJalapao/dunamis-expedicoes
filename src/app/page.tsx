"use client";
import { Drawer } from "@/components/Drawer";
import { Header } from "@/components/Header";
import HomeScreen from "@/components/screens/Home";
import dynamic from "next/dynamic";
import { Suspense } from "react";

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
