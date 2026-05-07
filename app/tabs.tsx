"use client";

import { useEffect, useState } from "react";
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



    </section>
  )
}