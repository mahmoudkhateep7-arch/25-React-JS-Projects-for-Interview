"use client";

import { useRef, useState } from "react";

export default function SectionsScroll() {
  const [n, setN] = useState(0)
  const divRef = useRef<HTMLDivElement>(null)
  const dataArray = [
    { bg: '#0F172A', col: '#38BDF8', text: 'section ', height: '55vh' }, // Dark Blue & Sky Blue
    { bg: '#F1F5F9', col: '#0F172A', text: 'section', height: '75vh' }, // Light Grey & Navy
    { bg: '#312E81', col: '#A5B4FC', text: 'section', height: '45vh' },    // Indigo & Lavender
    { bg: '#064E3B', col: '#6EE7B7', text: 'section', height: '65vh' }     // Emerald Green & Mint
  ]
  const handleClick = () => {
    if (divRef.current) {
      const div = divRef.current
      window.scrollTo({
        top: div.offsetTop - 100,
        behavior: 'smooth'
      })
      setN((p) => { return dataArray.length - 1 > p ? p + 1 : 0 })
    }
  }
  return (
    <section className={`py-10`}>
      <div className={`flex pb-5 flex-col gap-2 items-center`}>
        <h3 className={`text-3xl tracking-wide`}>Scroll to seactions</h3>
        <div onClick={handleClick} className={`text-3xl bg-black text-white flex items-center gap-4 cursor-pointer px-4 py-1.5 rounded-2xl `}>Go To section <span className={`text-5xl text-fuchsia-600`}>{n + 1}</span></div>
      </div>
      {dataArray.map((obj, idx) => {

        return (
          <div
            key={idx}
            ref={n == idx ? divRef : null}
            style={{ backgroundColor: obj.bg, color: obj.col, height: obj.height }}
            className={`flex justify-center pt-4 text-3xl capitalize tracking-wide`}>{obj.text}
            {idx + 1}</div>
        )
      })}


    </section>
  )
}