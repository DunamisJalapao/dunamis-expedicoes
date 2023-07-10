"use client"

import { getAbout } from "@/sanity/sanity-utils";
import { About } from "@/types";
import { PortableText } from "@portabletext/react";
import Image from 'next/image';
import { HTMLAttributes, useEffect, useState } from "react";
import { Fade } from "react-awesome-reveal";

type AboutType = HTMLAttributes<HTMLDivElement> & {}

export default function AboutScreen({ ...rest }: AboutType) {
  const [aboutObj, setAboutObj] = useState<About>({} as About);

  const search = async () => {
    const response = await getAbout();
    console.log("response =>", response[0])
    setAboutObj(response[0]);
  }

  useEffect(() => {
    search();
  }, [])

  return (
    <div {...rest} className="flex flex-col items-center md:justify-center w-full md:w-screen h-full md:h-screen bg-[#f8f8f8]">
      <h1 className="mt-5 md:mt-0 mb-5 md:mb-0 items-center text-4xl md:text-5xl text-[#112126ff] uppercase font-bold font-lemon-milk">Sobre nós</h1>
      <div className="flex mt-0 md:mt-14 px-0 sm:px-14 2xl:px-96 gap-5 md:gap-10 w-full items-center flex-col md:flex-row">
        <div className="flex z-10 w-[20rem] md:w-[50rem] h-[20rem] md:h-[40rem] rounded-[25px] overflow-hidden shadow-[0px_58px_50px_-27px_#d2b597,0px_8px_100px_13px_#00000003]">
          <Fade className="w-full relative" triggerOnce>
            <Image
              src={aboutObj.image}
              alt="image about"
              fill
              className="object-cover"
            />
          </Fade>
        </div>
        <div className="flex z-0 w-[20rem] md:w-[50rem] h-[20rem] md:h-[40rem] text-justify md:text-left">
          <Fade direction="left" delay={500} triggerOnce>
            <div className="text-md md:text-xl xl:text-2xl">
              <PortableText value={aboutObj.description} />
            </div>
          </Fade>
        </div>
      </div>
    </div>
  )
}