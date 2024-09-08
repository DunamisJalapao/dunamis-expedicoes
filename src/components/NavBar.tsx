"use client";
import { useUtils } from "@/hooks/utils";
import Link from "next/link";
import { HTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";

type NavBarProps = HTMLAttributes<HTMLDivElement> & {
  drawer?: boolean;
};

export function NavBar({ drawer = false, ...rest }: NavBarProps) {
  const { onToggle } = useUtils();
  return (
    <div
      {...rest}
      className={twMerge(
        "flex flex-col md:flex-row h-full uppercase text-lg font-bold items-center text-white justify-around",
        rest.className
      )}
    >
      <Link
        onClick={() => onToggle(false)}
        data-drawer={drawer}
        className="w-full data-[drawer=true]:w-auto"
        href="/#container-home"
      >
        <p
          data-drawer={drawer}
          className="pb-1 cursor-pointer select-none border-b border-b-[#00000022] md:border-none data-[drawer=true]:border-b-0"
        >
          Início
        </p>
      </Link>
      <Link
        onClick={() => onToggle(false)}
        data-drawer={drawer}
        className="w-full data-[drawer=true]:w-auto"
        href="/#container-pack"
      >
        <p
          data-drawer={drawer}
          className="pb-1 cursor-pointer select-none border-b border-b-[#00000022] md:border-none data-[drawer=true]:border-b-0"
        >
          Roteiros
        </p>
      </Link>
      <Link
        onClick={() => onToggle(false)}
        data-drawer={drawer}
        className="w-full data-[drawer=true]:w-auto"
        href="/#container-about"
      >
        <p
          data-drawer={drawer}
          className="pb-1 cursor-pointer select-none border-b border-b-[#00000022] md:border-none data-[drawer=true]:border-b-0"
        >
          Sobre Nós
        </p>
      </Link>
      <Link
        onClick={() => onToggle(false)}
        data-drawer={drawer}
        className="w-full data-[drawer=true]:w-auto"
        href="/#container-places"
      >
        <p
          data-drawer={drawer}
          className="pb-1 cursor-pointer select-none border-b border-b-[#00000022] md:border-none data-[drawer=true]:border-b-0"
        >
          Atrativos
        </p>
      </Link>
      <Link
        onClick={() => onToggle(false)}
        data-drawer={drawer}
        className="w-full data-[drawer=true]:w-auto"
        href="/gallery"
      >
        <p className="pb-1 cursor-pointer select-none border-b border-b-[#00000022] md:border-none data-[drawer=true]:border-b-none">
          Galeria
        </p>
      </Link>
    </div>
  );
}
