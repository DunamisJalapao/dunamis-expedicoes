
import { HTMLAttributes } from "react";
import { ButtonPrimary } from "../ButtonPrimary";

type ContactType = HTMLAttributes<HTMLDivElement> & {}

export default function Contact({ ...rest }: ContactType) {
  return (

    <div className="flex w-screen h-[60vh] flex-col relative">
      <div {...rest} className="flex w-full h-full bg-green-100 bg-[url(/bg.jpeg)] bg-cover bg-center lg:bg-fixed bg-no-repeat" />
      <div className="flex w-full h-full bg-[#2E5C2EC7] flex-col items-center justify-center text-white font-lato text-[24px] md:text-[46px] text-center px-4 gap-10 absolute">
        <p>Ficou com alguma dúvida?</p>
        <p>Viajar é viver, venha conosco!</p>
        <ButtonPrimary className="w-[16rem] h-[4rem]" />
      </div>
    </div>

  )
}