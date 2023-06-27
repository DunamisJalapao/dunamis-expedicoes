import { Flex, FlexProps, Tab, TabList, TabPanel, TabPanels, Tabs, Icon, Box, Text, Grid, GridItem, SimpleGrid, Wrap, WrapItem } from "@chakra-ui/react";
import IconPin from '../../public/assets/icon-pin.svg'
import IconCalendar from '../../public/assets/icon-calendar.svg'
import IconPersons from '../../public/assets/icon-persons.svg'
import { Input } from "./Forms/Input";
import { Select } from "./Forms/Select";
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
import { DatePicker } from "./Forms/DatePicker";


type TabsHome = FlexProps & {};

const vantagensData = [
  {
    icon: IconRoteiro,
    title: 'Roteiros Personalizados',
    description: 'Trecho pensados com carinho para que você possa ter sempre a melhor experiência possível '
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

const roteirosData = [
  {
    title: 'ROTEIRO 3 DIAS',
    duration: '3 dias e 2 noites',
    foods: 'Alimento incluso',
    hotel: 'Hospedagem inclusa',
    doc: '/roteiro3dias.pdf'
  },
  {
    title: 'ROTEIRO 4 DIAS',
    duration: '4 dias e 3 noites',
    foods: 'Alimento incluso',
    hotel: 'Hospedagem inclusa',
    doc: '/roteiro4dias.pdf'
  },
  {
    title: 'ROTEIRO 5 DIAS',
    duration: '5 dias e 4 noites',
    foods: 'Alimento incluso',
    hotel: 'Hospedagem inclusa',
    doc: '/roteiro5dias.pdf'
  },
]



const TabOne = () => (
  <Flex w="full" align="center" justify="center" gap={10}>
    {roteirosData.map(roteiro => (
      <CardPacks {...roteiro} />
    ))}
  </Flex>
)

const TabTwo = () => (
  <Wrap spacing="10px" justify="center" px={4}>
    {vantagensData.map((vantagem, _) => (
      <WrapItem key={_}>
        <CardVantagens  {...vantagem} />
      </WrapItem>
    ))}
  </Wrap>
)

const TabThree = () => (
  <Flex w="full" justify="space-around" gap={10}>
    <Flex flexDir="column" gap={2}>
      <Flex align="center" gap={3}>
        <Icon as={IconPin} />
        <Text>Pacotes</Text>
      </Flex>
      <Select placeholder="Pacotes">
        <option value="3dias"> ROTEIRO 3 DIAS</option>
        <option value="4dias"> ROTEIRO 4 DIAS</option>
        <option value="5dias"> ROTEIRO 5 DIAS</option>
      </Select>
    </Flex>
    <Flex flexDir="column" gap={2}>
      <Flex align="center" gap={3}>
        <Icon as={IconCalendar} />
        <Text>Quando começa?</Text>
      </Flex>
      <DatePicker />
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

const objDisplays = [
  <TabOne />,
  <TabTwo />,
  <TabThree />
]

export function TabsHome({ ...rest }: TabsHome) {
  const [dataTabs, setDataTabs] = useState(0);
  const objHeight = [
    '50%',
    '50%',
    '30%',
  ]

  const objWidth = [
    "70%",
    "90%",
    "80%",
  ]

  return (
    <Flex
      flexDir="column"
      w={objWidth[dataTabs]}
      mb="-15vh"
      h={objHeight[dataTabs]}
      bg="white"
      borderRadius="xl"
      overflow="auto"
      shadow="2xl"
      transition="0.2s ease"
    >
      <Flex justify="center" h="70px" userSelect="none" cursor="pointer">
        <Flex justify="center" align="center" w="full" border="1px solid #00000033" onClick={() => setDataTabs(0)}>Pacotes</Flex>
        <Flex justify="center" align="center" w="full" border="1px solid #00000033" onClick={() => setDataTabs(1)}>Vantagens</Flex>
        <Flex justify="center" align="center" w="full" border="1px solid #00000033" onClick={() => setDataTabs(2)}>Vamos lá?</Flex>
      </Flex>

      <Flex h="full" align="center">
        {objDisplays[dataTabs]}
      </Flex>
    </Flex >
  )
}