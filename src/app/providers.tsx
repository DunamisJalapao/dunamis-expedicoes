import { UtilsProvider } from "@/hooks/utils";
import { ReactNode } from "react";

type ProviderProps = {
  children: ReactNode
}

export function Providers({ children }: ProviderProps) {
  return (
    <UtilsProvider>
      {children}
    </UtilsProvider>
  )
}