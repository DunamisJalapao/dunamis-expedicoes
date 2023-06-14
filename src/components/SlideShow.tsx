import { Flex } from "@chakra-ui/react"

import 'keen-slider/keen-slider.min.css'
import { useKeenSlider } from 'keen-slider/react';

type SlideShowProps = {
  photos: string[];
}


export function SlideShow({ photos }: SlideShowProps) {
  const [sliderRef] = useKeenSlider(
    {
      loop: true,
    },
    [
      (slider) => {
        let timeout: ReturnType<typeof setTimeout>
        let mouseOver = false
        function clearNextTimeout() {
          clearTimeout(timeout)
        }
        function nextTimeout() {
          clearTimeout(timeout)
          if (mouseOver) return
          timeout = setTimeout(() => {
            slider.next()
          }, 2000)
        }
        slider.on("created", () => {
          slider.container.addEventListener("mouseover", () => {
            mouseOver = true
            clearNextTimeout()
          })
          slider.container.addEventListener("mouseout", () => {
            mouseOver = false
            nextTimeout()
          })
          nextTimeout()
        })
        slider.on("dragStarted", clearNextTimeout)
        slider.on("animationEnded", nextTimeout)
        slider.on("updated", nextTimeout)
      },
    ]
  )
  return (
    <Flex
      w="full"
      className='keen-slider'
      ref={sliderRef}
    >
      {photos.map((photo, index) => (
        <Flex className='keen-slider__slide' bgImage={photo} bgSize="cover" />
      ))}
    </Flex>
  )
}