
import { getPhotos } from "@/sanity/sanity-utils";
import Link from "next/link";
import { HTMLAttributes, useEffect, useState } from "react";

type ItinerariesType = HTMLAttributes<HTMLDivElement> & {}
export default function Gallery({ ...rest }: ItinerariesType) {
  const [photosGallery, setphotosGallery] = useState<string[]>([] as string[]);

  const search = async () => {
    const response = await getPhotos();
    if (response.length > 0) {
      response[0].images.map(image => {
        if (!photosGallery.includes(image.url)) setphotosGallery(prev => [...prev, image.url])
      })
    }
  }

  useEffect(() => {
    search();
  }, [])

  return (
    <Link href="/gallery">
      <div {...rest} className="flex w-full md:w-screen h-full md:h-screen py-8">
        <div className="flex w-full h-full pt-4 md:pt-10 pb-8 md:pb-10 flex-col bg-[#F8F8F8] gap-5">
          <div className="flex px-5 md:px-20 flex-col font-bold">
            <p className="font-lato text-5xl">Galeria</p>
          </div>
          <div className="flex h-full justify-center flex-col gap-2">
            <div className="flex w-full gap-2 animate-right-roll">
              {photosGallery.map((photos, index) => (
                <div key={index} className={`flex min-w-[150px] md:min-w-[350px] h-[150px] md:h-[250px] bg-cover rounded-xl overflow-hidden`}>
                  <img className="w-full object-cover" src={photos} alt={`photo-gallery-${index}`} />
                </div>
              ))}
            </div>
            <div className="flex w-full gap-2 animate-left-roll">
              {photosGallery.map((photos, index) => (
                <div key={index} className={`flex min-w-[150px] md:min-w-[350px] h-[150px] md:h-[250px] bg-cover rounded-xl overflow-hidden`}>
                  <img className="w-full object-cover" src={photos} alt={`photo-gallery-${index}`} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Link>

  )
}