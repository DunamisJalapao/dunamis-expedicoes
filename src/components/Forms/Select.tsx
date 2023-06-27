import { Select as ChakraSelect, SelectProps as ChakraSelectProps, useToken } from "@chakra-ui/react";

type SelectProps = ChakraSelectProps & {}

export function Select({ ...rest }: SelectProps) {
  const [primaryColor] = useToken('colors', ['green.500']);
  return (
    <ChakraSelect
      h="3.1em"
      width="full"
      // minW="23em"
      focusBorderColor={primaryColor}
      {...rest}
    />

  )
}