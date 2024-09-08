"use client";
import Image from "next/image";
import { HTMLAttributes } from "react";
import { Fade } from "react-awesome-reveal";

type AboutType = HTMLAttributes<HTMLDivElement> & {};

export default function AboutScreen({ ...rest }: AboutType) {
  return (
    <div
      {...rest}
      className="flex flex-col items-center md:justify-center w-full md:w-screen h-full md:h-screen bg-[#f8f8f8] "
    >
      <h1 className="mt-5 md:mt-0 mb-5 md:mb-0 items-center text-2xl md:text-3xl text-[#112126ff] uppercase font-bold font-bardon-stamp">
        Sobre nós
      </h1>
      <div className="flex mt-0 md:mt-14 px-0 sm:px-14 mx-auto gap-5 md:gap-10 w-full items-center justify-center flex-col md:flex-row">
        <div className="flex z-10 w-[25rem] md:w-[30rem] h-[25rem] md:h-[40rem] rounded-[25px] overflow-hidden shadow-[0px_28px_50px_-27px_#d2b597,0px_8px_100px_13px_#00000003] md:shadow-[0px_58px_50px_-27px_#d2b597,0px_8px_100px_13px_#00000003]">
          <Fade className="w-full relative" triggerOnce>
            <Image
              src={"/about.jpeg"}
              alt="imagem home 01"
              sizes="100vw"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                objectPosition: "bottom",
              }}
              width={1}
              height={1}
            />
          </Fade>
        </div>
        <div className="flex z-0 w-[25rem] md:w-[30rem] h-full md:h-[40rem] text-justify md:text-left">
          <Fade direction="left" delay={500} triggerOnce>
            <div className="text-md md:text-xl xl:text-2xl font-work-sans">
              {/* <PortableText value={about[0].description} /> */}
              <p>
                A Dunamis Expedições é uma agência de turismo do Tocantins que
                foi fundada por um casal, Ruty (engenheira ambiental) e Glauco
                (gestor ambiental), os quais perceberam no turismo uma forma
                transformadora de contemplar a vida.
                <br />
                <br />
                Nossa dedicação vai além do serviço; é a criação de uma vivência
                repleta de sentimentos e momentos especiais, guiado pelo amor ao
                que fazemos. Desde o momento em que você nos escolhe, cada
                detalhe da sua viagem é cuidadosamente planejado e executado, e
                a nossa maior alegria é proporcionar uma experiência genuína e
                memorável.
                <br />
                <br />
                {/* <strong>Somos a Dunamis Expedições!</strong> */}
              </p>
            </div>
          </Fade>
        </div>
      </div>
    </div>
  );
}
