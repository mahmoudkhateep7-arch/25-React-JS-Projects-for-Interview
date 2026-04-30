"use client";

import { Star, StarOff, Stars } from "lucide-react";
import { useEffect, useState } from "react";

export default function Ratings() {
  const startsCount = 15
  const [yellowStars, setYellowStars] = useState(0)
  const [mounted, setmounted] = useState(false)
  useEffect(() => {

    let randomnumber = Math.random()
    if (randomnumber == 0) { randomnumber = 0.1 }
    setYellowStars(Math.ceil(randomnumber * (startsCount - 1)))
    setmounted(true)
  }, [])
  if (mounted == false) { return }
  return (

    <div className={`py-8`}>
      <h3 className={`text-center text-4xl pb-8 font-bold`}>Star Rating</h3>
      <div className={`flex  justify-center gap-2`}>
        {Array.from({ length: startsCount }).map((__, idx) => {

          return (
            <div onClick={() => { setYellowStars(idx + 1) }} className={`cursor-pointer`} key={idx}>
              {idx < yellowStars ? <Star className={`text-[#1B5E20] scale-125`} fill={'#1B5E20'} /> : <StarOff fill={'#5D4037'} className={`text-[#5D4037]`} />}
            </div>
          )
        })}
      </div>
    </div>
  )
}