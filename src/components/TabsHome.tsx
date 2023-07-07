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
import { format } from "date-fns";


type TabsHome = FlexProps & {};

export function TabsHome({ ...rest }: TabsHome) {
  const [dateSelected, setDateSelected] = useState<Date | undefined>();
  const [packs, setPacks] = useState('');
  const [qtdPersons, setQtdPersons] = useState(0);

  const handleSaveDate = () => {
    let msg = encodeURIComponent(`Olá! Gostaria de fazer uma reserva de um pacote ${packs} no dia ${format(dateSelected!, 'dd/MM/yyy')} para ${qtdPersons} pessoas`);
    window.open(`https://api.whatsapp.com/send?phone=556392437096&text=${msg}`);
  }
  return (
    <Flex
      flexDir="column"
      w={{ base: "full", xl: '80%' }}
      h='30%'
      overflow="auto"
      transition="0.2s ease"
    >

      <Flex h="full" align="center">
        <Flex px={10} w="full" justify="space-around" gap={10}>
          <Flex w="full" flexDir="column" gap={2}>
            <Flex align="center" gap={3}>
              <Icon as={IconPin} />
              <Text>Pacotes</Text>
            </Flex>
            <Select onChange={(e: any) => setPacks(e.target.value)} placeholder="Pacotes" _placeholder={{ color: 'red' }}>
              <option value="ROTEIRO 3 DIAS"> ROTEIRO 3 DIAS</option>
              <option value="ROTEIRO 4 DIAS"> ROTEIRO 4 DIAS</option>
              <option value="ROTEIRO 5 DIAS"> ROTEIRO 5 DIAS</option>
            </Select>
          </Flex>
          <Flex w="full" flexDir="column" gap={2}>
            <Flex align="center" gap={3}>
              <Icon as={IconCalendar} />
              <Text>Quando começa?</Text>
            </Flex>
            <DatePicker dateSelected={dateSelected} onSelectDate={setDateSelected} />
          </Flex>
          <Flex w="full" flexDir="column" gap={2}>
            <Flex align="center" gap={3}>
              <Icon as={IconPersons} />
              <Text>Quantas pessoas?</Text>
            </Flex>
            <Input
              value={qtdPersons}
              onChange={(e: any) => setQtdPersons(e.target.value)}
            />
          </Flex>
          <ButtonPrimary onClick={handleSaveDate} mt={8} borderRadius="lg" h="3.1em" />
        </Flex>
      </Flex>
    </Flex >
  )
}