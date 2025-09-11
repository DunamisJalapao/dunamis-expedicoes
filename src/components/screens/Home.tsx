"use client";
import Image from "next/image";
import { HTMLAttributes, memo } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

type HomeScreenType = HTMLAttributes<HTMLDivElement> & {};

const HomeScreen = memo(function HomeScreen({ ...rest }: HomeScreenType) {
  return (
    <div {...rest} className="flex w-screen h-screen relative overflow-hidden">
      <div className="flex w-full h-full px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-20 py-4 sm:py-6 md:py-8 relative">
        <div className="flex flex-col gap-3 sm:gap-6 md:gap-8 lg:gap-12 xl:gap-16 mx-auto my-auto z-10 text-white items-center lg:items-start font-bardon-stamp transition-all duration-300 max-w-4xl">
          <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl text-center lg:text-left leading-tight">
            Conheça as
          </h1>
          <h1 className="text-transparent text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-bardon-clean text-stroke-mobile lg:text-stroke text-center lg:text-left leading-none">
            Maravilhas
          </h1>
          <h1 className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl text-center lg:text-left lg:ml-auto leading-tight">
            do Jalapão conosco
          </h1>
        </div>
        <div className="w-full absolute top-0 left-0">
          <Carousel
            infiniteLoop
            interval={10000}
            showArrows={false}
            showIndicators={false}
            showThumbs={false}
            autoPlay
            stopOnHover={false}
            swipeable={true}
            emulateTouch={true}
          >
            <div className="h-screen">
              <Image
                src="/home2.jpeg"
                alt="Paisagem do Jalapão - Dunamis Expedições"
                sizes="100vw"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  objectPosition: "center",
                }}
                width={1920}
                height={1080}
                priority
                quality={75}
              />
            </div>
            <div className="h-screen">
              <Image
                src="/home1.jpeg"
                alt="Fervedouro do Jalapão - Dunamis Expedições"
                sizes="100vw"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  objectPosition: "center",
                }}
                width={1920}
                height={1080}
                loading="lazy"
                quality={75}
              />
            </div>
            <div className="h-screen">
              <Image
                src="/home3.png"
                alt="Aventura no Jalapão - Dunamis Expedições"
                sizes="100vw"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  objectPosition: "center",
                }}
                width={1920}
                height={1080}
                loading="lazy"
                quality={75}
              />
            </div>
          </Carousel>
        </div>
        <div className="absolute top-0 left-0 w-full h-full bg-[#11212671]" />
      </div>
    </div>
  );
});

export default HomeScreen;
