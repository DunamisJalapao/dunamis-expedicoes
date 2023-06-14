import { Flex, FlexProps, Tab, TabList, TabPanel, TabPanels, Tabs, Icon, Box, Text, Grid, GridItem, SimpleGrid } from "@chakra-ui/react";
import IconPin from '../../public/assets/icon-pin.svg'
import IconCalendar from '../../public/assets/icon-calendar.svg'
import IconPersons from '../../public/assets/icon-persons.svg'
import { Input } from "./Forms/Input";
import { ButtonPrimary } from "./ButtonPrimary";
import { CardPacks } from "./CardPacks";

import IconRoteiro from '../../public/assets/icon-roteiro.svg';
import IconComida from '../../public/assets/icon-comida.svg';
import IconGuide from '../../public/assets/icon-guide.svg';
import IconHospedagem from '../../public/assets/icon-hospedagem.svg';
import IconFrota from '../../public/assets/icon-frota.svg';
import IconPhotos from '../../public/assets/icon-photos.svg';
import { CardVantagens } from "./CardVantagens";
import { useState } from "react";


type TabsHome = FlexProps & {};

const vantagensData = [
  {
    icon: IconRoteiro,
    title: 'Roteiros Personalizados',
    description: 'Trecho pensados com carinho para que você possa ter sempre a melhor experiência possível '
  },
  {
    icon: IconGuide,
    title: 'Guias Experientes',
    description: 'Nossos guias são nativos, proporcionando uma experiência incrível para sua expedição. '
  },
  {
    icon: IconFrota,
    title: 'Frota 4x4',
    description: "SUV's super confortáveis e com ar condicionado no 12 para refrescar todo o trajeto."
  },
  {
    icon: IconComida,
    title: 'Alimentação',
    description: 'As principais refeições dignas de aventureiros estarão disponíveis durante o trajeto. '
  },
  {
    icon: IconHospedagem,
    title: 'Hospedagem',
    description: "Fique tranquilo que você terá um lugar aconchegante garantido para dormir em cada cidade que chegarmos 😉 "
  },
  {
    icon: IconPhotos,
    title: 'Melhores fotos',
    description: "Nosso time de guias são excelentes fotógrafos, garantimos que você sairá com as melhores fotos "
  },
]

const TabOne = () => (
  <Flex w="full" justify="space-around" gap={10}>
    <Flex flexDir="column" gap={2}>
      <Flex align="center" gap={3}>
        <Icon as={IconPin} />
        <Text>Pacotes</Text>
      </Flex>
      <Input />
    </Flex>
    <Flex flexDir="column" gap={2}>
      <Flex align="center" gap={3}>
        <Icon as={IconCalendar} />
        <Text>Quando começa?</Text>
      </Flex>
      <Input />
    </Flex>
    <Flex flexDir="column" gap={2}>
      <Flex align="center" gap={3}>
        <Icon as={IconPersons} />
        <Text>Quantas pessoas?</Text>
      </Flex>
      <Input />
    </Flex>
    <ButtonPrimary mt={8} borderRadius="lg" h="3.1em" />
  </Flex>
)

const TabTwo = () => (
  <Flex w="full" align="center" justify="space-around" gap={4}>
    <CardPacks />
    <CardPacks />
    <CardPacks />
    <CardPacks />
  </Flex>
)

const TabThree = () => (
  <SimpleGrid columns={3} spacing={2}>
    {vantagensData.map((vantagem, _) => (
      <GridItem key={_}>
        <CardVantagens {...vantagem} />
      </GridItem>
    ))}
  </SimpleGrid>
)

const objDisplays = [
  <TabOne />,
  <TabTwo />,
  <TabThree />
]

export function TabsHome({ ...rest }: TabsHome) {
  const [dataTabs, setDataTabs] = useState(0);
  const objWidth = [
    '30%',
    '50%',
    '50%'
  ]

  return (
    <Flex
      flexDir="column"
      w="80%"
      mb="-15vh"
      h={objWidth[dataTabs]}
      bg="white"
      borderRadius="xl"
      overflow="auto"
      shadow="2xl"
      transition="0.2s ease"
    >
      <Flex justify="center" h="70px" userSelect="none" cursor="pointer">
        <Flex justify="center" align="center" w="full" border="1px solid #00000033" onClick={() => setDataTabs(0)}>Vamos lá?</Flex>
        <Flex justify="center" align="center" w="full" border="1px solid #00000033" onClick={() => setDataTabs(1)}>Pacotes</Flex>
        <Flex justify="center" align="center" w="full" border="1px solid #00000033" onClick={() => setDataTabs(2)}>Vantagens</Flex>
      </Flex>

      <Flex h="full" align="center">
        {objDisplays[dataTabs]}
      </Flex>
    </Flex >
  )
}