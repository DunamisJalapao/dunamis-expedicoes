"use client"

import THEME from '@/utils/theme'
import { CacheProvider } from '@chakra-ui/next-js'
import { ChakraProvider } from '@chakra-ui/react'

export function Providers({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <CacheProvider>
      <ChakraProvider theme={THEME}>
        {children}
      </ChakraProvider>
    </CacheProvider>
  )
}