
"use client"
import Image from 'next/image';
import { HTMLAttributes } from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

type HomeScreenType = HTMLAttributes<HTMLDivElement> & {}

export default function HomeScreen({ ...rest }: HomeScreenType) {
  return (
    <div {...rest} className="flex w-screen h-screen">
      <div className="flex w-full h-full px-[20px] 2xl:px-[220px] py-[13px] relative">
        <div className='flex flex-col gap-4 md:gap-10 lg:gap-16 mx-auto my-auto z-10 text-white items-center md:items-start font-bardon-stamp transition-all duration-100'>
          <h1 className='text-2xl xl:text-5xl justify-self-start'>Conheça as</h1>
          <h1 className='text-transparent text-4xl md:text-[4rem] xl:text-[6rem] font-bardon-clean text-stroke-mobile md:text-stroke'>
            Maravilhas
          </h1>
          <h1 className='text-xl md:text-2xl xl:text-4xl md:ml-auto text-center'>do Jalapão conosco</h1>
        </div>
        <div className='w-full absolute top-0 left-0'>
          <Carousel infiniteLoop interval={10000} showArrows={false} showIndicators={false} showThumbs={false} autoPlay>
            <div className="h-screen object-bottom">
              <Image
                src="/home1.png"
                alt="imagem home 01"
                sizes="100vw"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                }}
                width={1}
                height={1}
                loading='lazy'
              />
            </div>
            <div className="h-screen ">
              <Image
                src="/home2.jpeg"
                alt="imagem home 01"
                sizes="100vw"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  objectPosition: 'center'
                }}
                width={1}
                height={1}
                loading='lazy'
              />
            </div>
            <div className="h-screen">
              <Image
                src="/home3.png"
                alt="imagem home 01"
                sizes="100vw"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                }}
                width={1}
                height={1}
                loading='lazy'
              />
            </div>
          </Carousel>
        </div>
        <div className='absolute top-0 left-0 w-full h-full bg-[#11212671]' />
        {/* <p className="justify-center">Compartilhe momentos especiais com quem você ama</p> */}
      </div>
    </div>
  )
}