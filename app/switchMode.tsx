"use client";

import { useEffect, useLayoutEffect, useState } from "react";

export default function DardLightMode() {
  const [theme, setTheme] = useState<'light' | 'dark'>('light')
  useLayoutEffect(() => {
    if (localStorage.getItem('theme')) {
      const str = localStorage.getItem('theme')
      if (str == 'light' || str == 'dark') {
        setTheme(str)
      }
    } else {
      localStorage.setItem('theme', theme)

    }
  }, [])

  useEffect(() => {
    if (localStorage.getItem('theme')) {
      localStorage.setItem('theme', theme)
    }
  }, [theme])
  return (
    <section className={`flex duration-500 relative transition-all    items-center min-h-screen  ${theme == 'light' ? 'bg-white text-black' : 'bg-black text-white'} `}>
      <div className={`max-w-300 px-8 flex flex-col gap-4 mx-auto w-full`}>
        <div className={`absolute top-40 left-1/2 -translate-x-1/2 max-[600px]:text-2xl  text-5xl`}>Light/Drek Mode</div>
        <h3 className={`text-4xl `}>Hello world</h3>
        <div
          onClick={() => { setTheme((p) => { return p == 'dark' ? 'light' : 'dark' }) }}
          className={`${theme == 'light' ? 'bg-black text-white' : 'bg-white text-black'} 
        w-fit px-4 py-1.5 duration-500 transition-all  rounded-2xl cursor-pointer`}>Switch to {theme == 'light' ? 'dark mode' : 'light mode'} </div>
      </div>
    </section>
  )
}