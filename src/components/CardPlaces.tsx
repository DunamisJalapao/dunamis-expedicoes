"use client";
import { Attractivie } from "@/types";
import Color from "color-thief-react";
import Image from "next/image";
import Link from "next/link";
import IconPin from "../../public/assets/icon-pin.svg";

type CardPlacesType = {
  card: Attractivie;
};

export function CardPlaces({ card, ...rest }: CardPlacesType) {
  return (
    <Link
      href={card.link}
      target={"_blank"}
      rel="noopener noreferrer"
      className="group"
    >
      <div className="flex w-full h-full bg-white shadow-lg hover:shadow-2xl flex-col overflow-hidden rounded-xl sm:rounded-2xl transition-all duration-300 hover:scale-105 hover:-translate-y-2">
        <Color src={card.img} format="rgbString" crossOrigin="anonymous">
          {({ data, loading, error }) => (
            <div
              style={{
                boxShadow: `0px 30px 40px -27px ${data}`,
              }}
              className={`flex w-full h-48 sm:h-56 md:h-64 lg:h-72 overflow-hidden`}
            >
              <Image
                className="transition-transform duration-300 group-hover:scale-110"
                src={card.img}
                alt={`${card.name} - ${card.region}`}
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                }}
                width={400}
                height={300}
              />
            </div>
          )}
        </Color>

        <div className="flex flex-col py-4 sm:py-6 px-3 sm:px-4 gap-2 sm:gap-3 flex-1">
          <p className="font-bardon-stamp text-sm sm:text-base md:text-lg font-bold text-gray-800 leading-tight">
            {card.name}
          </p>
          <div className="flex items-center gap-2">
            <IconPin className="w-3 h-3 sm:w-4 sm:h-4 flex-shrink-0 text-gray-500" />
            <p className="text-[#7C7C7C] font-work-sans font-semibold text-sm sm:text-base md:text-lg">
              {card.region}
            </p>
          </div>
        </div>
      </div>
    </Link>
  );
}
