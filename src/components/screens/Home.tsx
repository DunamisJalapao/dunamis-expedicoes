"use client";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel";
import { runWhenIdle } from "@/lib/performance-utils";
import Image from "next/image";
import {
  HTMLAttributes,
  memo,
  startTransition,
  useEffect,
  useRef,
  useState,
} from "react";

type HomeScreenType = HTMLAttributes<HTMLDivElement> & {};

const HomeScreen = memo(function HomeScreen({ ...rest }: HomeScreenType) {
  const [showCarousel, setShowCarousel] = useState(false);
  const autoplayIntervalRef = useRef<NodeJS.Timeout | null>(null);
  const carouselApiRef = useRef<CarouselApi | null>(null);

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

  // Autoplay para o carousel customizado
  useEffect(() => {
    if (!showCarousel || !carouselApiRef.current) return;

    const api = carouselApiRef.current;

    // Autoplay a cada 10 segundos
    autoplayIntervalRef.current = setInterval(() => {
      if (api.canScrollNext()) {
        api.scrollNext();
      } else {
        api.scrollTo(0); // Volta ao início quando chega ao fim
      }
    }, 10000);

    return () => {
      if (autoplayIntervalRef.current) {
        clearInterval(autoplayIntervalRef.current);
      }
    };
  }, [showCarousel]);

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
          {/* Vercel otimiza automaticamente esta imagem (AVIF/WebP) */}
          {/* Usando imagem menor para mobile para melhorar LCP */}
          <div className="h-screen w-full absolute top-0 left-0">
            <Image
              src="/images/home2-768x432.avif"
              alt="Paisagem do Jalapão - Dunamis Expedições"
              fill
              priority
              quality={70}
              sizes="(max-width: 768px) 100vw, (max-width: 1280px) 100vw, 1920px"
              style={{
                objectFit: "cover",
                objectPosition: "center",
              }}
              placeholder="blur"
              blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
            />
          </div>

          {/* Carousel carregado após LCP - sobrepõe primeira imagem quando pronto */}
          {showCarousel && (
            <div className="w-full absolute top-0 left-0">
              <Carousel
                opts={{
                  align: "start",
                  loop: true,
                  dragFree: false,
                }}
                setApi={(api) => {
                  carouselApiRef.current = api;
                }}
                className="w-full h-screen"
              >
                <CarouselContent className="h-screen">
                  <CarouselItem className="h-screen pl-0">
                    <div className="relative h-screen w-full">
                      <Image
                        src="/images/home2-1920x1080.avif"
                        alt="Paisagem do Jalapão - Dunamis Expedições"
                        sizes="100vw"
                        fill
                        loading="lazy"
                        quality={75}
                        placeholder="blur"
                        blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
                        style={{
                          objectFit: "cover",
                          objectPosition: "center",
                        }}
                      />
                    </div>
                  </CarouselItem>
                  <CarouselItem className="h-screen pl-0">
                    <div className="relative h-screen w-full">
                      <Image
                        src="/images/home1-1920x1080.avif"
                        alt="Fervedouro do Jalapão - Dunamis Expedições"
                        sizes="100vw"
                        fill
                        loading="lazy"
                        quality={75}
                        placeholder="blur"
                        blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
                        style={{
                          objectFit: "cover",
                          objectPosition: "center",
                        }}
                      />
                    </div>
                  </CarouselItem>
                  <CarouselItem className="h-screen pl-0">
                    <div className="relative h-screen w-full">
                      <Image
                        src="/images/home3-1920x1080.avif"
                        alt="Aventura no Jalapão - Dunamis Expedições"
                        sizes="100vw"
                        fill
                        loading="lazy"
                        quality={75}
                        placeholder="blur"
                        blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
                        style={{
                          objectFit: "cover",
                          objectPosition: "center",
                        }}
                      />
                    </div>
                  </CarouselItem>
                </CarouselContent>
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
