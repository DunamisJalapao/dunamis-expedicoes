
import { HTMLAttributes } from 'react';
import { Header } from "../Header";
import { SlideShow } from "../SlideShow";

type HomeScreenType = HTMLAttributes<HTMLDivElement> & {}

export default function HomeScreen({ ...rest }: HomeScreenType) {
  return (
    <div {...rest} className="flex w-screen h-screen">
      <div className="flex w-full h-screen px-[20px] 2xl:px-[220px] py-[13px] relative">
        <SlideShow className="w-full absolute left-0 top-0" />
        <Header />
        {/* <p className="justify-center">Compartilhe momentos especiais com quem você ama</p> */}
      </div>
    </div>
  )
}