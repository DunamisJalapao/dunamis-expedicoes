
import { getAttractivies } from "@/sanity/sanity-utils";
import { HtmlHTMLAttributes } from "react";
import { CardPlaces } from "../CardPlaces";

type PackType = HtmlHTMLAttributes<HTMLDivElement> & {
  params?: { slug: string }
}

export default async function Places({ ...rest }: PackType) {
  const dataCard = await getAttractivies();
  return (
    <div {...rest} className="w-full md:w-screen h-full bg-white">
      <div className="flex w-full h-full py-5 md:py-[4rem] justify-center flex-col gap-8">
        <h1 className="text-center text-2xl md:text-5xl text-[#112126ff] font-bold font-lato">Confira o que te <br /> AGUARDA!</h1>
        <div className="flex flex-col gap-2">
          <p className="text-center uppercase text-lg md:text-2xl">Nosso instagram</p>
          <div className="grid w-full grid-cols-resposive-fit-two justify-center gap-10">
            {dataCard.map((card, _) => (
              <CardPlaces key={_} card={card} />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}