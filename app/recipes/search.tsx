"use client"

import Link from "next/link"
import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { AppDispatch, AppState, updateGetDateRecipes, updateSearchValue } from "../redux"
import { useRouter } from "next/navigation"


export default function Search() {
  const { searchVale } = useSelector((state: AppState) => { return state.recipesSlice })
  const [singalsring, setSignalString] = useState(searchVale)

  const dispatch: AppDispatch = useDispatch()
  const route = useRouter()

  const handleSubmit = (formData: FormData) => {
    if (searchVale == singalsring) {
      console.log(`alaaaaaaaaaaaawwwwwwwwww`)
      return
    } else {
      setSignalString(searchVale)
    }
    const recipeName = formData.get('recipeName')
    if (typeof recipeName == 'string') {
      const trimmedValue = recipeName.trim()

      if (trimmedValue.length > 0) {
        dispatch(updateGetDateRecipes(true))
        route.push('/recipes')
        console.log('aaaaaaaaaaaaaaaaaaaa')

      }
    }


  }
  return (
    <div className={`flex items-center max-[850]:flex-col gap-2 justify-between  bg-amber-100 px-10 py-10`}>
      <h2 className={`text-3xl `}>Food Recipes</h2>
      <form action={handleSubmit}>
        <input onChange={(e) => {
          dispatch(updateGetDateRecipes(false));

          dispatch(updateSearchValue(e.target.value))
        }} value={searchVale} type="text" placeholder={'Enter Items'}
          name={'recipeName'}
          className={`border-none outline-none bg-white px-4 py-2
            
            max-[850]:w-80 w-100  h-15 rounded-full text-2xl  `}
        />
      </form>
      <div className={`flex gap-3 items-center `}>
        <Link href={'/'} className={` border-b border-transparent hover:border-black`}>Home</Link>
        <Link href={'/fav'}
          className={`cursor-pointer border-b border-transparent
          hover:border-black`}>Favorates</Link>
      </div>
    </div>
  )
}