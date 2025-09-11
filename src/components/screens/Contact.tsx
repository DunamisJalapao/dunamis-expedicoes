import { HTMLAttributes } from "react";
import { ButtonPrimary } from "../ButtonPrimary";

type ContactType = HTMLAttributes<HTMLDivElement> & {};

export default function Contact({ ...rest }: ContactType) {
  return (
    <div className="flex w-screen h-[40vh] sm:h-[70vh] md:h-[80vh] flex-col relative">
      <div
        {...rest}
        className="flex w-full h-full bg-green-100 bg-[url(/bg.jpeg)] bg-cover bg-center lg:bg-fixed bg-no-repeat"
      />
      <div className="flex w-full h-full bg-[#2E5C2EC7] flex-col items-center justify-center text-white font-work-sans text-center px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 gap-6 sm:gap-8 md:gap-10 lg:gap-12 absolute">
        <p className="font-work-sans font-semibold text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl leading-tight">
          Ficou com alguma dúvida?
        </p>
        <ButtonPrimary className="w-[12rem] sm:w-[14rem] md:w-[16rem] lg:w-[18rem] h-[3rem] sm:h-[3.5rem] md:h-[4rem] lg:h-[4.5rem] text-sm sm:text-base md:text-lg lg:text-xl" />
        <p className="font-blue-dream text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl leading-tight max-w-4xl">
          Viagens que rendem boas histórias
        </p>
      </div>
    </div>
  );
}
