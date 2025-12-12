"use client";
import { LazyFaWhatsapp } from "@/components/LazyIcon";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";
import { useLazyFont } from "@/hooks/useLazyFont";
import { HTMLAttributes } from "react";

type ContactType = HTMLAttributes<HTMLDivElement> & {};

export default function Contact({ ...rest }: ContactType) {
  // Lazy load da fonte blueDream apenas quando componente fica visível
  const [ref, isIntersecting] = useIntersectionObserver({
    rootMargin: "100px",
    threshold: 0.1,
  });

  const fontLoaded = useLazyFont(
    "BLUEDREAM",
    "/fonts/BLUEDREAM-Regular.woff2",
    { enabled: isIntersecting }
  );
  return (
    <div
      ref={ref}
      className="flex w-screen h-[40vh] sm:h-[70vh] md:h-[80vh] flex-col relative"
    >
      <div
        {...rest}
        className="flex w-full h-full bg-green-100 bg-[url(/bg.webp)] bg-cover bg-center lg:bg-fixed bg-no-repeat"
      />
      <div className="flex w-full h-full bg-[#2E5C2EC7] flex-col items-center justify-center text-white font-work-sans text-center px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 gap-6 sm:gap-8 md:gap-10 lg:gap-12 absolute">
        <p
          className="font-bardon-stamp w-1/2 font-semibold text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4x "
          style={{ lineHeight: "160%" }}
        >
          Fale com a gente e receba orçamento via WhatsApp
        </p>
        <a
          href="https://api.whatsapp.com/send?phone=556392437096"
          target="_blank"
          rel="noopener noreferrer"
          className={` text-sm sm:text-base font-semibold whitespace-nowrap bg-[#112126ff] animate-pulse-border text-white  rounded-lg  p-3 sm:p-4 mb-2 animate-fade-in hover:bg-[#0f1a1c] hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl`}
        >
          <div className="flex items-center gap-2 sm:gap-3">
            <LazyFaWhatsapp className="text-white text-2xl " />
            <p className="font-bardon-stamp">Enviar mensagem</p>
          </div>
        </a>
        <p className="font-blue-dream text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl leading-tight max-w-4xl">
          Viagens que rendem boas histórias
        </p>
      </div>
    </div>
  );
}
