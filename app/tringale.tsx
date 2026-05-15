"use client";

import { useEffect, useState } from "react";


export default function Tringle() {
  const dataArray = Array.from({ length: 16 })
  const [stopLoop, setStopLoop] = useState(false)
  const [activeIndex, setActiveIndex] = useState(0)
  const [trueIndexes, setTrueIndexes] = useState([0, 4, 5, 8, 9, 10, 12, 13, 14, 15])

  useEffect(() => {
    if (stopLoop) { return }
    const interv1 = setInterval(() => {
      setActiveIndex((prev) => {
        return (
          prev == trueIndexes.length - 1 ? 0 : prev + 1
        )
      })
    }, 600);

    return () => { clearInterval(interv1) }
  }, [stopLoop])
  return (
    <section className={`py-10 bg-black text-white`}>
      <div
        onClick={() => { setStopLoop((prev) => { return !prev }) }}
        className={`${stopLoop ? 'bg-fuchsia-500' : 'bg-sky-200'} animate-pulse cursor-pointer text-black text-2xl px-4 py-2 capitalize tracking-wide rounded-3xl mx-auto w-fit`}>{stopLoop ? 'turn loop on' : 'turn loop off'}</div>

      <div className={`w-fit mx-auto py-10 rounded-full `}>
        <div className={`grid grid-cols-4 gap-2`}>
          {dataArray.map((num, idx) => {


            return (
              <div

                key={idx}>
                {trueIndexes.includes(idx) &&


                  <span className={`bg-black 
                    ${(trueIndexes[activeIndex] == idx &&
                      stopLoop == false) ?
                      'animate-spin scale-110 border-sky-500 text-sky-500' : ' border-transparent '} 
                  rounded-full  justify-center border
                  items-center p-3 flex h-15 w-15 text-2xl`}>{idx + 1}</span>}
              </div>
            )
          })}
        </div>
      </div>
    </section >
  )
}