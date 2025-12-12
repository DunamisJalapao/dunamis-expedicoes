"use client";
import { Drawer } from "@/components/Drawer";
import { Header } from "@/components/Header";
import { LazySectionWithSkeleton } from "@/components/LazySectionWithSkeleton";
import HomeScreen from "@/components/screens/Home";
import { AboutSkeleton } from "@/components/skeletons/AboutSkeleton";
import { ContactSkeleton } from "@/components/skeletons/ContactSkeleton";
import { FooterSkeleton } from "@/components/skeletons/FooterSkeleton";
import { GallerySkeleton } from "@/components/skeletons/GallerySkeleton";
import { PacksSkeleton } from "@/components/skeletons/PacksSkeleton";
import { PlacesSkeleton } from "@/components/skeletons/PlacesSkeleton";
import dynamic from "next/dynamic";

// Dynamic imports para componentes abaixo do fold - melhora LCP e INP
const Packs = dynamic(
  () =>
    import("@/components/screens/Packs").then((mod) => ({
      default: mod.default,
    })),
  {
    ssr: false,
  }
);

const AboutScreen = dynamic(
  () =>
    import("@/components/screens/About").then((mod) => ({
      default: mod.default,
    })),
  {
    ssr: false,
  }
);

const Places = dynamic(
  () =>
    import("@/components/screens/Places").then((mod) => ({
      default: mod.default,
    })),
  {
    ssr: false,
  }
);

const Gallery = dynamic(
  () =>
    import("@/components/screens/Gallery").then((mod) => ({
      default: mod.default,
    })),
  {
    ssr: false,
  }
);

const Contact = dynamic(
  () =>
    import("@/components/screens/Contact").then((mod) => ({
      default: mod.default,
    })),
  {
    ssr: false,
  }
);

const Footer = dynamic(
  () =>
    import("@/components/screens/Footer").then((mod) => ({
      default: mod.default,
    })),
  {
    ssr: false,
  }
);

export default function Home() {
  return (
    <main className="flex flex-col overflow-x-hidden">
      <nav className="w-full -mb-16 sm:-mb-20 lg:-mb-24 z-50 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-20 fixed top-2 sm:top-3 lg:top-4">
        <Header />
      </nav>
      {/* Hero carrega imediatamente - acima do fold */}
      <HomeScreen id="container-home" />
      {/* Componentes abaixo do fold com lazy loading e skeleton states */}
      <LazySectionWithSkeleton
        id="container-pack"
        skeleton={<PacksSkeleton />}
        rootMargin="300px"
      >
        <Packs />
      </LazySectionWithSkeleton>
      <LazySectionWithSkeleton
        id="container-about"
        skeleton={<AboutSkeleton />}
        rootMargin="200px"
      >
        <AboutScreen />
      </LazySectionWithSkeleton>
      <LazySectionWithSkeleton
        id="container-places"
        skeleton={<PlacesSkeleton />}
        rootMargin="200px"
      >
        <Places />
      </LazySectionWithSkeleton>
      <LazySectionWithSkeleton
        id="container-gallery"
        skeleton={<GallerySkeleton />}
        rootMargin="200px"
      >
        <Gallery />
      </LazySectionWithSkeleton>
      <LazySectionWithSkeleton
        id="container-contact"
        skeleton={<ContactSkeleton />}
        rootMargin="200px"
      >
        <Contact />
      </LazySectionWithSkeleton>
      <LazySectionWithSkeleton skeleton={<FooterSkeleton />} rootMargin="100px">
        <Footer />
      </LazySectionWithSkeleton>
      <Drawer />
    </main>
  );
}
