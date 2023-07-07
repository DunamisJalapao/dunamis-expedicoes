"use client"

import { getAttractivies } from "@/sanity/sanity-utils";
import { Attractivie } from "@/types";
import { Flex, FlexProps, SimpleGrid, Text } from "@chakra-ui/react";
import { HtmlHTMLAttributes, useEffect, useState } from "react";
import { CardPlaces } from "../CardPlaces";

type PackType = HtmlHTMLAttributes<HTMLDivElement> & {}

export default function Places({ ...rest }: PackType) {
  const [dataCard, setDataCard] = useState<Attractivie[]>([] as Attractivie[]);
  console.log("dataCard =>", dataCard);

  const search = async () => {
    const response = await getAttractivies();
    setDataCard(response)
  }

  useEffect(() => {
    search();
  }, [])

  return (
    <div {...rest} className="w-full md:w-screen h-full md:h-[80vh] bg-white">
      <div className="w-full h-full py-5 md:py-[4rem] justify-center flex-col gap-3">
        <p className="text-center text-2xl md:text-5xl text-[#112126ff] font-bold font-lato">Encontre os lugares <br /> para se apaixonar</p>
        <div className="flex justify-center w-full h-full items-center px-5 gap-6">
          {dataCard.map((card, _) => (
            <CardPlaces key={_} card={card} />
          ))}
        </div>
      </div>

    </div>

  )
}