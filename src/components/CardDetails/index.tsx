import { ReactNode } from "react";
import { CardDetailsContent } from "./CardDetailsContent";
import { CardDetailsIcon } from "./CardDetailsIcon";
import { CardDetailsTitle } from "./CardDetailsTitle";
import { CardDetailsTrigger } from "./CardDetailsTrigger";
import { CardDetailsWrapper } from "./CardDetailsWrapper";
import { CardDetailsProvider } from "./_context";

export function CardDetails({ children }: { children: ReactNode }) {
  return (
    <CardDetailsProvider>
      {children}
    </CardDetailsProvider>
  )
}

CardDetails.Wrapper = CardDetailsWrapper;
CardDetails.Content = CardDetailsContent;
CardDetails.Icon = CardDetailsIcon;
CardDetails.Title = CardDetailsTitle;
CardDetails.Trigger = CardDetailsTrigger