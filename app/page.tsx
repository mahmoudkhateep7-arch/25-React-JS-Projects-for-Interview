"use client";

import { useState } from "react";
import './style.css'
import TopHeadr from "./topheader";
import Title from "./title";
import Accordian from "./accordian";
import HexRgb from "./hexrgb";
import Ratings from "./ratings";
import Slider from "./slider";
import LoadMore from "./loadmore";
// an array here
export default function Page() {
  const [index, setIndex] = useState(-2)
  return (
    <div className={`min-h-screen bg-white`}>
      <TopHeadr></TopHeadr>
      <Title></Title>
      <Accordian></Accordian>
      <HexRgb></HexRgb>
      <Ratings></Ratings>
      <Slider></Slider>
      <LoadMore></LoadMore>

    </div>
  )
}