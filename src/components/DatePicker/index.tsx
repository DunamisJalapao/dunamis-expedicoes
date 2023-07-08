import THEME from "@/utils/theme";
import { CacheProvider } from "@chakra-ui/next-js";
import { ChakraProvider } from "@chakra-ui/react";
import { HTMLAttributes } from "react";
import { DatePickerCore } from "./DatePickerCore";

type DatePickerProps = HTMLAttributes<HTMLDivElement> & {
  children?: string | JSX.Element;
  dateSelected?: Date;
  variant?: 'default' | 'icon-button' | 'birthdate';
  disableDates?: Date[];
  error?: string;
  onSelectDate(value: Date): void;
}
export function DatePicker({ ...rest }: DatePickerProps) {
  return (
    <CacheProvider>
      <ChakraProvider theme={THEME}>
        <DatePickerCore {...rest} />
      </ChakraProvider>
    </CacheProvider>
  )
}