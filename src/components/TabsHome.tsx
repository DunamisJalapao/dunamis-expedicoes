import { FlexProps } from "@chakra-ui/react";
import { ButtonPrimary } from "./ButtonPrimary";

import { format } from "date-fns";
import { MapPin, User2 } from 'lucide-react';
import { useState } from "react";
import { DatePicker } from "./DatePicker";

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
    <div className="flex mb-24 flex-col w-full xl:w-screen overflow-auto transition-all duration-200 ease-linear">
      <div className="flex h-full items-center justify-center">
        <div className="flex px-10 w-full justify-around gap-10">
          <div className="flex w-full justify-center flex-col gap-2 relative">
            <MapPin className="absolute ml-2" />
            <select className="h-[4.5rem] w-full focus:border-green-500 px-8 rounded-md" placeholder="Pacotes" name="itineraries" onChange={(e: any) => setPacks(e.target.value)}>
              <option value="ROTEIRO 3 DIAS"> ROTEIRO 3 DIAS</option>
              <option value="ROTEIRO 4 DIAS"> ROTEIRO 4 DIAS</option>
              <option value="ROTEIRO 5 DIAS"> ROTEIRO 5 DIAS</option>
            </select>
          </div>
          <DatePicker className="h-[4.5rem]" dateSelected={dateSelected} onSelectDate={setDateSelected} />
          <div className="flex w-full h-full flex-col gap-2 relative">
            <User2 className="absolute" />
            <input
              className="h-[4.5rem] w-full focus:border-green-500 px-3 rounded-md"
              type="text"
              placeholder="Quando começa?"
              value={qtdPersons}
              onChange={(e: any) => setQtdPersons(e.target.value)}
            />
          </div>

          <ButtonPrimary className="w-full h-[3.5rem] rounder-lg" onClick={handleSaveDate} />
        </div>

      </div>
    </div>

  )
}