"use client";
import { Drawer } from "@/components/Drawer";
import { Header } from "@/components/Header";
import { lazy, Suspense } from "react";

// Lazy load components with proper code splitting
// Error handling is done by ErrorBoundary in layout.tsx
const HomeScreen = lazy(() => import("@/components/screens/Home"));
const Packs = lazy(() => import("@/components/screens/Packs"));
const AboutScreen = lazy(() => import("@/components/screens/About"));
const Places = lazy(() => import("@/components/screens/Places"));
const Gallery = lazy(() => import("@/components/screens/Gallery"));
const Contact = lazy(() => import("@/components/screens/Contact"));
const Footer = lazy(() => import("@/components/screens/Footer"));

// Loading skeleton component
function LoadingSkeleton() {
  return (
    <div className="w-full h-screen flex items-center justify-center bg-[#112126]">
      <div className="animate-pulse">
        <div className="w-32 h-12 bg-white/20 rounded-lg"></div>
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <main className="flex flex-col overflow-x-hidden">
      <nav className="w-full -mb-16 sm:-mb-20 lg:-mb-24 z-50 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-20 fixed top-2 sm:top-3 lg:top-4">
        <Header />
      </nav>
      <Suspense fallback={<LoadingSkeleton />}>
        <HomeScreen id="container-home" />
      </Suspense>
      <Suspense fallback={null}>
        <Packs id="container-pack" />
      </Suspense>
      <Suspense fallback={null}>
        <AboutScreen id="container-about" />
      </Suspense>
      <Suspense fallback={null}>
        <Places id="container-places" />
      </Suspense>
      <Suspense fallback={null}>
        <Gallery id="container-gallery" />
      </Suspense>
      <Suspense fallback={null}>
        <Contact id="container-contact" />
      </Suspense>
      <Suspense fallback={null}>
        <Footer />
      </Suspense>
      <Drawer />
    </main>
  );
}
