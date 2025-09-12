"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { FaWhatsapp } from "react-icons/fa";

export function ButtonWhats() {
  const [showPopup, setShowPopup] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);
  const [valueScroll, setValueScroll] = useState(0);
  const pathname = usePathname();

  // Detecta se está na página de um pacote
  const isPackPage = pathname?.startsWith("/packs/");

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;

      // Mostra o popup quando o usuário rola mais de 300px e não desaparece mais
      if (scrollPosition > 300 && !hasScrolled) {
        setShowPopup(true);
        setHasScrolled(true);
        setValueScroll(scrollPosition);
      }
    };

    // Adiciona listener de scroll com passive para melhor performance
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [hasScrolled]);

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

      {/* Botão WhatsApp */}
      <Link
        href={"https://api.whatsapp.com/send?phone=556392437096"}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center p-2 sm:p-3 md:p-4 bg-[#25D366] rounded-full border-2 sm:border-4 border-white shadow-2xl hover:scale-110 transition-all duration-300 animate-pulse-border hover:shadow-3xl"
        aria-label="Contato via WhatsApp"
      >
        <FaWhatsapp className="text-white text-3xl sm:text-4xl md:text-5xl" />
      </Link>
    </div>
  );
}
