"use client";

import { useEffect, useRef, useState } from "react";

const Helper1 = ({ textString, btnString, tergetRef }: { tergetRef: React.RefObject<HTMLDivElement | null>, textString: string, btnString: string }) => {
  const toTarget = () => {
    if (tergetRef.current) {
      const targetEl = tergetRef.current;
      let a = 10;
      if (window.innerWidth > 1000) {
        a = 150
      } else if (window.innerWidth > 700) {
        a = 250
      } else {
        a = 150
      }
      window.scrollTo({

        top: targetEl.offsetTop - a,
        behavior: 'smooth'

      })
    }

  }
  return (
    <div className={`flex py-5 flex-col gap-4 items-center`}>

      {btnString.includes('scroll to bottom') ?
        <>
          <h4 className={`text-3xl`}>{textString}</h4>
          <div onClick={toTarget} className={`px-4 py-1.5 bg-white text-black cursor-pointer rounded-xl text-2xl`}>{btnString}</div>

        </> : <>

          <div onClick={toTarget} className={`px-4 py-1.5 bg-white text-black cursor-pointer rounded-xl text-2xl`}>{btnString}</div>
          <h4 className={`text-3xl`}>{textString}</h4>

        </>
      }




    </div>
  )
}
const useHook = () => {
  const [loading, setLoading] = useState(1)
  const [productsArray, setProductsArray] = useState<[] | string[]>([])

  useEffect(() => {
    const getProducts = async () => {
      const res = await fetch('https://dummyjson.com/products');
      const data = await res.json()
      const arr: { title: string }[] = (data.products)
      const newArr = arr.map((obj) => { return obj.title })
      setTimeout(() => {
        setLoading(3)
        setProductsArray(newArr)

      }, 1000);

    }
    getProducts()
  }, [])
  return { productsArray, loading }
}

export default function ScrollUpandDown() {
  const { productsArray, loading } = useHook()
  const topRef = useRef<HTMLDivElement>(null)
  const bottomRef = useRef<HTMLDivElement>(null)

  return (
    <section className={`py-10 bg-black text-white`}>
      {/* top sec */}
      <div ref={topRef}>
        <Helper1 tergetRef={bottomRef} btnString={'scroll to bottom'} textString={'this is top section'} />

      </div>
      <div className={`flex flex-col gap-5 items-center`}>
        {loading == 1 ?
          <>
            <h3 style={{ animationDuration: '.5s' }} className={`animate-spin`}>ooo</h3>

          </> : <>

            {productsArray.map((item, idx) => {
              return (
                <span key={idx}>{item}</span>
              )
            })}
          </>
        }
      </div>



      {/* bottom section */}
      <div ref={bottomRef}>
        <Helper1 tergetRef={topRef} btnString={'scroll to top'} textString={'this is bottom section'} />

      </div>
    </section>
  )
}