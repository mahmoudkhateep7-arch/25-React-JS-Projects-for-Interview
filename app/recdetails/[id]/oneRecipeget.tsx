"use client"

import { RecipeObjectShape } from "@/app/recipes/listofrecipes"
import { AppDispatch, updateFavObject } from "@/app/redux"
import { ArrowLeftIcon } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"
import { useDispatch } from "react-redux"
const url = 'https://forkify-api.jonas.io/api/v2/recipes/'
export interface comingObjshape {
  data: {
    recipe: {
      id: string
      title: string,
      source_url: string,

      image_url: string,
      publisher: string,
      ingredients: { quantity: number, unit: string, description: string }[]
      ,
    },
  }
}

export default function OneRecipeGet({ id }: { id: string }) {
  const router = useRouter()
  const [recObj, setObjRec] = useState<2 | comingObjshape>(2)
  const [texto, setTexto] = useState('')
  const [loading, setLoading] = useState(true)
  const getOneObj = async () => {
    try {
      const res = await fetch(`${url}${id}`)
      if (!res.ok) { throw new Error('server err') }
      const data: comingObjshape = await res.json()
      setObjRec(data)
      console.log(data)
      setLoading(false)
    } catch (error) {
      setLoading(false)
      setTexto('some went wrong')
    }
  }
  useEffect(() => {
    getOneObj()

  }, [])

  const dispatch: AppDispatch = useDispatch()
  return (
    <div className={` relative   `}>
      <div
        onClick={() => { router.back() }}
        className={`fixed cursor-pointer  py-2 left-0 bg-black text-white top-0 text-2xl`}>
        <ArrowLeftIcon size={30} />
      </div>

      {loading && texto == '' && 'loadfing...'}
      {recObj != 2 && loading == false && texto == '' && <>

        <div className={`h-5`}></div>
        <div className={`  flex  px-12 gap-12   bg-black text-white p-5 `}
          key={recObj.data.recipe.id}>

          <div className={`flex-1 w-150  perspective-[3000px] rounded-3xl `}>
            <Image className={` w-full h-130  rounded-3xl overflow-hidden object-cover`} alt={recObj.data.recipe.title} width={600}
              src={recObj.data.recipe.image_url} height={600} />
          </div>

          <div className={`flex-1`}>
            <h4 className={`text-sm text-green-600`}>{recObj.data.recipe.publisher}</h4>
            <p className={`text-2xl font-bold`}>{recObj.data.recipe.title}</p>
            <div className={`pl-5 py-3`}>
              {recObj.data.recipe.ingredients.map((itemObject, idx) => {

                return (
                  <div className={`text-xl gap-2 py-1 flex`} key={idx}>
                    <span>{itemObject.quantity} </span>
                    <span>{itemObject.unit}  of </span>
                    <span>{itemObject.description}</span>


                  </div>
                )
              })}
            </div>
            <div
              onClick={() => {
                dispatch(updateFavObject(recObj));
                router.push('/fav')
              }}

              className={`bg-white text-black cursor-pointer  w-fit  px-8 py-2 rounded-2xl text-2xl`}
            >add to favorate</div>
          </div>
        </div>
      </>}
      {texto != '' && texto}

    </div>
  )
}