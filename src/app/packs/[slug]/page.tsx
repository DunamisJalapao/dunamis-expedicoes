"use client"

import { ButtonWhats } from "@/components/ButtonWhats";
import Color from "color-thief-react";
import { objPacks } from "./aux";


export default function Pack({ params }: { params: { slug: string } }) {
  const slug = params.slug as 'roteiro-3-dias' | 'roteiro-4-dias' | 'roteiro-5-dias'

  return (
    <>
      <div className="flex w-screen h-screen items-center justify-center relative">
        <div className="absolute w-full h-full left-0 top-0 z-0">
          <div className="flex w-full h-full relative">
            <div
              className={`w-full h-full backdrop-filter backdrop-blur absolute top-0 left-0`}
            />
            <img
              src="/home1.png"
              alt="image 1"
              className="h-full w-full object-cover"
            />
          </div>
        </div>
        <div className="flex flex-col shadow-md w-[100%] md:w-[30%] bg-white px-4 py-5 md:p-10  rounded -mr-28 md:-mr-10 z-20 gap-5">
          <h1
            style={{
              WebkitTextStroke: '2px #ff5900'
            }}
            className=" text-3xl xl:text-7xl font-lemon-milk font-bold uppercase text-transparent stroke-0 stroke-red"
          >
            {objPacks[slug].title}
          </h1>
          <p className="uppercase">{objPacks[slug].description}</p>
        </div>
        <Color src={'/pack3.jpg'} format="rgbString" crossOrigin="anonymous">
          {({ data, loading, error }) => (
            <>
              <div
                style={{
                  boxShadow: `0px 30px 40px -27px ${data}`
                }}
                className={`w-full md:w-[28%] h-[70%] sm:h-auto overflow-hidden rounded-3xl z-10`}
              >
                <img className={`md:w-full h-full sm:h-auto object-cover`} src={objPacks[slug].imgHome} alt="..." />
              </div>
            </>
          )}
        </Color>
      </div>

      {/* DIAS */}

      <div className="flex flex-col w-screen h-full items-center justify-center font-lemon-milk">
        {objPacks[slug].days.map((day, _) => (
          <>
            <div key={_} className="flex flex-col md:flex-row py-10 px-4 md:px-auto w-full justify-center h-full md:gap-20">
              <div className="flex h-[25rem] flex-col justify-center md:justify-around ">
                <div className="flex flex-col">
                  <h1 className="text-3xl md:text-5xl self-center md:self-start">{day.title}</h1>
                </div>
                <div>

                  <h3 className="text-xl md:text-2xl mb-2">Atrações a serem visitadas:</h3>
                  <ul className="px-4 list-disc pl-6">
                    {day.attractivies.map((attracitive, _) => (
                      <li key={_}>{attracitive}</li>
                    ))}
                  </ul>
                </div>
                {/* <p>20h: Chegada na pousada</p> */}
              </div>
              <div
                className={`w-full md:w-[30rem] h-[35rem] ${_ % 2 === 1 ? 'order-1 md:-order-1' : 'order-1'} overflow-hidden rounded-2xl`}
              >
                <img className="rounded-2xl" src={day.photo} alt="..." />
              </div>
            </div>

            <div className="border border-[#0000000e] w-full md:w-[60%]" />
          </>
        ))}
      </div>

      <div className="flex flex-col w-full items-center justify-center">
        <div className="flex w-full h-full py-20 justify-center font-lemon-milk">
          <div className="flex flex-col w-full md:w-[60%] px-4 md:px-auto justify-center gap-8">
            <h1 className="text-2xl md:text-4xl">Atividades Opcionais - Não inclusos no Pacote</h1>
            <ul className="px-4 list-decimal list-inside text-2xl">
              {objPacks[slug].optionalActivies.map((activies, _) => (
                <li key={_}>{activies}</li>
              ))}
            </ul>
            <p>*Todas sujeitas à disponibilidade na data de viagem</p>
          </div>
        </div>
        <div className="border border-[#0000000e] w-full md:w-[60%]" />
      </div>
      <ButtonWhats />

    </>
  )
}