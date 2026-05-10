"use client";

import { useState } from "react";


const myFucion = () => {
  const [show, setShow] = useState(1)


  const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target == e.currentTarget) {
      setShow(2)

    }

  }
  return { show, setShow, handleClick }
}

export default function Clickoutide() {


  const { show, setShow, handleClick } = myFucion()

  return (
    <section onClick={handleClick} className={`bg-amber-600 text-white text-xl p-4 h-100 flex justify-center items-center`}>
      {show == 1 &&
        <div className={`flex flex-col items-center`}>
          <p className={`text-3xl pb-2`}>this is random content</p>
          <p>Click outside the text to hide this content</p>
        </div>
      }
      {show == 2 &&
        <div onClick={() => { setShow(1) }}>
          <p className={`bg-gray-800 cursor-pointer text-white w-fit px-4 py-1.5 text-2xl mx-auto`}>show content</p>
        </div>
      }
    </section>
  )
}