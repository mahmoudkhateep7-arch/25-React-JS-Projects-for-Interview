"use client";

import { useEffect, useRef, useState } from "react";
interface ObjectShape {
  title: string;
  author: string;
  para: string;
}

const arr: ObjectShape[] = [
  {
    title: "The Art of Control",
    author: "Mikel Arteta",
    para: "Arsenal's tactical evolution focuses on positional fluidity and high-intensity pressing to dominate the final third."
  },
  {
    title: "Mastering the Half-Space",
    author: "Pep Guardiola",
    para: "Manchester City utilizes inverted full-backs to create overloads in midfield, ensuring constant ball retention and defensive stability."
  },
  {
    title: "Verticality and Pace",
    author: "Hansi Flick",
    para: "Barcelona's new era emphasizes rapid transitions and a high defensive line to catch opponents off balance during turnovers."
  },
  {
    title: "The Legacy of the Counter",
    author: "Alvaro Arbeloa",
    para: "Real Madrid's philosophy remains rooted in clinical counter-attacking football, leveraging the world-class speed of their elite wingers."
  },
  {
    title: "Heavy Metal Football",
    author: "Jürgen Klopp",
    para: "The 'Gegenpressing' system relies on immediate ball recovery after possession loss, turning defensive moments into offensive opportunities."
  },
  {
    title: "The Italian Wall",
    author: "Carlo Ancelotti",
    para: "Adaptability is key; balancing a rock-solid low block with the creative freedom of generational talents in the midfield."
  }
];
export default function Tabs() {
  const [randomIndex, setRandomIndex] = useState(0)
  useEffect(() => {
    const randomNumber = Math.floor(Math.random() * arr.length)
    setRandomIndex(randomNumber)

  }, [])
  useEffect(() => {
    const interval1 = setInterval(() => {
      setRandomIndex((p) => { return p != arr.length - 1 ? p + 1 : 0 })
    }, 4000);
    return () => { clearInterval(interval1) }
  }, [randomIndex])
  return (
    <section className={`overflow-hidden py-10`}>


      <div className={`flex text-2xl px-4 gap-1 max-[900px]:grid-cols-2 max-[600px]:text-sm max-[470px]:grid-cols-1 max-[1600px]:text-xl max-[1400px]:grid max-[1400px]:grid-cols-3 justify-center py-3`}>
        {arr.map((item, idx) => {
          return (
            <div
              onClick={() => { setRandomIndex(idx) }}
              className=
              {`px-4 py-1.5 duration-500 transition-all cursor-pointer  ${randomIndex == idx ? 'bg-black text-white relative  scale-105 z-4 min-[1600px]:scale-110' : 'bg-white border'}`}
              key={idx}>{item.title}</div>
          )
        })}
      </div>
      <div key={randomIndex} className={`pt-5 overflow-hidden px-8 transition-all duration-1000  items-center text-xl`}>

        <div data-aos='slide-left' key={randomIndex} className={`  max-w-200 mx-auto`} >
          <h4 className={`transition-all duration-1000 text-2xl font-semibold`}> {arr[randomIndex].author}</h4>
          <p className={`max-[600px]:text-sm pt-2`}>{arr[randomIndex].para}</p>
        </div>

      </div>
    </section>
  )
}