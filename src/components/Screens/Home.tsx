
import { HTMLAttributes } from 'react';
import { SlideShow } from "../SlideShow";

type HomeScreenType = HTMLAttributes<HTMLDivElement> & {}

export default function HomeScreen({ ...rest }: HomeScreenType) {
  return (
    <div {...rest} className="flex w-screen h-screen">
      <div className="flex w-full h-screen px-[20px] 2xl:px-[220px] py-[13px] relative">
        <div className='flex flex-col mx-auto my-auto z-10 gap-5 font-lemon-milk drop-shadow-lg'>
          <h1 className='text-5xl text-white justify-self-start'>Conheça as</h1>
          <h1
            style={{
              WebkitTextStroke: '3px #fff'
            }}
            className='text-9xl  text-transparent'
          >
            Maravilhas
          </h1>
          <h1 className='text-4xl text-white ml-auto'>do Jalapão conosco</h1>
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
        {/* <p className="justify-center">Compartilhe momentos especiais com quem você ama</p> */}
      </div>
    </div>
  )
}