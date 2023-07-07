"use client"

import { AspectRatio, Box, Flex, FlexProps, Image, keyframes, useMediaQuery } from "@chakra-ui/react";
import { Header } from "../Header";
import { TabsHome } from "../TabsHome";
import { getPhotos } from '@/sanity/sanity-utils';
import { HTMLAttributes, useCallback, useEffect, useMemo, useState } from 'react';
import { SlideShow } from "../SlideShow";

type HomeScreenType = HTMLAttributes<HTMLDivElement> & {}

export default function HomeScreen({ ...rest }: HomeScreenType) {
  const [isMobile] = useMediaQuery("(max-width: 820px)");
  return (
    <div {...rest} className="flex w-screen h-screen">
      <div className="flex w-full h-screen md:h-[80vh] relative">
        <AspectRatio w="full" ratio={1}>
          <video playsInline autoPlay muted loop preload="auto">
            <source src="/video_bg.mp4" type="video/mp4" />
          </video>
        </AspectRatio>

        <div className="flex absolute top-0 left-0 w-full h-full flex-col items-center px-[20px] 2xl:px-[220px] py-[13px] justify-between">
          <Header />
          {!isMobile ?
            <TabsHome />
            :
            <>
              <div className="absolute left-1/2 bottom-[10px] block text-center text-xl z-50 no-underline w-[25px] h-[25px] shadow-lg border-b-4 border-b-[#fff] border-r-4 border-r-[#fff] animate-arrow-scroll" />
              <div className="absolute left-1/2 bottom-[25px] block text-center text-xl z-50 no-underline w-[25px] h-[25px] shadow-lg border-b-4 border-b-[#fff] border-r-4 border-r-[#fff] animate-arrow-scroll" />
            </>
          }
        </div>

      </div>
    </div>
  )
}