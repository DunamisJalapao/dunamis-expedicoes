"use client";
import {
  HTMLAttributes,
  memo,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from "react";
import { CgMenuRight } from "react-icons/cg";
import { FaInstagram, FaTiktok, FaWhatsapp, FaYoutube } from "react-icons/fa";
// import { DraweComponent } from "./DrawerComponent";
import { useUtils } from "@/hooks/utils";
import { throttleRAF } from "@/lib/performance-utils";
import Image from "next/image";
import { NavBar } from "./NavBar";

type HeaderProps = HTMLAttributes<HTMLDivElement> & {};

function HeaderComponent({ ...rest }: HeaderProps) {
  const [color, _setColor] = useState(true);

  const { onToggle } = useUtils();

  // Usar useMemo para estabilizar a referência dos ícones
  const listIcons = useMemo(
    () => [
      {
        Icon: FaWhatsapp,
        route: "https://api.whatsapp.com/send?phone=556392437096",
      },
      {
        Icon: FaInstagram,
        route: "https://www.instagram.com/dunamis_expedicoes/",
      },
      { Icon: FaTiktok, route: "https://www.tiktok.com/@dunamis_expedicoes" },
      { Icon: FaYoutube, route: "https://www.youtube.com/@dunamis_expedicoes" },
    ],
    []
  );

  // Scroll handler otimizado com throttleRAF
  // Executa no máximo 1x por frame (~16ms @ 60fps)
  const handleScrollWindow = useCallback(
    throttleRAF(() => {
      const position = window.scrollY;
      _setColor(position <= 100);
    }),
    []
  );

  useEffect(() => {
    // Passive listener para scroll não bloqueante
    window.addEventListener("scroll", handleScrollWindow, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScrollWindow);
    };
  }, [handleScrollWindow]);

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

      <button
        className="flex lg:hidden flex-1 justify-end cursor-pointer"
        onClick={() => onToggle()}
        aria-label="Abrir menu"
        type="button"
      >
        <CgMenuRight className="text-white text-2xl sm:text-3xl lg:text-4xl hover:scale-110 transition-transform duration-200 active:scale-95" />
      </button>
      <div className="w-full hidden lg:flex flex-[5]">
        <div className="w-full pt-1">
          <NavBar className="text-sm xl:text-base text-center justify-center" />
        </div>
        <div className="flex w-full items-center flex-1 justify-end gap-1 xl:gap-2">
          {listIcons.map((buttons, index) => (
            <a
              href={buttons.route}
              target="_blank"
              key={index}
              rel="noopener noreferrer"
            >
              <div className="flex cursor-pointer p-1 sm:p-2 text-white text-lg xl:text-xl rounded-full hover:scale-110 transition-all duration-200 hover:bg-white/10">
                <buttons.Icon />
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}

const Header = memo(HeaderComponent);

Header.displayName = "Header";

export { Header };
