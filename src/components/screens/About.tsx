"use client";
import dynamic from "next/dynamic";
import Image from "next/image";
import { HTMLAttributes } from "react";

const Fade = dynamic(
  () => import("react-awesome-reveal").then((mod) => mod.Fade),
  { ssr: false }
);

type AboutType = HTMLAttributes<HTMLDivElement> & {};

function AboutScreen({ ...rest }: AboutType) {
  return (
    <div
      {...rest}
      className="flex flex-col items-center justify-center w-full h-full md:min-h-screen bg-[#f8f8f8] py-8 sm:py-12 md:py-16"
    >
      <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-[#112126ff] uppercase font-bold font-bardon-stamp text-center mb-8 sm:mb-12 md:mb-16">
        Sobre nós
      </h1>
      <div className="flex px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 mx-auto gap-6 sm:gap-8 md:gap-10 lg:gap-12 w-full items-center justify-center flex-col lg:flex-row max-w-7xl">
        <div className="flex z-10 w-full max-w-sm sm:max-w-md lg:max-w-lg xl:max-w-xl h-64 sm:h-80 md:h-96 lg:h-[28rem] xl:h-[32rem] rounded-2xl sm:rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300">
          <Fade className="w-full relative" triggerOnce>
            <Image
              src={"/about.webp"}
              alt="Equipe Dunamis Expedições - Ruty e Glauco"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 40vw"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                objectPosition: "center",
              }}
              width={500}
              height={600}
              className="hover:scale-105 transition-transform duration-300"
            />
          </Fade>
        </div>
        <div className="flex z-0 w-full max-w-sm sm:max-w-md lg:max-w-lg xl:max-w-xl text-justify lg:text-left">
          <Fade direction="left" delay={500} triggerOnce>
            <div className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl font-work-sans leading-relaxed text-gray-700">
              <p className="mb-4 sm:mb-6">
                A Dunamis Expedições é uma agência de turismo do Tocantins que
                foi fundada por um casal, Ruty (engenheira ambiental) e Glauco
                (gestor ambiental), os quais perceberam no turismo uma forma
                transformadora de contemplar a vida.
              </p>
              <p className="mb-4 sm:mb-6">
                Nossa dedicação vai além do serviço; é a criação de uma vivência
                repleta de sentimentos e momentos especiais, guiado pelo amor ao
                que fazemos. Desde o momento em que você nos escolhe, cada
                detalhe da sua viagem é cuidadosamente planejado e executado, e
                a nossa maior alegria é proporcionar uma experiência genuína e
                memorável.
              </p>
            </div>
          </Fade>
        </div>
      </div>
    </div>
  );
}

AboutScreen.displayName = "AboutScreen";

export default AboutScreen;
