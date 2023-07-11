"use client"
import { HTMLAttributes, ReactNode } from "react";
import { CarouselUI } from "./Material-UI";

type SlideShowProp = HTMLAttributes<HTMLDivElement> & {
  children: ReactNode
}

export function SlideShow({ children, ...rest }: SlideShowProp) {
  return (
    <CarouselUI
      className={rest.className}
      autoplay
      autoplayDelay={10000}
      loop
      transition={{ duration: 1 }}
      prevArrow={({ handlePrev }) => (
        <></>
      )}
      nextArrow={({ handleNext }) => (
        <></>
      )}
      navigation={({ setActiveIndex, activeIndex, length }) => (
        <></>
      )}
    >
      {children}
    </CarouselUI>
  );
}