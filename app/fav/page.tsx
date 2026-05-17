"use client"
import { useState } from "react";
import Search from "../recipes/search";
import { comingObjshape } from "../recdetails/[id]/oneRecipeget";
import Image from "next/image";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, AppState, removeItem } from "../redux";



export default function PageHome() {
  const favArray = useSelector((state: AppState) => { return state.favSlice })
  const dispatch: AppDispatch = useDispatch()

  return (
    <div>
      <Search></Search>
      <div className={`h-5`}></div>
      <div className={` grid grid-cols-4 max-[1500px]:grid-cols-3 max-[1100px]:grid-cols-2 max-[740px]:grid-cols-1    bg-amber-700/20 mx-auto w-fit gap-4
         `}>
        {favArray.map((obj) => {

          return (
            // <div key={obj.data.recipe.id}></div>
            <div
              className={`min-w-70 max-w-120 flex flex-col bg-white p-5 gap-5`} key={obj.data.recipe.id}>
              <div className={`flex-1 perspective-[3000px] overflow-hidden`}>
                <Image className={`w-full rounded-2xl hover:rotate-x-180 duration-500 transition-all   h-40 object-cover`}
                  alt={obj.data.recipe.title} width={400} src={obj.data.recipe.image_url} height={400} />
              </div>
              <h4 className={`text-sm text-green-600`}>{obj.data.recipe.publisher}</h4>
              <p className={`text-2xl font-bold`}>{obj.data.recipe.title}</p>
              <div
                onClick={() => { dispatch(removeItem(obj.data.recipe.id)) }}
                className={`bg-black cursor-pointer text-white  w-fit  px-8 py-2 rounded-2xl text-2xl`}
              >remove from fav</div>
            </div>
          )
        })}
      </div>
    </div>
  )
}