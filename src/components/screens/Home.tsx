"use client";
import { runWhenIdle } from "@/lib/performance-utils";
import dynamic from "next/dynamic";
import Image from "next/image";
import {
  HTMLAttributes,
  memo,
  startTransition,
  useEffect,
  useState,
} from "react";

// Dynamic import do carousel - CSS será carregado quando componente for importado
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Carousel = dynamic(
  () => import("react-responsive-carousel").then((mod) => mod.Carousel),
  {
    ssr: false,
    loading: () => null, // Não mostrar loading - primeira imagem já está visível
  }
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
) as any;

type HomeScreenType = HTMLAttributes<HTMLDivElement> & {};

const HomeScreen = memo(function HomeScreen({ ...rest }: HomeScreenType) {
  const [showCarousel, setShowCarousel] = useState(false);

  // Carregar carousel apenas após LCP (primeira imagem já renderizada)
  useEffect(() => {
    // Usa requestIdleCallback para não impactar INP durante load
    const idleId = runWhenIdle(() => {
      // Aguardar LCP estimado (primeira imagem) antes de carregar carousel
      // Use startTransition para não bloquear interações do usuário
      const timer = setTimeout(() => {
        startTransition(() => {
          setShowCarousel(true);
        });
      }, 200); // Delay para garantir que LCP seja a primeira imagem estática

      return () => clearTimeout(timer);
    }, 500); // Espera 500ms idle ou timeout

    return () => {
      // Cancela o callback idle se ainda não executou
      if (typeof cancelIdleCallback !== "undefined") {
        cancelIdleCallback(idleId);
      } else {
        clearTimeout(idleId);
      }
    };
  }, []);

  return (
    <div {...rest} className="flex w-screen h-screen relative overflow-hidden">
      <div className="flex w-full h-full px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-20 py-4 sm:py-6 md:py-8 relative">
        <div className="flex flex-col gap-3 sm:gap-6 md:gap-8 lg:gap-12 xl:gap-16 mx-auto my-auto z-10 text-white items-center lg:items-start font-bardon-stamp transition-all duration-300 max-w-4xl">
          <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl text-center lg:text-left leading-tight">
            Conheça as
          </h1>
          <h1 className="text-transparent text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-bardon-clean text-stroke-mobile lg:text-stroke text-center lg:text-left leading-none">
            MARAVILHAS
          </h1>
          <h1 className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl text-center lg:text-left lg:ml-auto leading-tight">
            do Jalapão conosco
          </h1>
        </div>
        <div className="w-full absolute top-0 left-0">
          {/* Primeira imagem LCP renderizada imediatamente no HTML - SEM carousel */}
          <div className="h-screen w-full absolute top-0 left-0">
            {/* Imagem nativa com srcset para melhor controle e qualidade - mobile primeiro para LCP */}
            <img
              src="/images/home2-768x432.avif"
              srcSet="/images/home2-768x432.avif 768w, /images/home2-1280x720.avif 1280w, /images/home2-1920x1080.avif 1920w"
              sizes="100vw"
              alt="Paisagem do Jalapão - Dunamis Expedições"
              fetchPriority="high"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                objectPosition: "center",
              }}
              loading="eager"
            />
          </div>

          {/* Carousel carregado após LCP - sobrepõe primeira imagem quando pronto */}
          {showCarousel && (
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
                useKeyboardArrows={false}
                transitionTime={300}
              >
                <div className="h-screen">
                  <Image
                    src="/images/home2-1920x1080.avif"
                    alt="Paisagem do Jalapão - Dunamis Expedições"
                    sizes="100vw"
                    fill
                    loading="lazy"
                    fetchPriority="low"
                    quality={48}
                    placeholder="blur"
                    blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
                    style={{
                      objectFit: "cover",
                      objectPosition: "center",
                    }}
                  />
                </div>
                <div className="h-screen">
                  <Image
                    src="/images/home1-1920x1080.avif"
                    alt="Fervedouro do Jalapão - Dunamis Expedições"
                    sizes="100vw"
                    fill
                    loading="lazy"
                    fetchPriority="low"
                    quality={48}
                    placeholder="blur"
                    blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
                    style={{
                      objectFit: "cover",
                      objectPosition: "center",
                    }}
                  />
                </div>
                <div className="h-screen">
                  <Image
                    src="/images/home3-1920x1080.avif"
                    alt="Aventura no Jalapão - Dunamis Expedições"
                    sizes="100vw"
                    fill
                    loading="lazy"
                    fetchPriority="low"
                    quality={48}
                    placeholder="blur"
                    blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
                    style={{
                      objectFit: "cover",
                      objectPosition: "center",
                    }}
                  />
                </div>
              </Carousel>
            </div>
          )}
        </div>
        <div className="absolute top-0 left-0 w-full h-full bg-[#11212671]" />
      </div>
    </div>
  );
});

HomeScreen.displayName = "HomeScreen";

export default HomeScreen;
