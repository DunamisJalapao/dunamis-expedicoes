import { ThemeProvider } from "@/components/material-ui";
import { UtilsProvider } from "@/hooks/utils";
import { ReactNode } from "react";

type ProviderProps = {
  children: ReactNode
}

export function Providers({ children }: ProviderProps) {
  return (
    <ThemeProvider>
      <UtilsProvider>
        {children}
      </UtilsProvider>
    </ThemeProvider>
  )
}