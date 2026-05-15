"use client"

import { useEffect, useState } from "react"


export default function Square() {
  const dataArray = Array.from({ length: 16 },)
  const trueIndexes = [0, 1, 2, 3, 4, 7, 8, 11, 12, 13, 14, 15]

  const [stopLoopBtn, setStopLoopBtn] = useState(false)


  const [activeIndex, setActiveIndex] = useState(0)
  useEffect(() => {
    if (stopLoopBtn) { return }

    const interv1 = setInterval(() => {
      setActiveIndex((prev) => {
        return prev == trueIndexes.length - 1 ? 0 : prev + 1
      })
    }, 600);
    return () => { clearInterval(interv1) }

  }, [stopLoopBtn])


  return (
    <section className={`bg-black  p-5`}>
      <div
        onClick={() => { setStopLoopBtn((prev) => { return !prev }) }}
        className={`${stopLoopBtn ? 'bg-fuchsia-500' : 'bg-sky-200'} animate-pulse cursor-pointer text-2xl px-4 py-2 capitalize tracking-wide rounded-3xl mx-auto w-fit`}>{stopLoopBtn ? 'turn loop on' : 'turn loop off'}</div>


      <div className={`  grid mx-auto p-14 grid-cols-4  gap-2 w-fit`}>
        {(dataArray.map((__num, idx) => {

          return (
            <div className={'w-15 text-white h-15'} key={idx}>
              {trueIndexes.includes(idx) &&
                <span



                  className={`   ${(trueIndexes[activeIndex] == idx && stopLoopBtn == false)
                    ? 'animate-spin scale-110 border-sky-500 text-sky-500' : ' border-transparent '}
                 cursor-pointer rounded-full w-full h-full flex border  
                justify-center items-center text-2xl`}>{idx + 1}</span>
              }



            </div>
          )
        }))}
      </div>
    </section>
  )
}