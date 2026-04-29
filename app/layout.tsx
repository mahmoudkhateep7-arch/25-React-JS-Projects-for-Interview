import { Metadata } from "next";
import { PropsWithChildren } from "react";

export const meatdata: Metadata = {
  title: 'accoridan',
  description: 'singe and multi open'
}

export default function Rootlayout({ children }: PropsWithChildren) {
  return (
    <html>
      <body>
        {children}
      </body>
    </html>
  )
}