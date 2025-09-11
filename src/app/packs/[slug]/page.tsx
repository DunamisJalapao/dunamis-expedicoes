"use client";

import { Drawer } from "@/components/Drawer";
import Color from "color-thief-react";
import Image from "next/image";
import { objPacks } from "./aux";

export default function Pack({ params }: { params: { slug: string } }) {
  const slug = params.slug as
    | "roteiro-3-dias"
    | "roteiro-4-dias"
    | "roteiro-5-dias";

  return (
    <>
      <Drawer />

      <div className="flex w-screen h-screen items-center justify-center relative">
        <div className="absolute w-full h-full left-0 top-0 z-0">
          <div className="flex w-full h-full relative">
            <div className="w-full h-full backdrop-filter backdrop-blur absolute top-0 left-0" />
            <Image
              src="/home1.png"
              alt="Paisagem do Jalapão - Dunamis Expedições"
              sizes="100vw"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
              }}
              width={1920}
              height={1080}
              priority
            />
          </div>
        </div>
        <div className="flex flex-col shadow-lg w-[90%] sm:w-[80%] md:w-[60%] lg:w-[40%] xl:w-[35%] bg-white px-4 sm:px-6 md:px-8 lg:px-10 py-6 sm:py-8 md:py-10 rounded-xl sm:rounded-2xl z-20 gap-4 sm:gap-6 md:gap-8">
          <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl leading-tight uppercase text-[#ff5900] font-bardon-stamp">
            {objPacks[slug].title}
          </h1>
          <p className="uppercase text-xs sm:text-sm md:text-base lg:text-lg font-bardon-clean text-gray-700 leading-relaxed">
            {objPacks[slug].description}
          </p>
        </div>
        <Color src={"/pack3.jpg"} format="rgbString" crossOrigin="anonymous">
          {({ data, loading, error }) => (
            <div
              style={{
                boxShadow: `0px 30px 40px -27px ${data}`,
              }}
              className="w-[80%] sm:w-[70%] md:w-[50%] lg:w-[35%] xl:w-[30%] h-[60%] sm:h-[70%] md:h-[80%] overflow-hidden rounded-xl sm:rounded-2xl z-10"
            >
              <Image
                src={objPacks[slug].imgHome}
                alt={`${objPacks[slug].title} - Dunamis Expedições`}
                sizes="(max-width: 640px) 80vw, (max-width: 1024px) 50vw, 35vw"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                }}
                width={500}
                height={600}
                className="hover:scale-105 transition-transform duration-300"
              />
            </div>
          )}
        </Color>
      </div>

      {/* DIAS */}
      <div className="flex flex-col w-screen h-full items-center justify-center font-bardon-clean">
        {objPacks[slug].days.map((day, index) => (
          <div key={`${index}-${day.attractivies.length}`}>
            <div className="flex flex-col lg:flex-row py-8 sm:py-12 md:py-16 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 w-full justify-center h-full gap-6 sm:gap-8 md:gap-10 lg:gap-12 xl:gap-16">
              <div className="flex flex-1 flex-col justify-center gap-4 sm:gap-6 md:gap-8">
                <div className="flex flex-col">
                  <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl self-center lg:self-start font-bardon-stamp text-center lg:text-left">
                    {day.title}
                  </h1>
                </div>
                <div>
                  <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl mb-3 sm:mb-4 md:mb-6 font-blue-dream text-center lg:text-left">
                    Atrações a serem visitadas:
                  </h3>
                  <ul className="px-4 sm:px-6 md:px-8 list-disc pl-6 sm:pl-8 md:pl-10 font-work-sans text-sm sm:text-base md:text-lg lg:text-xl space-y-2 sm:space-y-3">
                    {day.attractivies.map((attracitive, indexAttractivie) => (
                      <li
                        key={`${indexAttractivie}-${attracitive}`}
                        className="leading-relaxed"
                      >
                        {attracitive}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div
                className={`w-full lg:w-[30rem] xl:w-[35rem] h-64 sm:h-80 md:h-96 lg:h-[35rem] xl:h-[40rem] ${
                  index % 2 === 1 ? "order-1 lg:order-2" : "order-1"
                } overflow-hidden rounded-xl sm:rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300`}
              >
                <Image
                  src={day.photo}
                  alt={`${day.title} - ${objPacks[slug].title}`}
                  sizes="(max-width: 1024px) 100vw, 480px"
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                  }}
                  width={480}
                  height={640}
                  className="hover:scale-105 transition-transform duration-300"
                />
              </div>
            </div>
            {index === objPacks[slug].days.length - 1 && (
              <p className="px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 my-6 sm:my-8 md:my-12 font-work-sans text-sm sm:text-base md:text-lg w-full max-w-4xl text-justify leading-relaxed">
                <strong>* Nota</strong>: Pode haver alteração na sequência do
                roteiro, ou até de um atrativo por outro do mesmo tipo, em
                decorrência do fluxo de turistas nos atrativos, disponibilidade
                de hospedagem ou outras condições externas.
              </p>
            )}
            <div className="border border-[#0000000e] w-full max-w-4xl my-4 sm:my-6 md:my-8" />
          </div>
        ))}
      </div>

      <div className="flex flex-col w-full items-center justify-center">
        <div className="flex w-full h-full py-12 sm:py-16 md:py-20 justify-center font-lemon-milk">
          <div className="flex flex-col w-full max-w-4xl px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 justify-center gap-6 sm:gap-8">
            <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-center">
              Atividades Opcionais - Não inclusos no Pacote
            </h1>
            <ul className="px-4 sm:px-6 md:px-8 list-decimal list-inside text-base sm:text-lg md:text-xl lg:text-2xl space-y-2 sm:space-y-3">
              {objPacks[slug].optionalActivies.map((activies, _) => (
                <li key={_} className="leading-relaxed">
                  {activies}
                </li>
              ))}
            </ul>
            <p className="text-sm sm:text-base md:text-lg text-gray-600 text-center mt-4 sm:mt-6">
              * Todas sujeitas à disponibilidade na data de viagem
            </p>
          </div>
        </div>
        <div className="border border-[#0000000e] w-full max-w-4xl my-4 sm:my-6 md:my-8" />
      </div>
    </>
  );
}
