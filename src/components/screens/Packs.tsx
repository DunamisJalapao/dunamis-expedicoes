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
    img: "/pack3.jpg",
  },
  {
    title: "ROTEIRO 4 DIAS",
    duration: "4 dias e 3 noites",
    foods: "Alimento incluso",
    hotel: "Hospedagem inclusa",
    doc: "/packs/roteiro-4-dias",
    img: "/pack4.jpg",
  },
  {
    title: "ROTEIRO 5 DIAS",
    duration: "5 dias e 4 noites",
    foods: "Alimento incluso",
    hotel: "Hospedagem inclusa",
    doc: "/packs/roteiro-5-dias",
    img: "/pack5.jpg",
  },
];

export default function Packs({ ...rest }: PacksProps) {
  return (
    <div
      {...rest}
      className="flex flex-col w-full px-[20px] lg:w-screen h-full 2xl:h-[90dvh] items-center justify-center py-10 gap-10"
    >
      <h1 className="mt-5 md:mt-0 mb-5 md:mb-0 text-2xl md:text-3xl text-[#112126ff] uppercase font-bold font-bardon-stamp">
        Pacotes
      </h1>
      <div className="grid w-full grid-cols-resposive-fit justify-center gap-10">
        {roteirosData.map((roteiro, _) => (
          <CardPacks key={_} {...roteiro} />
        ))}
      </div>
    </div>
  );
}
