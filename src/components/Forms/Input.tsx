import { FormControl, FormErrorMessage, FormLabel, Icon, Input as ChakraInput, InputGroup, InputLeftElement, InputProps as ChakraInputProps, InputRightElement, Text, useToken } from '@chakra-ui/react';
import { ChangeEvent, ReactElement, useEffect, useState } from 'react';

type InputProps = ChakraInputProps & {}

function Input({ ...rest }: InputProps) {
  const [primaryColor] = useToken('colors', ['green.500']);
  return (
    <ChakraInput
      h="3.1em"
      width="full"
      bg="bg-color-input"
      focusBorderColor={primaryColor}
      _placeholder={{
        color: 'text-placeholder'
      }}
      {...rest}
    />
  )
}

export { Input }