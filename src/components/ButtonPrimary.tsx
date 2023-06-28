"use client"

import { Button, ButtonProps } from "@chakra-ui/react";
import Link from "next/link";

type ButtonPrimaryTypes = ButtonProps & {}

export function ButtonPrimary({ onClick, ...rest }: ButtonPrimaryTypes) {
  if (onClick !== undefined) {
    return (
      <Button
        w="12rem"
        h="3.4rem"
        borderRadius="xl"
        bg="#112126ff"
        color="white"
        textTransform="uppercase"
        onClick={onClick}
        {...rest}
      >
        Contato
      </Button>
    )
  }

  return (
    // <Link href="https://api.whatsapp.com/send?phone=556392437096" target="_blank">
    <Link href="https://api.whatsapp.com/send?phone=556392437096" target="_blank">
      <Button
        w="12rem"
        h="3.4rem"
        borderRadius="xl"
        bg="#112126ff"
        color="white"
        textTransform="uppercase"
        {...rest}
      >
        Contato
      </Button>
    </Link>
  )
}