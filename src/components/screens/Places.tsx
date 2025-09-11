import { HtmlHTMLAttributes } from "react";
import { CardPlaces } from "../CardPlaces";

import dataCard from "@/database/places.json";

type PackType = HtmlHTMLAttributes<HTMLDivElement> & {
  params?: { slug: string };
};

export default function Places({ ...rest }: PackType) {
  return (
    <div {...rest} className="w-full h-full min-h-screen bg-white">
      <div className="flex w-full h-full py-8 sm:py-12 md:py-16 lg:py-20 justify-center flex-col gap-6 sm:gap-8 md:gap-10 lg:gap-12">
        <h1 className="text-center text-xl sm:text-2xl md:text-3xl lg:text-4xl text-[#112126ff] font-bold font-bardon-clean px-4">
          Confira o que te <br />
          <span className="font-blue-dream text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl leading-tight text-[#FF5A00]">
            AGUARDA!
          </span>
        </h1>
        <div className="flex flex-col gap-4 sm:gap-6 md:gap-8">
          <p className="text-center uppercase text-base sm:text-lg md:text-xl font-bardon-clean text-gray-600">
            Nosso instagram
          </p>
          <div className="grid w-full grid-cols-responsive-fit-two justify-center gap-6 sm:gap-8 md:gap-10 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 max-w-7xl mx-auto">
            {dataCard.map((card, _) => (
              <CardPlaces key={_} card={card} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
