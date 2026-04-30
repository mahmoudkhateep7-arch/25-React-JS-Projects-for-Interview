"use client";

import { useState } from "react";
import './style.css'
import TopHeadr from "./topheader";
import Title from "./title";
import Accordian from "./accordian";
import HexRgb from "./hexrgb";
// an array here
export default function Page() {
  const [index, setIndex] = useState(-2)
  return (
    <div className={`min-h-screen bg-white`}>
      <TopHeadr></TopHeadr>
      <Title></Title>
      <Accordian></Accordian>
      <HexRgb></HexRgb>

    </div>
  )
}