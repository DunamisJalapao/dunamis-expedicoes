import { FormControl, FormErrorMessage, FormLabel, Icon, Input as ChakraInput, InputGroup, InputLeftElement, InputProps as ChakraInputProps, InputRightElement, Text, useToken } from '@chakra-ui/react';
import { ChangeEvent, ReactElement, useEffect, useState } from 'react';


function Input() {
  const [primaryColor] = useToken('colors', ['green.500']);
  return (

    <InputGroup
      alignSelf="center"
      display="flex"
      flexDir="column"
      borderColor="border-color-input"

    >
      <ChakraInput
        h="3.1em"
        width="full"
        bg="bg-color-input"

        focusBorderColor={primaryColor}
        _placeholder={{
          color: 'text-placeholder'
        }}
      />

    </InputGroup>

  )
}

export { Input }