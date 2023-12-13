
import Link from "next/link";
import { HTMLAttributes } from "react";

const photos = [
  '/assets/imgs/gallery/img1.png',
  '/assets/imgs/gallery/img2.jpg',
  '/assets/imgs/gallery/img3.jpg',
  '/assets/imgs/gallery/img4.jpg',
  '/assets/imgs/gallery/img5.jpg',
  '/assets/imgs/gallery/img6.jpg',
  '/assets/imgs/gallery/img7.jpg',
  '/assets/imgs/gallery/img8.jpg',
  '/assets/imgs/gallery/img9.jpg',
  '/assets/imgs/gallery/img10.jpg',
  '/assets/imgs/gallery/img11.jpg',
  '/assets/imgs/gallery/img12.jpg',
  '/assets/imgs/gallery/img13.jpg',
  '/assets/imgs/gallery/img14.jpg',
  '/assets/imgs/gallery/img15.jpg',
  '/assets/imgs/gallery/img16.jpg',
  '/assets/imgs/gallery/img17.jpg',
  '/assets/imgs/gallery/img18.jpg',
  '/assets/imgs/gallery/img19.jpg',
  '/assets/imgs/gallery/img20.jpg',
]

type ItinerariesType = HTMLAttributes<HTMLDivElement> & {}
export default function Gallery({ ...rest }: ItinerariesType) {

  return (
    <Link href="/gallery">
      <div {...rest} className="flex w-full md:w-screen h-full md:h-screen py-8">
        <div className="flex w-full h-full pt-4 md:pt-10 pb-8 md:pb-10 flex-col bg-[#F8F8F8] gap-5">
          <div className="flex px-5 md:px-20 flex-col font-bold">
            <p className="font-work-sans text-5xl">Galeria</p>
          </div>
          <div className="flex h-full justify-center flex-col gap-2">
            <div className="flex w-full gap-2 animate-right-roll">
              {photos.map((photos, index) => (
                <div key={index} className={`flex min-w-[150px] md:min-w-[350px] h-[150px] md:h-[250px] bg-cover rounded-xl overflow-hidden`}>
                  <img className="w-full object-cover" src={photos} alt={`photo-gallery-${index}`} />
                </div>
              ))}
            </div>
            <div className="flex w-full gap-2 animate-left-roll">
              {photos.map((photos, index) => (
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