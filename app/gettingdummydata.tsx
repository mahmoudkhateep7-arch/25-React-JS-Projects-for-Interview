"use client"
import { useEffect, useState } from "react"


export default function GettingDummyData() {
  const getDataFromDummyJson = async () => {
    const res = await fetch('https://dummyjson.com/products')
    const data = await res.json()
    return (data.products.map((item: { title: string }) => { return item.title }))
  }
  const [arrayOftitles, setarrayOftitles] = useState<[] | string[]>([])
  useEffect(() => {
    const fetchData = async () => {
      const arr = await getDataFromDummyJson()
      setarrayOftitles(arr)
    }
    fetchData()


  }, [])

  return (
    <section className={`flex flex-col justify-center items-center  py-10`}>
      <h3 className={`text-3xl pb-6`}>Some Dummy data</h3>
      <div className={`flex flex-col gap-4 text-center`}>
        {arrayOftitles.map((item, idx) => {
          return (
            <span key={idx}>{item}</span>
          )
        })}
      </div>
    </section>
  )
}