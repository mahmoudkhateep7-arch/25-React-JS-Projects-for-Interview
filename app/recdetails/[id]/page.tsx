import Search from "@/app/recipes/search";
import { Metadata } from "next";
import OneRecipeGet from "./oneRecipeget";
import { RecipeObjectShape } from "@/app/recipes/listofrecipes";
const url = 'https://forkify-api.jonas.io/api/v2/recipes/'


export async function generateMetadata({ params }: { params: Promise<{ id: string }> })
  : Promise<Metadata> {
  const { id } = await params
  try {
    const res = await fetch(`${url}${id}`)
    if (!res.ok) { throw new Error('server err') }
    const data: { data: { recipe: RecipeObjectShape } } = await res.json()
    return { title: data.data.recipe.title }

  } catch (error) {
    return {
      title: 'not found'
    }

  }
}

export default async function PageHome({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  console.log(id)


  return (
    <>
      <Search></Search>
      <OneRecipeGet id={id}></OneRecipeGet>

    </>
  )
}