"use client";

import Image from "next/image";
import Link from "next/link";
import { HTMLAttributes } from "react";
import IconChecked from "../../public/assets/icon-checked.svg";

type CardPacksType = HTMLAttributes<HTMLDivElement> & {
  title: string;
  duration: string;
  foods: string;
  hotel: string;
  doc: string;
  img: string;
};

export function CardPacks({
  duration,
  foods,
  hotel,
  img,
  title,
  doc,
  ...rest
}: CardPacksType) {
  return (
    <Link className="w-full h-full group" href={doc}>
      <div
        {...rest}
        className="flex rounded-xl sm:rounded-2xl flex-col overflow-hidden bg-white shadow-lg hover:shadow-2xl cursor-pointer transition-all duration-300 hover:scale-[1.01] hover:-translate-y-2"
      >
        <div className="w-full h-48 sm:h-56 md:h-64 lg:h-72 overflow-hidden">
          <Image
            src={img}
            alt={`${title} - Dunamis Expedições`}
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
            }}
            width={400}
            height={300}
            className="group-hover:scale-110 transition-transform duration-300"
          />
        </div>
        <div className="flex px-4 sm:px-6 py-4 sm:py-6 flex-col justify-between min-h-[8rem] sm:min-h-[10rem]">
          <div className="flex-1">
            <div className="flex">
              <p className="text-[#FF5A00] text-base sm:text-lg md:text-xl font-bold font-bardon-clean leading-tight">
                {title}
              </p>
            </div>
            <div className="flex items-center gap-2 text-sm sm:text-base md:text-lg mt-2">
              <IconChecked className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" />
              <p className="font-work-sans text-gray-700">{duration}</p>
            </div>
          </div>
          <p className="text-[#FF5A00] text-xs sm:text-sm font-bardon-stamp text-center mt-4 group-hover:text-orange-600 transition-colors duration-200">
            Saiba mais+
          </p>
        </div>
      </div>
    </Link>
  );
}
