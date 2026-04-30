"use client";

import { Loader } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function LoadMore() {
  const [limit, setLimit] = useState(12)
  const [loading, setLoading] = useState(true)
  const [skipNum, setSkipNum] = useState(0)
  const [arrayOfThums, setUrlsArray] = useState<[] | string[]>([])

  const getThumnailsArray = async () => {
    setLoading(true)
    const res =
      await
        fetch(`https://dummyjson.com/products?limit=${limit}&skip=${skipNum}&select=thumbnail&delay=5000`)

    const data = await res.json()


    const productsArrayOfObjects: { thumbnail: string }[] = data.products;


    const urlsArray = productsArrayOfObjects.map((thumbobject) => { return thumbobject.thumbnail })

    setTimeout(() => {
      setLoading(false)
      setUrlsArray([...arrayOfThums, ...urlsArray])
    }, 500);
  }
  useEffect(() => {
    getThumnailsArray()

  }, [skipNum])

  const loadmoreclicked = () => {

    if (skipNum >= 96) {

    } else {
      setSkipNum(skipNum + limit)

    }

  }
  return (
    <div className=" max-w-350 mx-auto">
      <div className={`flex justify-center items-center text-center text-4xl py-8`}>Load More Producst</div>
      {/* products and loading grid container */}
      <div className="grid grid-cols-4 max-[1100px]:grid-cols-3 max-[950px]:grid-cols-2 max-[600px]:grid-cols-1 gap-y-5 gap-x-2 px-8  ">
        {/* imges */}


        {arrayOfThums.map((thumurl, idx) => {
          return (
            <div key={idx} className={`border relative group h-80 flex justify-center items-center`}>
              <div className={`absolute h-0.5 duration-150 transition-all  bg-black group-hover:w-full w-0 bottom-0 left-0`}></div>
              <div className={`absolute h-0 group-hover:delay-150 duration-150 transition-all  bg-black group-hover:h-full w-0.5  bottom-0 right-0`}></div>
              <div className={`absolute  group-hover:delay-300 duration-150 transition-all  bg-black   group-hover:w-full h-0.5  w-0 top-0 right-0`}></div>
              <div className={`absolute  group-hover:delay-450 duration-150 transition-all  bg-black group-hover:h-full w-0.5 h-0 top-0 left-0`}></div>

              <Image
                width={300}
                height={300}
                className={`w-75 h-auto md:hover:scale-110 duration-300 transition-all cursor-pointer `}
                alt={'producst'}
                src={thumurl}
              />


            </div>
          )
        })}


        {/* loading effect */}
        {loading == true && <>

          {Array.from({ length: limit }).map((__, idx) => {
            return (
              <div key={idx} className={`border hover:bg-black/90 duration-300 transition-all  h-80 flex bg-black justify-center items-center`}>
                <Loader style={{ animationDuration: '1.8s' }} className={`animate-spin text-white hover:w-8 hover:h-8 duration-300 transition-all w-10 h-10`} />


              </div>
            )
          })}

        </>}


      </div>

      {/* Button Section */}
      <div className="py-8 flex justify-center items-center">
        <span onClick={loadmoreclicked} className={`text-3xl ${skipNum >= 96 ? 'opacity-20 cursor-auto' : 'opacity-100 cursor-pointer'} font-bold text-white bg-black px-4 py-1.5 `}>Load More</span>
      </div>
    </div>
  );
}









