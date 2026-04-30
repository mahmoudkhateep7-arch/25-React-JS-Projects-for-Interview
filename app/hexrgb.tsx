"use client";

import { useEffect, useState } from "react";
const str = '123456789abcdef'
const twocol = ['rgb(123,123,123)', '#414231']
export default function HexRgb() {
  const [aa, staa] = useState(1)
  const [ss, sss] = useState(1)
  const [num, setnum] = useState(3)

  const [col, setCol] = useState('wh')

  const [mounted, setmounted] = useState(false);
  useEffect(() => {
    setnum(Math.floor(Math.random() * 2))
    setCol(num == 0 ? twocol[1] : twocol[0])


    setmounted(true)
  }, [])
  const randomLetterGenerator = () => {
    const randomIndex = Math.floor(Math.random() * str.length)
    const randomLetter = str[randomIndex]
    return randomLetter
  }
  const createHexCol = () => {
    const arrayofsixLetters = Array.from({ length: 6 }).map((n) => { return randomLetterGenerator() })

    return `#${arrayofsixLetters.join("")}`


  }
  const generateNumfrom0to255 = () => {
    return Math.round(Math.random() * 255)
  }
  const rgbColGenrator = () => {
    return `rgb(${generateNumfrom0to255()},${generateNumfrom0to255()},${generateNumfrom0to255()})`
  }
  const fn = () => {
    if (num == 0) {
      setCol(createHexCol())
    } else {
      setCol(rgbColGenrator())

    }
  }


  useEffect(() => {
    if (aa == 1) {

    }
    else {
      fn()
    }
    const interval1 = setInterval(() => {
      fn()
    }, 4000);
    return () => { clearInterval(interval1) }
  }, [num, ss])
  useEffect(() => {
    const sett = setTimeout(() => {
      staa(2)
    }, 0);
  }, [])
  if (mounted == false) { return }
  return (
    <div style={{ background: col }} className={`pt-6 pb-14 `}>
      {/* 3 buttons  */}
      <div className={`flex justify-center max-[600px]:flex-col   gap-5`}>
        <div onClick={() => { setnum(0) }} className={`${num == 0 ? 'bg-black text-white border-white scale-115 ' : 'bg-white text-black border-black'} border cursor-pointer     max-[600px]:w-50 max-[600px]:mx-auto max-[600px]:text-center  text-xl px-3 py-1.5`}>Create Hex color</div>
        <div onClick={() => { setnum(1) }} className={`${num == 1 ? 'bg-black text-white border-white scale-115' : 'bg-white text-black border-black'} border cursor-pointer      max-[600px]:w-50 max-[600px]:mx-auto max-[600px]:text-center   text-xl px-3 py-1.5`}>Create Rgb color</div>
        <div onClick={() => { sss(Math.random()) }} className={`border border-black hover:bg-black hover:text-white hover:border-white cursor-pointer duration-300 transition-all max-[600px]:w-50 max-[600px]:mx-auto max-[600px]:text-center  max-[600px]:justify-center    flex items-center px-4 text-xl bg-white text-black`}>new color</div>
      </div>

      <div className={`text-4xl font-bold text-center  py-20`}>{num == 0 ? 'HEX Color' : 'RGB color'}</div>


      <div className={`pt-10`}>
        <p className={`text-white text-center text-7xl max-[1200px]:text-5xl max-[800px]:text-4xl max-[600px]:text-2xl`}>{col}</p>
      </div>

    </div>
  )
}