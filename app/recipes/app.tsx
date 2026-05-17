"use client";

import { useEffect, useState } from "react";
import Search from "./search";
import { useSelector } from "react-redux";
import { AppState } from "../redux";
import Image from "next/image";
import ListOfRecipes from "./listofrecipes";
import { useRouter } from "next/navigation";
import { ArrowLeftIcon } from "lucide-react";
interface RecipeObjectShape {
  id: string,
  image_url: string
  publisher: string
  title: string

}
interface BigOhbShape { status: string, results: number, data: { recipes: RecipeObjectShape[] } }





export default function App() {
  const { searchVale, getDateRecipes } = useSelector((state: AppState) => { return state.recipesSlice })
  const route = useRouter()


  return (
    <section className={``}>
      <div
        onClick={() => { route.back() }}
        className={`absolute cursor-pointer px-6 py-2 left-0 bg-black text-white top-0 text-2xl`}>
        <ArrowLeftIcon size={30} />
      </div>
      <Search ></Search>


      <ListOfRecipes></ListOfRecipes>

    </section>
  )
}