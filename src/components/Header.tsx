'use client'
import { HTMLAttributes, useEffect, useState } from "react";
import { CgMenuRight } from 'react-icons/cg';
import { FaInstagram, FaTiktok, FaWhatsapp, FaYoutube } from "react-icons/fa";
// import { DraweComponent } from "./DrawerComponent";
import { useUtils } from "@/hooks/utils";
import Image from "next/image";
import { NavBar } from "./NavBar";

type HeaderProps = HTMLAttributes<HTMLDivElement> & {}

const listIcons = [
  { icon: <FaWhatsapp />, route: 'https://api.whatsapp.com/send?phone=556392437096' },
  { icon: <FaInstagram />, route: 'https://www.instagram.com/dunamis_expedicoes/' },
  { icon: <FaTiktok />, route: 'https://www.tiktok.com/@dunamis_expedicoes' },
  { icon: <FaYoutube />, route: 'https://www.youtube.com/@dunamis_expedicoes' },
]

export function Header({ ...rest }: HeaderProps) {
  const [color, _setColor] = useState(true)

  const { onToggle } = useUtils();

  const handleScrollWindow = () => {
    const position = window.scrollY;
    return position <= 100 ? _setColor(true) : _setColor(false);

  }

  useEffect(() => {
    window.addEventListener('scroll', handleScrollWindow)
    return () => {
      window.removeEventListener('scroll', handleScrollWindow);
    }

  }, []);

  return (
    <div className={`${color ? 'bg-[rgba(255,255,255,0.2)]' : 'bg-[#112126a8]'} flex w-full h-[5rem] shadow-lg rounded-2xl backdrop-filter backdrop-blur px-[0.5rem] 2xl:px-[4rem] items-center transition`}>

      <div className="flex flex-1 ">
        <Image
          src="/assets/logo.png"
          alt="imagem home 01"
          sizes="50vw"
          style={{
            width: '50%',
            height: '100%',
          }}
          width={1}
          height={1}
        />
      </div>

      <div className="flex md:hidden flex-1 justify-end" onClick={() => onToggle()}>
        <CgMenuRight className="text-white text-4xl" />
      </div>
      <div className="w-full hidden md:flex flex-[5]">
        <div className="w-full  pt-1">
          <NavBar className="text-md text-center justify-center" />
        </div>
        <div className="flex w-full items-center flex-1 justify-end">
          {listIcons.map((buttons, _) => (
            <a href={buttons.route} target="_blank" key={_}>
              <div className="flex cursor-pointer p-1 pr-3 text-white text-xl rounded-full hover:scale-105">
                {buttons.icon}
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  )
}