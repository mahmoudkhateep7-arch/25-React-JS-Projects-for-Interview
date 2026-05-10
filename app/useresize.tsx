"use client";

import { useEffect, useState } from "react";
const myFunction = () => {
  const [width, setWidth] = useState(0)
  const [Height, setHeight] = useState(0)
  useEffect(() => {
    const resizeFunction = () => {
      const innerWidth = window.innerWidth
      const innerHeight = window.innerHeight
      setHeight(innerHeight)
      setWidth(innerWidth)
    }
    resizeFunction()
    window.addEventListener('resize', resizeFunction)
    return () => { window.removeEventListener('resize', resizeFunction) }
  }, [])
  return { width, Height }
}
export default function Resize() {


  const { Height, width } = myFunction()

  return (
    <div className={`py-10`}>
      <div className={`w-70 flex flex-col gap-3 text-xl p-2 bg-black text-white mx-auto`}>
        <h4>Width:{width}</h4>
        <h4>Height:{Height}</h4>
      </div>

    </div>
  )
}