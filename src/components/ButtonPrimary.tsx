"use client"

import { Button, ButtonProps } from "@chakra-ui/react";

type ButtonPrimaryTypes = ButtonProps & {}

export function ButtonPrimary({ ...rest }: ButtonPrimaryTypes) {
  return (
    <Button w="12rem" h="3.4rem" borderRadius="xl" bg="#112126ff" color="white" textTransform="uppercase" {...rest}>
      Contato
    </Button>
  )
}