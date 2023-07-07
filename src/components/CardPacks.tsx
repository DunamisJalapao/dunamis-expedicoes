"use client"

import IconChecked from '../../public/assets/icon-checked.svg'
import Link from "next/link";
import { HTMLAttributes } from "react";

type CardPacksType = HTMLAttributes<HTMLDivElement> & {
  title: string,
  duration: string,
  foods: string,
  hotel: string,
  doc: string,
  img: string,
}

export function CardPacks({ duration, foods, hotel, img, title, doc, ...rest }: CardPacksType) {
  return (
    <Link href={doc} target="_blank" passHref>
      <div {...rest} className="flex w-[25rem] h-[25rem] rounded-xl flex-col overflow-hidden bg-white shadow-xl cursor-pointer duration-100 hover:scale-105">
        <div className="w-full h-[25rem] overflow-hidden">
          <img className='w-full h-full object-cover' src={img} alt="" />
        </div>
        <div className='flex px-4 pt-4 pb-4 flex-col h-full justify-between'>
          <div className="flex">
            <p className="text-[#FF5A00] text-2xl font-bold">{title}</p>
          </div>
          <div className="flex flex-col ">
            <p className="text-[#2E5C2E] font-lemon-milk uppercase">Informações</p>
            <div className="flex items-center gap-2">
              <IconChecked width="1rem" />
              <p>{duration}</p>
            </div>
            <div className="flex items-center gap-2">
              <IconChecked width="1rem" />
              <p>{foods}</p>
            </div>
            <div className="flex items-center gap-2">
              <IconChecked width="1rem" />
              <p>{hotel}</p>
            </div>
          </div>
          <p className="text-[#FF5A00] text-md font-lemon-milk text-center">Saiba mais+</p>
        </div>

      </div>
    </Link>

  )
}