
import { HTMLAttributes } from 'react';
import { useMediaQueryUI } from '../Chakra-UI';
import { SlideShow } from "../SlideShow";

type HomeScreenType = HTMLAttributes<HTMLDivElement> & {}

export default function HomeScreen({ ...rest }: HomeScreenType) {
  const isMobile = useMediaQueryUI('(max-width: 820px)')
  return (
    <div {...rest} className="flex w-screen h-screen">
      <div className="flex w-full h-screen px-[20px] 2xl:px-[220px] py-[13px] relative">
        <div className='flex flex-col mx-auto my-auto z-10 text-white items-center md:items-start font-lemon-milk transition-all duration-100'>
          <h1 className='text-3xl xl:text-5xl justify-self-start'>Conheça as</h1>
          <h1
            style={{
              WebkitTextStroke: `${isMobile ? '3px' : '6px'} #fff`,
            }}
            className='text-transparent text-5xl md:text-8xl xl:text-[10rem]'
          >
            Maravilhas
          </h1>
          <h1 className='text-2xl xl:text-4xl md:ml-auto'>do Jalapão conosco</h1>
        </div>
        <SlideShow className="w-full absolute left-0 top-0">
          <img
            src="/home1.png"
            alt="image 1"
            className="h-full w-full object-cover"
          />
          <img
            src="/home2.png"
            alt="image 1"
            className="h-full w-full object-cover"
          />
          <img
            src="/home3.png"
            alt="image 1"
            className="h-full w-full object-cover"
          />
        </SlideShow>
        <div className='absolute top-0 left-0 w-full h-full bg-[#11212671]' />
        {/* <p className="justify-center">Compartilhe momentos especiais com quem você ama</p> */}
      </div>
    </div>
  )
}