"use client";

import { X } from "lucide-react";
import { useEffect, useState } from "react";

export default function PopOut({ IsOpen, setIsOpen }: { IsOpen: boolean, setIsOpen: React.Dispatch<React.SetStateAction<boolean>> }) {
  const ebHandClickss = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target == e.currentTarget) {
      setIsOpen(false)
    }
  }
  const closeHandle = () => {

    setIsOpen(false)

  }
  useEffect(() => {
    if (IsOpen) {
      document.body.style.overflow = 'hidden'
    }
    return () => { document.body.style.overflow = 'unset' }
  }, [])

  return (
    <div data-aos='slide-down' onClick={ebHandClickss} className={`h-screen top-0 fixed w-full flex justify-center items-center bg-[#33333381] z-1000`}>
      <div className={`bg-white text-black min-w-100 p-3 flex flex-col gap-4 max-[420px]:min-w-78`}>
        <div className={`flex justify-end items-center  `}><X onClick={() => { closeHandle() }} className={`size-8 cursor-pointer`} /></div>
        <h4 className={`text-3xl`}>Number Must be 50 Or less</h4>

      </div>
    </div>
  )
}