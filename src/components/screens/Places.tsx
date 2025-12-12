import { HtmlHTMLAttributes } from "react";
import { CardPlaces } from "../CardPlaces";

import dataCard from "@/database/places.json";

type PackType = HtmlHTMLAttributes<HTMLDivElement> & {
  params?: { slug: string };
};

export default function Places({ ...rest }: PackType) {
  return (
    <div {...rest} className="w-full md:w-screen h-full bg-white">
      <div className="flex w-full h-full py-5 md:py-[4rem] justify-center flex-col gap-8">
        <h1 className="text-center text-[1.5rem] text-[#112126ff] font-bold font-bardon-clean">
          Confira o que te <br />{" "}
          <span className="font-blue-dream text-[6rem] leading-[6.5rem] text-[#FF5A00]">
            AGUARDA!
          </span>
        </h1>
        <div className="flex flex-col gap-2">
          <p className="text-center uppercase text-lg  font-bardon-clean">
            Nosso instagram
          </p>
          <div className="grid w-full grid-cols-responsive-fit-two justify-center gap-6 px-4 sm:px-6 md:px-8  max-w-7xl mx-auto">
            {dataCard.map((card, _) => (
              <CardPlaces key={_} card={card} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
