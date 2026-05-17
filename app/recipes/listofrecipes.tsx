"use client";

import { useEffect, useState } from "react";
import Search from "./search";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, AppState, updateGetDateRecipes } from "../redux";
import Image from "next/image";
import Link from "next/link";
export interface RecipeObjectShape {
  id: string,
  image_url: string
  publisher: string
  title: string

}
interface BigOhbShape { status: string, results: number, data: { recipes: RecipeObjectShape[] } }





export default function ListOfRecipes() {

  const dispatch: AppDispatch = useDispatch()

  const [loading, setLoading] = useState(false)
  const [arrayRecipes, setArrayRecipes] = useState<[] | RecipeObjectShape[]>([])
  const { searchVale, getDateRecipes } = useSelector((state: AppState) => { return state.recipesSlice })
  const forkfiyRecipes = async () => {

    try {
      setLoading(true)
      settexto('loading')
      setArrayRecipes([])

      const res = await fetch(`https://forkify-api.jonas.io/api/v2/recipes?search=${searchVale}`)
      if (!res.ok) { throw new Error('server err') }
      const comingObj: BigOhbShape = await res.json()
      if (comingObj.results == 0) {
        settexto('no found recipes')
      } else {
        setArrayRecipes(comingObj.data.recipes)
      }


    } catch (error) {
      settexto('some went wrong')


    } finally {
      setLoading(false)
      // dispatch(updateGetDateRecipes(false))

    }

  }
  useEffect(() => {
    if (getDateRecipes) {
      forkfiyRecipes()

    }

  }, [getDateRecipes])
  const [texto, settexto] = useState('search for recpies like pizza, banana and more')
  return (
    <section className={``}>

      {arrayRecipes.length > 0 && loading == false &&
        <div className={`grid grid-cols-4 max-[1500px]:grid-cols-3 max-[1100px]:grid-cols-2 max-[740px]:grid-cols-1  p-4  bg-amber-700/20 mx-auto w-fit gap-4  `}>
          {arrayRecipes.map((itemObject, idx) => {
            if (idx == 1) { return }


            return (
              <div
                className={`min-w-80 max-w-130 flex flex-col bg-white p-5 gap-5`} key={itemObject.id}>
                <div className={`flex-1 perspective-[3000px] overflow-hidden`}>
                  <Image className={`w-full rounded-2xl hover:rotate-x-180 duration-500 transition-all
                       h-40 object-cover`} alt={itemObject.title} width={400} src={itemObject.image_url} height={400} />
                </div>
                <h4 className={`text-sm text-green-600`}>{itemObject.publisher}</h4>
                <p className={`text-2xl font-bold`}>{itemObject.title}</p>
                <Link
                  className={`bg-black text-white  w-fit  px-8 py-2 rounded-2xl text-2xl`}
                  href={`/recdetails/${itemObject.id}`}>Recipe details</Link>
              </div>
            )
          })}
        </div>
      }

      {loading == false && arrayRecipes.length == 0 &&

        <>
          <div className={`text-3xl font-bold text-center py-2`}>
            {texto}..
          </div>
        </>
      }

      {loading == true && arrayRecipes.length == 0 &&

        <>
          <div className={`text-3xl font-bold text-center py-2`}>
            {texto}<span className={`animate-spin`}>--</span>          </div>
        </>
      }

    </section>
  )
}