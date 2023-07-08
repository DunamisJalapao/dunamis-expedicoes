
import { getAttractivies } from "@/sanity/sanity-utils";
import { HtmlHTMLAttributes } from "react";
import { CardPlaces } from "../CardPlaces";

type PackType = HtmlHTMLAttributes<HTMLDivElement> & {}

export default async function Places({ ...rest }: PackType) {
  const dataCard = await getAttractivies();
  return (
    <div {...rest} className="w-full md:w-screen h-full md:h-[70vh] bg-white">
      <div className="w-full h-full py-5 md:py-[4rem] justify-center flex-col gap-3">
        <p className="text-center text-2xl md:text-5xl text-[#112126ff] font-bold font-lato">Confira o que te <br /> AGUARDA!</p>
        <div className="flex justify-center w-full h-full items-center px-5 gap-6">
          {dataCard.map((card, _) => (
            <CardPlaces key={_} card={card} />
          ))}
        </div>
      </div>

    </div>

  )
}