import { Metadata } from "next";
import { PropsWithChildren } from "react";
import AosComponent from "./aos";
import ReduxWrapper from "./redux";

export const metadata: Metadata = {
  title: '25 random components',
  description: 'singe and multi open'
}

export default function Rootlayout({ children }: PropsWithChildren) {
  return (
    <html>
      <body>
        <AosComponent />
        <ReduxWrapper >
        {children}
          
        </ReduxWrapper>

      </body>
    </html>
  )
}