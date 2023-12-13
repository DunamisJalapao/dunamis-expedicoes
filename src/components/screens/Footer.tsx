"use client"
import { FaInstagram, FaTiktok, FaWhatsapp, FaYoutube } from 'react-icons/fa';

import useWindowDimensions from '@/hooks/useWindowDimensions';
import { NavBar } from "../NavBar";

export default function Footer() {

  const listIcons = [
    { icon: <FaWhatsapp />, route: 'https://api.whatsapp.com/send?phone=556392437096' },
    { icon: <FaInstagram />, route: 'https://www.instagram.com/dunamis_expedicoes/' },
    { icon: <FaTiktok />, route: 'https://www.tiktok.com/@dunamis_expedicoes' },
    { icon: <FaYoutube />, route: 'https://www.youtube.com/@dunamis_expedicoes' },
  ]
  const { width } = useWindowDimensions();

  if (width < 850) {
    return (
      <div className="flex w-full h-full px-4 py-4 items-center justify-center flex-col gap-10 color-[#0000006c] text-center">
        <div className="w-[35%] sm:w-[25%] relative">
          <img
            src='/assets/logo.png'
            alt="logo Dunamis Expedições"
          />
        </div>

        <div className='w-full'>

          <NavBar className="text-left text-black " isFooter={true} />
        </div>

        <div className="flex flex-col font-work-sans">
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
    <div className="flex w-full md:w-screen h-full md:h-[35vh] px-4 lg:px-20 2xl:px-52 py-12 md:py-0 items-center justify-around flex-col">
      <div className='flex w-full flex-col h-full items-center justify-center gap-5'>
        <div className="flex w-full uppercase gap-16 text-[4rem] font-bold items-center justify-center text-black">
          <NavBar className="hidden md:flex md:flex-[2] text-black 2xl:px-0 text-[1rem]" />

          <div className="flex flex-1 w-full md:w-[20%] justify-end">
            {listIcons.map((buttons, _) => (
              <a href={buttons.route} target="_blank" key={_}>
                <div className="flex cursor-pointer items-center justify-center text-3xl p-2 ml-6 border border-[#112126ff] rounded-full hover:scale-105 transition duration-100">
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

      <a className='mb-5' href="https://goo.gl/maps/fjZN2K3mieR7Jf368" target='_blank'>
        <p className='w-[full] font-bardon-stamp text-xs md:text-md'>Arse 23, Alameda 15, Plano Diretor Sul, Palmas - TO CEP: 77.020-574</p>
      </a>
    </div>
  )
}