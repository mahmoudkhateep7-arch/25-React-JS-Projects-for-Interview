import { Metadata } from "next";
import { PropsWithChildren } from "react";
import AosComponent from "./aos";

export const meatdata: Metadata = {
  title: 'random coponents',
  description: 'singe and multi open'
}

export default function Rootlayout({ children }: PropsWithChildren) {
  return (
    <html>
      <body>
        <AosComponent />

        {children}
      </body>
    </html>
  )
}