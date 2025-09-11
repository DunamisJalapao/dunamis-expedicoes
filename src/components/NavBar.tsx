"use client";
import { useUtils } from "@/hooks/utils";
import Link from "next/link";
import { HTMLAttributes, memo } from "react";
import { twMerge } from "tailwind-merge";

type NavBarProps = HTMLAttributes<HTMLDivElement> & {
  drawer?: boolean;
};

const NavBar = memo(function NavBar({ drawer = false, ...rest }: NavBarProps) {
  const { onToggle } = useUtils();
  return (
    <div
      {...rest}
      className={twMerge(
        "flex flex-col lg:flex-row h-full uppercase text-base lg:text-lg font-bold items-center text-white justify-around gap-2 lg:gap-4",
        rest.className
      )}
    >
      <Link
        onClick={() => onToggle(false)}
        data-drawer={drawer}
        className="w-full data-[drawer=true]:w-auto hover:scale-105 transition-transform duration-200"
        href="/#container-home"
      >
        <p
          data-drawer={drawer}
          className="pb-1 cursor-pointer select-none border-b border-b-[#00000022] lg:border-none data-[drawer=true]:border-b-0 hover:text-orange-300 transition-colors duration-200"
        >
          Início
        </p>
      </Link>
      <Link
        onClick={() => onToggle(false)}
        data-drawer={drawer}
        className="w-full data-[drawer=true]:w-auto hover:scale-105 transition-transform duration-200"
        href="/#container-pack"
      >
        <p
          data-drawer={drawer}
          className="pb-1 cursor-pointer select-none border-b border-b-[#00000022] lg:border-none data-[drawer=true]:border-b-0 hover:text-orange-300 transition-colors duration-200"
        >
          Roteiros
        </p>
      </Link>
      <Link
        onClick={() => onToggle(false)}
        data-drawer={drawer}
        className="w-full data-[drawer=true]:w-auto hover:scale-105 transition-transform duration-200"
        href="/#container-about"
      >
        <p
          data-drawer={drawer}
          className="pb-1 cursor-pointer select-none border-b border-b-[#00000022] lg:border-none data-[drawer=true]:border-b-0 hover:text-orange-300 transition-colors duration-200"
        >
          Sobre Nós
        </p>
      </Link>
      <Link
        onClick={() => onToggle(false)}
        data-drawer={drawer}
        className="w-full data-[drawer=true]:w-auto hover:scale-105 transition-transform duration-200"
        href="/#container-places"
      >
        <p
          data-drawer={drawer}
          className="pb-1 cursor-pointer select-none border-b border-b-[#00000022] lg:border-none data-[drawer=true]:border-b-0 hover:text-orange-300 transition-colors duration-200"
        >
          Atrativos
        </p>
      </Link>
      <Link
        onClick={() => onToggle(false)}
        data-drawer={drawer}
        className="w-full data-[drawer=true]:w-auto hover:scale-105 transition-transform duration-200"
        href="/#container-gallery"
      >
        <p className="pb-1 cursor-pointer select-none border-b border-b-[#00000022] lg:border-none data-[drawer=true]:border-b-0 hover:text-orange-300 transition-colors duration-200">
          Galeria
        </p>
      </Link>
    </div>
  );
});

export { NavBar };
