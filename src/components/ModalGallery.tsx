import { getPhotos } from '@/sanity/sanity-utils';
import {
  Modal as ModalChakra,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Flex,
  useDisclosure,
  Image,
} from '@chakra-ui/react'
import { Button } from '@chakra-ui/react'
import { useEffect, useState } from 'react';

import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";

export function ModalGallery() {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [photosGallery, setphotosGallery] = useState<string[]>([] as string[]);

  const search = async () => {
    const response = await getPhotos();
    if (response !== undefined) {
      console.log(response[0])
      response[0].images.map(image => {
        console.log(photosGallery.includes(image.url));
        if (!photosGallery.includes(image.url)) setphotosGallery(prev => [...prev, image.url])
      })
    }
  }

  useEffect(() => {
    search();
  }, [])
  return (
    <ModalChakra onClose={onClose} size="6xl" isOpen={true} isCentered>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader fontFamily="var(--font-lato)" >Galeria</ModalHeader>
        <ModalCloseButton />
        <ModalBody w="full" h="full">
          <ResponsiveMasonry>
            <Masonry columnsCount={5} gutter='15px'>
              {photosGallery.map(photo => (
                <Flex rounded="2xl" overflow="auto" boxShadow="lg" >
                  <Image src={photo} />
                </Flex>
              ))}
            </Masonry>
          </ResponsiveMasonry>
        </ModalBody>
        <ModalFooter>
          <Button onClick={onClose}>Close</Button>
        </ModalFooter>
      </ModalContent>
    </ModalChakra>
  )
} 