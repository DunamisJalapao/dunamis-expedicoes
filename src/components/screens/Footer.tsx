"use client";
import { FaInstagram, FaTiktok, FaWhatsapp, FaYoutube } from "react-icons/fa";

import Image from "next/image";
import { NavBar } from "../NavBar";

export default function Footer() {
  const listIcons = [
    {
      icon: <FaWhatsapp />,
      route: "https://api.whatsapp.com/send?phone=556392437096",
    },
    {
      icon: <FaInstagram />,
      route: "https://www.instagram.com/dunamis_expedicoes/",
    },
    { icon: <FaTiktok />, route: "https://www.tiktok.com/@dunamis_expedicoes" },
    {
      icon: <FaYoutube />,
      route: "https://www.youtube.com/@dunamis_expedicoes",
    },
  ];

  return (
    <div className="flex w-full h-full min-h-[50vh] bg-white">
      {/* Mobile Layout */}
      <div className="flex w-full h-full px-4 sm:px-6 md:px-8 py-8 sm:py-12 items-center justify-center flex-col gap-6 sm:gap-8 md:gap-10 lg:hidden">
        <div className="w-24 sm:w-32 relative">
          <Image
            src="/assets/logo-green.webp"
            alt="Dunamis Expedições Logo"
            sizes="(max-width: 640px) 96px, 128px"
            style={{
              width: "100%",
              height: "auto",
              objectFit: "contain",
            }}
            width={128}
            height={64}
          />
        </div>

        <div className="w-full">
          <NavBar className="text-center text-black" />
        </div>

        <div className="flex flex-col font-work-sans text-center text-sm sm:text-base">
          <p>© Todos os direitos reservados</p>
          <p>Dunamis Expedições</p>
        </div>

        <div className="flex w-full max-w-xs text-lg sm:text-xl justify-between">
          {listIcons.map((buttons, _) => {
            const labels: Record<string, string> = {
              "https://api.whatsapp.com/send?phone=556392437096":
                "Contato via WhatsApp",
              "https://www.instagram.com/dunamis_expedicoes/":
                "Seguir no Instagram",
              "https://www.tiktok.com/@dunamis_expedicoes": "Seguir no TikTok",
              "https://www.youtube.com/@dunamis_expedicoes":
                "Inscrever-se no YouTube",
            };
            return (
              <a
                href={buttons.route}
                target="_blank"
                key={_}
                rel="noopener noreferrer"
                aria-label={labels[buttons.route] || "Link para rede social"}
              >
                <div className="flex cursor-pointer p-2 sm:p-3 border-2 border-[#112126ff] rounded-full hover:scale-110 hover:bg-[#112126ff] hover:text-white transition-all duration-300">
                  {buttons.icon}
                </div>
              </a>
            );
          })}
        </div>

        <div className="flex flex-col text-center text-xs sm:text-sm">
          <p>Design and Develop</p>
          <p>João Vitor Soares</p>
        </div>

        <a
          className="text-center"
          href="https://goo.gl/maps/fjZN2K3mieR7Jf368"
          target="_blank"
          rel="noopener noreferrer"
        >
          <p className="font-bardon-stamp text-xs sm:text-sm text-gray-600 hover:text-[#112126ff] transition-colors duration-200">
            Arse 23, Alameda 15, Plano Diretor Sul, Palmas - TO CEP: 77.020-574
          </p>
        </a>
      </div>

      {/* Desktop Layout */}
      <div className="hidden lg:flex w-full h-full px-8 xl:px-16 2xl:px-20 py-12 items-center justify-center flex-col">
        <div className="flex w-full flex-col h-full items-center justify-center gap-6 xl:gap-8 max-w-7xl">
          <div className="flex w-full uppercase gap-8 xl:gap-12 2xl:gap-16 text-2xl xl:text-3xl 2xl:text-4xl font-bold items-center justify-center text-black">
            <NavBar className="flex flex-[2] text-black text-base xl:text-lg 2xl:text-xl" />

            <div className="flex flex-1 w-full justify-end">
              {listIcons.map((buttons, _) => {
                const labels: Record<string, string> = {
                  "https://api.whatsapp.com/send?phone=556392437096":
                    "Contato via WhatsApp",
                  "https://www.instagram.com/dunamis_expedicoes/":
                    "Seguir no Instagram",
                  "https://www.tiktok.com/@dunamis_expedicoes":
                    "Seguir no TikTok",
                  "https://www.youtube.com/@dunamis_expedicoes":
                    "Inscrever-se no YouTube",
                };
                return (
                  <a
                    href={buttons.route}
                    target="_blank"
                    key={_}
                    rel="noopener noreferrer"
                    aria-label={
                      labels[buttons.route] || "Link para rede social"
                    }
                  >
                    <div className="flex cursor-pointer items-center justify-center text-xl xl:text-2xl 2xl:text-3xl p-2 xl:p-3 ml-4 xl:ml-6 border border-[#112126ff] rounded-full hover:scale-110 hover:bg-[#112126ff] hover:text-white transition-all duration-300">
                      {buttons.icon}
                    </div>
                  </a>
                );
              })}
            </div>
          </div>

          <div className="border border-[#000000a1] w-full" />

          <div className="flex flex-row w-full items-center justify-between font-bold text-sm xl:text-base 2xl:text-lg">
            <div className="flex flex-1 flex-col text-left">
              <p>© Todos os direitos reservados</p>
              <p>Dunamis Expedições</p>
            </div>

            <div className="flex flex-1 justify-center">
              <div className="flex relative items-center justify-center w-32 xl:w-40 2xl:w-48">
                <Image
                  src="/assets/logo-green.webp"
                  alt="Dunamis Expedições Logo"
                  sizes="(max-width: 1280px) 160px, 192px"
                  style={{
                    width: "100%",
                    height: "auto",
                    objectFit: "contain",
                  }}
                  width={192}
                  height={96}
                />
              </div>
            </div>

            <div className="flex flex-1 flex-col text-right">
              <p>Design and Develop</p>
              <p>João Vitor Soares</p>
            </div>
          </div>
        </div>

        <a
          className="mt-6 xl:mt-8 text-center"
          href="https://goo.gl/maps/fjZN2K3mieR7Jf368"
          target="_blank"
          rel="noopener noreferrer"
        >
          <p className="font-bardon-stamp text-sm xl:text-base 2xl:text-lg text-gray-600 hover:text-[#112126ff] transition-colors duration-200">
            Arse 23, Alameda 15, Plano Diretor Sul, Palmas - TO CEP: 77.020-574
          </p>
        </a>
      </div>
    </div>
  );
}
