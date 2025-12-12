"use client";
import { LazyFaWhatsapp } from "@/components/LazyIcon";
import { throttleRAF } from "@/lib/performance-utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { startTransition, useEffect, useState } from "react";

export function ButtonWhats() {
  const [showPopup, setShowPopup] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);
  const [valueScroll, setValueScroll] = useState(0);
  const pathname = usePathname();

  // Detecta se está na página de um pacote
  const isPackPage = pathname?.startsWith("/packs/");

  useEffect(() => {
    // Otimizado com throttleRAF para reduzir INP
    const handleScroll = throttleRAF(() => {
      const scrollPosition = window.scrollY;

      // Mostra o popup mais cedo (150px) para melhor conversão - otimização CRO
      if (scrollPosition > 150 && !hasScrolled) {
        // Feedback visual imediato
        setShowPopup(true);
        setHasScrolled(true);
        // State update não crítico em startTransition
        startTransition(() => {
          setValueScroll(scrollPosition);
        });
      }
    });

    // Passive listener para scroll não bloqueante
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [hasScrolled]);

  // Mensagem pré-formatada para melhor conversão
  const getWhatsAppMessage = () => {
    if (isPackPage) {
      const packName =
        pathname?.split("/").pop()?.replace(/-/g, " ") || "roteiro";
      return `Olá! Gostaria de saber mais informações sobre o ${packName}.`;
    }
    return "Olá! Gostaria de solicitar um orçamento para uma viagem ao Jalapão.";
  };

  const whatsappUrl = `https://api.whatsapp.com/send?phone=556392437096&text=${encodeURIComponent(
    getWhatsAppMessage()
  )}`;

  return (
    <div className="fixed right-4 sm:right-6 md:right-20 bottom-4 sm:bottom-6 md:bottom-8 z-50">
      {/* Popup */}
      {showPopup && (
        <div
          className={`absolute bottom-24 -right-16 text-sm sm:text-base font-semibold whitespace-nowrap ${
            isPackPage ? "bg-[#FF5A00] text-white" : "bg-[#25D366] text-white"
          } animate-bounce rounded-lg shadow-2xl border-2 border-white p-3 sm:p-4 mb-2 animate-fade-in`}
        >
          <div className="flex items-center gap-2 sm:gap-3">
            <div className={`w-2 h-2 bg-white animate-ping rounded-full`}></div>
            <p className="">
              {isPackPage
                ? "Quero saber o valor deste roteiro"
                : "Solicite seu orçamento"}
            </p>
          </div>
        </div>
      )}

      {/* Botão WhatsApp - Otimizado para conversão */}
      <Link
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center p-2 sm:p-3 md:p-4 bg-[#25D366] rounded-full border-2 sm:border-4 border-white shadow-2xl hover:scale-110 transition-all duration-300 hover:shadow-3xl"
        aria-label={
          isPackPage
            ? "Solicitar orçamento deste roteiro via WhatsApp"
            : "Solicitar orçamento via WhatsApp"
        }
      >
        <LazyFaWhatsapp className="text-white text-3xl sm:text-4xl md:text-5xl" />
      </Link>
    </div>
  );
}
