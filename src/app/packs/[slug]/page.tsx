"use client";

import { Drawer } from "@/components/Drawer";
import Image from "next/image";
import { memo, use } from "react";
import { objPacks } from "./aux";

// Cor padrão baseada no tema do Jalapão - substitui color-thief-react
const DEFAULT_SHADOW_COLOR = "rgba(17, 33, 38, 0.3)";

const Pack = memo(function Pack({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const pramsProcessed = use(params);
  const { slug } = pramsProcessed;
  const slugTyped = slug as
    | "roteiro-3-dias"
    | "roteiro-4-dias"
    | "roteiro-5-dias";

  return (
    <>
      <Drawer />

      <div className="flex w-screen h-screen items-center justify-center relative">
        <div className="absolute w-full h-full left-0 top-0 z-0">
          <div className="flex w-full h-full relative">
            <div
              className={`w-full h-full backdrop-filter backdrop-blur absolute top-0 left-0`}
            />
            <Image
              src="/home-pack.webp"
              alt="imagem home 01"
              sizes="100vw"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
              }}
              width={1920}
              height={1080}
              priority
              quality={75}
              placeholder="blur"
              blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
            />
          </div>
        </div>
        <div className="flex flex-col shadow-md w-[100%] md:w-[30%] bg-white px-4 py-5 md:p-10  rounded -mr-28 md:-mr-10 z-20 gap-5">
          <h1 className="text-2xl xl:text-[3rem] leading-normal uppercase text-[#ff5900] font-bardon-stamp">
            {objPacks[slugTyped].title}
          </h1>
          <p className="uppercase text-sm font-bardon-clean">
            {objPacks[slugTyped].description}
          </p>
        </div>
        <div
          style={{
            boxShadow: `0px 30px 40px -27px ${DEFAULT_SHADOW_COLOR}`,
          }}
          className="w-full md:w-[28%] h-[70%] sm:h-auto overflow-hidden rounded-3xl z-10"
        >
          <Image
            src={objPacks[slugTyped].imgHome}
            alt={`${objPacks[slugTyped].title} - Dunamis Expedições`}
            sizes="(max-width: 768px) 100vw, 28%"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
            }}
            width={400}
            height={600}
            loading="lazy"
            quality={70}
            placeholder="blur"
            blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
          />
        </div>
      </div>

      {/* DIAS */}

      <div className="flex flex-col w-screen h-full items-center justify-center font-bardon-clean">
        {objPacks[slugTyped].days.map((day, index) => (
          <>
            <div
              key={`${index}-${day.attractivies.length}`}
              className="flex flex-col md:flex-row py-10 px-4 md:px-auto w-full justify-center h-full md:gap-20"
            >
              <div className="flex h-[25rem] flex-col justify-center md:justify-around gap-5 ">
                <div className="flex flex-col">
                  <h1 className="text-3xl md:text-5xl self-center md:self-start font-bardon-stamp">
                    {day.title}
                  </h1>
                </div>
                <div>
                  <h3 className="text-3xl md:text-5xl mb-2 font-blue-dream">
                    Atrações a serem visitadas:
                  </h3>
                  <ul className="px-4 list-disc pl-6 font-work-sans">
                    {day.attractivies.map((attracitive, indexAttractivie) => (
                      <li key={`${indexAttractivie}-${attracitive}`}>
                        {attracitive}
                      </li>
                    ))}
                  </ul>
                </div>
                {/* <p>20h: Chegada na pousada</p> */}
              </div>
              <div
                key={`${index}-${day.attractivies.length}`}
                className={`w-full md:w-[30rem] h-[35rem] ${
                  index % 2 === 1 ? "order-1 md:-order-1" : "order-1"
                } overflow-hidden rounded-2xl`}
              >
                <Image
                  src={day.photo}
                  alt="imagem home 01"
                  sizes="(max-width: 768px) 100vw, 30rem"
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                  }}
                  width={480}
                  height={560}
                  loading="lazy"
                  quality={75}
                  placeholder="blur"
                  blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
                />
              </div>
            </div>
            {index === objPacks[slugTyped].days.length - 1 && (
              <p
                key={`${index}-${day.attractivies.length}`}
                className="px-4 my-9 md:px-auto font-work-sans text-md w-[60%] text-justify"
              >
                <strong>* Nota</strong>: Pode haver alteração na sequência do
                roteiro, ou até de um atrativo por outro do mesmo tipo, em
                decorrência do fluxo de turistas nos atrativos, disponibilidade
                de hospedagem ou outras condições externas.
              </p>
            )}
            <div
              key={`${index}-${day.attractivies.length}`}
              className="border border-[#0000000e] w-full md:w-[60%]"
            />
          </>
        ))}
      </div>

      <div className="flex flex-col w-full items-center justify-center">
        <div className="flex w-full h-full py-20 justify-center font-lemon-milk">
          <div className="flex flex-col w-full md:w-[60%] px-4 md:px-auto justify-center gap-8">
            <h1 className="text-2xl md:text-4xl">
              Atividades Opcionais - Não inclusos no Pacote
            </h1>
            <ul className="px-4 list-decimal list-inside text-2xl">
              {objPacks[slugTyped].optionalActivies.map((activies, _) => (
                <li key={_}>{activies}</li>
              ))}
            </ul>
            <p>* Todas sujeitas à disponibilidade na data de viagem</p>
          </div>
        </div>
        <div className="border border-[#0000000e] w-full md:w-[60%]" />
      </div>
    </>
  );
});

export default Pack;
