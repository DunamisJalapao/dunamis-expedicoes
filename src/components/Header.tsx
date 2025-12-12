"use client";
import { HTMLAttributes, memo, useCallback, useEffect, useState } from "react";
import { CgMenuRight } from "react-icons/cg";
import { FaInstagram, FaTiktok, FaWhatsapp, FaYoutube } from "react-icons/fa";
// import { DraweComponent } from "./DrawerComponent";
import { useUtils } from "@/hooks/utils";
import Image from "next/image";
import { NavBar } from "./NavBar";

type HeaderProps = HTMLAttributes<HTMLDivElement> & {};

const listIcons = [
  {
    icon: <FaWhatsapp />,
    route: "https://api.whatsapp.com/send?phone=556392437096",
  },
  {
    icon: <FaInstagram />,
    route: "https://www.instagram.com/dunamis_expedicoes/",
  },
  { icon: <FaTiktok />, route: "https://www.tiktok.com/@dunamis_expedicoes" },
  { icon: <FaYoutube />, route: "https://www.youtube.com/@dunamis_expedicoes" },
];

const Header = memo(function Header({ ...rest }: HeaderProps) {
  const [color, _setColor] = useState(true);

  const { onToggle } = useUtils();

  useEffect(() => {
    // Throttle scroll events using requestAnimationFrame for better performance
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          const position = window.scrollY;
          _setColor(position <= 100);
          ticking = false;
        });
        ticking = true;
      }
    };

    // Use passive listener for better performance
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`${
        color ? "bg-[rgba(255,255,255,0.2)]" : "bg-[#112126a8]"
      } flex w-full h-16 sm:h-20 lg:h-24 shadow-lg rounded-xl sm:rounded-2xl backdrop-filter backdrop-blur px-2 sm:px-4 lg:px-8 xl:px-16 2xl:px-20 items-center transition-all duration-300`}
    >
      <div className="flex flex-1 min-w-0">
        <Image
          src="/assets/logo-white.webp"
          alt="Dunamis Expedições Logo"
          sizes="(max-width: 640px) 120px, (max-width: 1024px) 150px, 200px"
          className="w-auto h-8 sm:h-10 lg:h-12 object-contain"
          width={200}
          height={60}
          priority
        />
      </div>

      <div
        className="flex lg:hidden flex-1 justify-end"
        onClick={() => onToggle()}
      >
        <CgMenuRight className="text-white text-2xl sm:text-3xl lg:text-4xl hover:scale-110 transition-transform duration-200" />
      </div>
      <div className="w-full hidden lg:flex flex-[5]">
        <div className="w-full pt-1">
          <NavBar className="text-sm xl:text-base text-center justify-center" />
        </div>
        <div className="flex w-full items-center flex-1 justify-end gap-1 xl:gap-2">
          {listIcons.map((buttons, _) => (
            <a
              href={buttons.route}
              target="_blank"
              key={_}
              rel="noopener noreferrer"
            >
              <div className="flex cursor-pointer p-1 sm:p-2 text-white text-lg xl:text-xl rounded-full hover:scale-110 transition-all duration-200 hover:bg-white/10">
                {buttons.icon}
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
});

export { Header };
