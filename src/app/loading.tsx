"use client"

import { Text } from "@chakra-ui/react";

export default function Loading() {
  return (
    <div className="flex w-screen h-screen flex-col gap-2 items-center justify-center">
      <Text>Carregando...</Text>
    </div>
  )
}