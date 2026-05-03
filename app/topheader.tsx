import { useEffect, useState } from "react"


export default function TopHeadr() {
  const [scPercentage, setscrollPercentage] = useState(0)
  useEffect(() => {
    const scrollFn = () => {
      const numfromTop = (window.document.documentElement.scrollTop)
      const height = (document.documentElement.scrollHeight) - document.documentElement.clientHeight
      const percent = (numfromTop / height) * 100
      setscrollPercentage(percent)
    }
    window.addEventListener('scroll', scrollFn)
    return () => { window.removeEventListener('scroll', scrollFn) }
  }, [])
  return (
    <div className={`border-b-8  sticky z-100 top-0 border-[#03ec26]`}>
      <div style={{ width: `${scPercentage}%` }} className={`absolute top-full left-0   h-2 z-20 bg-[#5D4037]`}></div>
      <h2 className={`flex   justify-center items-center text-center px-8 bg-[#1B5E20] text-white h-20 text-2xl font-bold `}>Custom Scroll Indicator</h2>
    </div>
  )
}
