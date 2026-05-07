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
import TicTac from "./tictak";
import FeatureFlag from "./featureFlage";
import { useSelector } from "react-redux";
import { AppState } from "./redux";
export default function Page() {
  const {showAccoridan,showRandomColor,showTicTac,showTreeView,showlightDarkMode}
  =useSelector((state:AppState)=>{return state.showComponentsSlice})
  return (
    <div className={`min-h-screen bg-white`}>
        <TopHeadr></TopHeadr>
        <Title></Title>
        {showAccoridan&&
        <Accordian></Accordian>
        
        }
        {showRandomColor&&
        <HexRgb></HexRgb>
        
        }
        <Ratings></Ratings>
        <Slider></Slider>
        <LoadMore></LoadMore>
        {showTreeView&&
        <TreeNode></TreeNode>
        }
        <QrCode />
        {showlightDarkMode&&
        < DardLightMode></DardLightMode>
        }
        <GettingDummyData></GettingDummyData>
        <Tabs></Tabs>
        <GithubFinder></GithubFinder>
        <SearchFilter></SearchFilter>
        {showTicTac&&
      <TicTac></TicTac>
        }
      <FeatureFlag></FeatureFlag>
    </div>
  )
}