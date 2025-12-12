"use client";

import Image from "next/image";
import Link from "next/link";
import { HTMLAttributes, memo } from "react";
import IconChecked from "../../public/assets/icon-checked.svg";

type CardPacksType = HTMLAttributes<HTMLDivElement> & {
  title: string;
  duration: string;
  foods: string;
  hotel: string;
  doc: string;
  img: string;
};

const CardPacks = memo(function CardPacks({
  duration,
  foods,
  hotel,
  img,
  title,
  doc,
  ...rest
}: CardPacksType) {
  return (
    <Link className="w-full min-w-[300px] h-full" href={doc}>
      <div
        {...rest}
        className="flex rounded-xl flex-col overflow-hidden bg-white shadow-xl cursor-pointer duration-100 hover:scale-105"
      >
        <div className="w-full h-[23rem] overflow-hidden">
          <Image
            src={img}
            alt={`${title} - Dunamis Expedições`}
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
            }}
            width={400}
            height={300}
            loading="lazy"
            quality={95}
            placeholder="blur"
            blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
          />
        </div>
        <div className="flex px-4 h-[10rem] pt-4 pb-4 flex-col justify-between">
          <div>
            <div className="flex">
              <p className="text-[#FF5A00] text-lg font-bold font-bardon-clean">
                {title}
              </p>
            </div>
            <div className="flex items-center gap-2 text-xl mt-2">
              <IconChecked width="1rem" />
              <p className="font-work-sans">{duration}</p>
            </div>
          </div>
          <p className="text-[#FF5A00] text-sm font-bardon-stamp text-center justify-self-end">
            Saiba mais+
          </p>
        </div>
      </div>
    </Link>
  );
});

export { CardPacks };
