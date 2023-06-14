"use client"

import { UtilsProvider } from '@/hooks/utils'
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
        <UtilsProvider>
          {children}
        </UtilsProvider>
      </ChakraProvider>
    </CacheProvider>
  )
}