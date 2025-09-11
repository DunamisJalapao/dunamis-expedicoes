import { photos } from "@/database/photos";
import Image from "next/image";
import { HTMLAttributes } from "react";

type ItinerariesType = HTMLAttributes<HTMLDivElement> & {};
export default function Gallery({ ...rest }: ItinerariesType) {
  return (
    <div {...rest} className="flex w-full md:w-screen h-full md:h-screen py-8">
      <div className="flex w-full h-full pt-4 md:pt-10 pb-8 md:pb-10 flex-col bg-[#F8F8F8] gap-5">
        <div className="flex px-5 md:px-20 flex-col font-bold">
          <p className="font-bardon-clean text-3xl">Galeria</p>
        </div>
        <div className="flex h-full justify-center flex-col gap-2">
          <div className="flex w-full gap-2 animate-right-roll">
            {photos.map((photos, index) => (
              <div
                key={index}
                className={`flex min-w-[150px] md:min-w-[350px] h-[150px] md:h-[250px] bg-cover rounded-xl overflow-hidden`}
              >
                <Image
                  src={photos}
                  alt={`photo-gallery-${index}`}
                  sizes="100vw"
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                  }}
                  width={1}
                  height={1}
                />
              </div>
            ))}
          </div>
          <div className="flex w-full gap-2 animate-left-roll">
            {photos.map((photos, index) => (
              <div
                key={index}
                className={`flex min-w-[150px] md:min-w-[350px] h-[150px] md:h-[250px] bg-cover rounded-xl overflow-hidden`}
              >
                <Image
                  src={photos}
                  alt={`photo-gallery-${index}`}
                  sizes="100vw"
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                  }}
                  width={1}
                  height={1}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
