import { HTMLAttributes } from "react";
import { CardPacks } from "../CardPacks";

type PacksProps = HTMLAttributes<HTMLDivElement> & {};

const roteirosData = [
  {
    title: "ROTEIRO 3 DIAS",
    duration: "3 dias e 2 noites",
    foods: "Alimento incluso",
    hotel: "Hospedagem inclusa",
    doc: "/packs/roteiro-3-dias",
    img: "/images/pack3.avif",
  },
  {
    title: "ROTEIRO 4 DIAS",
    duration: "4 dias e 3 noites",
    foods: "Alimento incluso",
    hotel: "Hospedagem inclusa",
    doc: "/packs/roteiro-4-dias",
    img: "/images/pack4.avif",
  },
  {
    title: "ROTEIRO 5 DIAS",
    duration: "5 dias e 4 noites",
    foods: "Alimento incluso",
    hotel: "Hospedagem inclusa",
    doc: "/packs/roteiro-5-dias",
    img: "/images/pack5.avif",
  },
];

export default function Packs({ ...rest }: PacksProps) {
  return (
    <div
      {...rest}
      className="flex flex-col w-full px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-20 h-full min-h-screen items-center justify-center py-8 sm:py-12 md:py-16 gap-6 sm:gap-8 md:gap-10"
    >
      <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-[#112126ff] uppercase font-bold font-bardon-stamp text-center">
        Pacotes
      </h1>
      <div className="grid w-full grid-cols-responsive-fit justify-center gap-6 sm:gap-8 md:gap-10 max-w-7xl">
        {roteirosData.map((roteiro, _) => (
          <CardPacks key={_} {...roteiro} />
        ))}
      </div>
    </div>
  );
}
