"use client";

import { useRouter } from "next/navigation";

export default function ButtonC() {


  const route = useRouter()
  return (
    <div
      onClick={() => { route.push('/recipes') }}
      className={`absolute hover:tracking-wide duration-300 left-0 top-0 bg-black px-8 py-2 z-5000 text-white border cursor-pointer`}

    >Recipes</div>
  )
}