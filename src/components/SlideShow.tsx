import { HTMLAttributes } from "react";
import { CarouselUI } from "./Material-UI";

type SlideShowProp = HTMLAttributes<HTMLDivElement> & {}

export function SlideShow({ ...rest }: SlideShowProp) {
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
        <div className="absolute bottom-4 left-2/4 z-50 flex -translate-x-2/4 gap-2">
          {new Array(length).fill("").map((_, i) => (
            <span
              key={i}
              className={`block h-1 cursor-pointer rounded-2xl transition-all content-[''] ${activeIndex === i ? "bg-white w-8" : "bg-white/50 w-4"}`}
              onClick={() => setActiveIndex(i)}
            />
          ))}
        </div>
      )}
    >
      <img
        src="/home1.png"
        alt="image 1"
        className="h-full w-full object-cover"
      />
      <img
        src="/home2.png"
        alt="image 2"
        className="h-full w-full object-cover"
      />
      <img
        src="/home3.png"
        alt="image 3"
        className="h-full w-full object-cover"
      />
    </CarouselUI>
  );
}