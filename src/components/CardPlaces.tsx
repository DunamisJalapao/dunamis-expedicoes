"use client"
import { Attractivie } from "@/types";
import Color from "color-thief-react";
import Image from "next/image";
import Link from "next/link";
import IconPin from '../../public/assets/icon-pin.svg';

type CardPlacesType = {
  card: Attractivie
};

export function CardPlaces({ card, ...rest }: CardPlacesType) {
  return (
    <Link href={card.link} target={"_blank"}>
      <div className="flex w-full md:w-[300px] h-full bg-white shadow-lg flex-col overflow-hidden rounded-[15px]">
        <Color src={card.img} format="rgbString" crossOrigin="anonymous">
          {({ data, loading, error }) => (
            <div style={{
              boxShadow: `0px 30px 40px -27px ${data}`
            }} className={`flex w-full h-[75%]`}>

              <Image
                className="transition hover:scale-[1.05]"
                src={card.img}
                alt="imagem home 01"
                sizes="100vw"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                }}
                width={1}
                height={1}
              />
            </div>
          )}
        </Color>

        <div className="flex flex-col h-[15%] py-4 px-3 gap-3">
          <p className="font-bardon-stamp text-sm">{card.name}</p>
          <div className="flex items-center gap-2">
            <IconPin className="w-4" />
            <p className="text-[#7C7C7C] font-work-sans font-semibold text-lg">{card.region}</p>
          </div>
        </div>
      </div>
    </Link>

  )
}