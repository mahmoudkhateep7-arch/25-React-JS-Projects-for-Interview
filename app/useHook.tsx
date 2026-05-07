"use client"
import { Loader2Icon } from "lucide-react"
import { useEffect, useRef, useState } from "react"
interface ObjShape {
  firstName: string, lastName: string
}
const useHook = (ure: string, n: number) => {
  const [loading, setLoading] = useState(true)
  const [data, setData] = useState<[] | ObjShape[]>([])
  const getData = async () => {
    setLoading(true)
    try {
      const res = await fetch(ure);
      if (!res.ok) {
        setLoading(false)
        setData([{ firstName: 'some', lastName: 'err' }])
        return

      }
      const resData = await res.json()
      const usersArray: ObjShape[] = resData.users
      setData(usersArray)


    } catch (error) {
      setData([{ firstName: 'some', lastName: 'err' }])

    } finally {
      setLoading(false)

    }
  }
  useEffect(() => {
    if (n == 2) { return }
    setTimeout(() => {
      getData()

    }, 3000);
  }, [n])

  return { loading, data, setLoading, setData }
}

const url = 'https://dummyjson.com/users'
export default function Test() {
  const [n, setN] = useState(2)
  const { data, loading } = useHook(url, n)
  const boxRef = useRef(null)
  useEffect(() => {
    const observer = new IntersectionObserver(([entrey]) => {
      if (entrey.isIntersecting) {
        setN(10)
        observer.disconnect()
      }

    })
    if (boxRef.current) { observer.observe(boxRef.current,) }
    return () => { observer.disconnect() }

  }, [])
  return (
    <div ref={boxRef} className={`flex justify-center items-center min-h-screen`}>
      {loading && <h2 className={`animate-spin`}><Loader2Icon /></h2>}
      {loading == false && <div className={`flex flex-col items-center gap-2 p-4`}>
        {data.map((obj, idx) => {
          return (
            <span key={idx}>{obj.firstName} {obj.lastName}</span>
          )
        })}
      </div>}
    </div>
  )
}