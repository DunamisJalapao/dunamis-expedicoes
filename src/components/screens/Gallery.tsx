import { photos } from "@/database/photos";
import Image from "next/image";
import { HTMLAttributes } from "react";

type ItinerariesType = HTMLAttributes<HTMLDivElement> & {};

export default function Gallery({ ...rest }: ItinerariesType) {
  return (
    <div
      {...rest}
      className="flex w-full h-full md:min-h-screen py-8 sm:py-12 md:py-16"
    >
      <div className="flex w-full h-full pt-4 sm:pt-6 md:pt-8 lg:pt-10 pb-8 sm:pb-10 md:pb-12 lg:pb-16 flex-col bg-[#F8F8F8] gap-4 sm:gap-6 md:gap-8">
        <div className="flex px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 flex-col font-bold">
          <p className="font-bardon-clean text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-[#112126ff]">
            Galeria
          </p>
        </div>
        <div className="flex h-full justify-center flex-col gap-2 sm:gap-3 md:gap-4 overflow-hidden">
          <div className="flex w-full gap-2 sm:gap-3 md:gap-4 animate-right-roll">
            {photos.map((photo, index) => (
              <div
                key={`right-${index}`}
                className="flex min-w-[120px] sm:min-w-[150px] md:min-w-[200px] lg:min-w-[250px] xl:min-w-[300px] h-[120px] sm:h-[150px] md:h-[200px] lg:h-[250px] xl:h-[300px] bg-cover rounded-lg sm:rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <Image
                  src={photo}
                  alt={`Galeria Dunamis Expedições - Foto ${index + 1}`}
                  sizes="(max-width: 640px) 120px, (max-width: 1024px) 200px, 300px"
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                  }}
                  width={300}
                  height={300}
                  className="hover:scale-110 transition-transform duration-300"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
          <div className="flex w-full gap-2 sm:gap-3 md:gap-4 animate-left-roll">
            {photos.map((photo, index) => (
              <div
                key={`left-${index}`}
                className="flex min-w-[120px] sm:min-w-[150px] md:min-w-[200px] lg:min-w-[250px] xl:min-w-[300px] h-[120px] sm:h-[150px] md:h-[200px] lg:h-[250px] xl:h-[300px] bg-cover rounded-lg sm:rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <Image
                  src={photo}
                  alt={`Galeria Dunamis Expedições - Foto ${index + 1}`}
                  sizes="(max-width: 640px) 120px, (max-width: 1024px) 200px, 300px"
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                  }}
                  width={300}
                  height={300}
                  className="hover:scale-110 transition-transform duration-300"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
