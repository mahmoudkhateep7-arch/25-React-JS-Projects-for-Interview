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
import TreeNode from "./treeview";
import QrCode from "./qrcode";
import DardLightMode from "./switchMode";
import GettingDummyData from "./gettingdummydata";
import Tabs from "./tabs";
import GithubFinder from "@/gitHubFinder";
import SearchFilter from "./searchFilter";
export default function Page() {
  return (
    <div className={`min-h-screen bg-white`}>
      <TopHeadr></TopHeadr>
      <Title></Title>
      <Accordian></Accordian>
      <HexRgb></HexRgb>
      <Ratings></Ratings>
      <Slider></Slider>
      <LoadMore></LoadMore>
      <TreeNode></TreeNode>
      <QrCode />
      < DardLightMode></DardLightMode>

      <GettingDummyData></GettingDummyData>




      <Tabs></Tabs>

      <GithubFinder></GithubFinder>

      <SearchFilter></SearchFilter>
    </div>
  )
}