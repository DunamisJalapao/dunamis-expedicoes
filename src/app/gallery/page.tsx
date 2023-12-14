"use client"

import { photos } from "@/database/photos";
import Image from "next/image";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";

export default function Gallery() {
  return (
    <div className="flex w-screen h-screen overflow-x-hidden">
      <div className="flex w-full h-full py-10 flex-col gap-5">
        <div className="flex px-5 md:px-10 flex-col font-bold">
          <p className="font-lato text-4xl">Galeria</p>
          {/* <p>Pequeno parágrafo para a galeria</p> */}
        </div>

        <div className="flex justify-center px-5 md:px-10 flex-col">
          <ResponsiveMasonry
            columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}
          >
            <Masonry gutter="10px">
              {photos.map(photo => (

                <Image
                  src={photo}
                  alt="imagens da galeria"
                  sizes="500px"
                  width={600}
                  height={600}
                  quality={0}
                  style={{
                    objectFit: 'contain',
                  }}
                />
              ))}
            </Masonry>
          </ResponsiveMasonry>
        </div>
      </div>
    </div >
  )
}