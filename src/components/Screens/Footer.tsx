"use client"

import { FaInstagram, FaTiktok, FaWhatsapp, FaYoutube } from 'react-icons/fa';

import { useMediaQuery } from '@chakra-ui/react';
import { NavBar } from "../NavBar";

// ARRUMAR O FOOTER QUE NEM O DO VERCEL

export default function Footer() {
  const [isMobile] = useMediaQuery("(max-width: 820px)");

  const listIcons = [
    { icon: <FaWhatsapp />, route: 'https://api.whatsapp.com/send?phone=556392437096' },
    { icon: <FaInstagram />, route: 'https://www.instagram.com/dunamis_expedicoes/' },
    { icon: <FaTiktok />, route: 'https://www.tiktok.com/@dunamis_expedicoes' },
    { icon: <FaYoutube />, route: 'https://www.youtube.com/@dunamis_expedicoes' },
  ]

  if (isMobile) {
    return (
      <div className="flex w-full h-full px-4 py-4 items-center justify-center flex-col gap-10 color-[#0000006c] text-center">
        <div className="w-[35%] sm:w-[25%] relative">
          <img
            src='/assets/logo.png'
            alt="logo Dunamis Expedições"
          />
        </div>

        <NavBar className="text-left text-black" isFooter={true} />

        <div className="flex flex-col font-lato">
          <p>© Todos os direitos reservados</p>
          <p>Dunamis Expedições</p>
        </div>
        <div className="flex w-1/2 text-xl justify-between">
          {listIcons.map((buttons, _) => (
            <a href={buttons.route} target="_blank" key={_}>
              <div className="flex cursor-pointer p-1 pr-3 border-2 border-[#112126ff] rounded-full hover:scale-105">
                {buttons.icon}
              </div>
            </a>
          ))}
        </div>

        <div className="flex flex-1 flex-col">
          <p>Design and Develop</p>
          <p>João Vitor Soares</p>
        </div>
      </div>
    )
  }

  return (
    <div className="flex w-full md:w-screen h-full md:h-[30vh] px-4 lg:px-20 xl:px-52 py-12 md:py-0 items-center justify-center flex-col gap-5">
      <div className="flex w-full uppercase gap-16 text-[4rem] font-bold items-center justify-center text-black">
        <div className="hidden md:flex md:flex-[2]">
          <NavBar className="text-black justify-items-start" />
        </div>

        <div className="flex flex-1 w-full md:w-[20%] justify-end">
          {listIcons.map((buttons, _) => (
            <a href={buttons.route} target="_blank" key={_}>
              <div className="flex cursor-pointer text-3xl p-2 ml-6 border border-[#112126ff] rounded-full hover:scale-105 transition duration-100">
                {buttons.icon}
              </div>
            </a>
          ))}
        </div>
      </div>

      <div className="border border-[#000000a1] w-[105%]" />

      <div className="flex flex-col md:flex-row w-full items-center justify-between font-bold">
        <div className="flex flex-1 flex-col text-center md:text-left">
          <p>© Todos os direitos reservados</p>
          <p>Dunamis Expedições</p>
        </div>

        <div className="flex flex-1 justify-center">
          <div className="flex relative items-center justify-center w-full">
            <img className="w-[25%]" src="/assets/logo.png" alt="logo Dunamis Expedições" />
          </div>
        </div>

        <div className="flex flex-1 flex-col text-right">
          <p>Design and Develop</p>
          <p>João Vitor Soares</p>
        </div>
      </div>
    </div>

  )
}