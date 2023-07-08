"use client"

import Link from "next/link";
import { HTMLAttributes } from "react";
import IconChecked from '../../public/assets/icon-checked.svg';

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
    <Link className="w-full h-full" href={doc} target="_blank" passHref>
      <div {...rest} className="flex rounded-xl flex-col overflow-hidden bg-white shadow-xl cursor-pointer duration-100 hover:scale-105">
        <div className="w-full h-[23rem] overflow-hidden">
          <img className='w-full h-full object-cover' src={img} alt="" />
        </div>
        <div className='flex px-4 h-[10rem] pt-4 pb-4 flex-col justify-between'>
          <div>
            <div className="flex">
              <p className="text-[#FF5A00] text-2xl font-bold">{title}</p>
            </div>
            <div className="flex items-center gap-2 text-xl">
              <IconChecked width="1rem" />
              <p>{duration}</p>
            </div>
          </div>
          <p className="text-[#FF5A00] text-md font-lemon-milk text-center justify-self-end">Saiba mais+</p>
        </div>

      </div>
    </Link>

  )
}