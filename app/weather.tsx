"use client";

import { useEffect, useRef, useState } from "react";
import type { BigObj } from './api/weather/route'
import { LoaderIcon } from "lucide-react";
const init = {
  cod: 1000,
  main: {
    temp: '1',
    humidity: 2

  },
  name: '1',
  sys: {
    country: '1',
  },
  weather: [{
    main: '1',
    description: '1',
  }],
  wind: { speed: 2 }
}
const helper = () => {

  const [searchVal, setSearchVal] = useState('paris')
  const [inputVal, setValue] = useState('')
  const [loading, setLoading] = useState(true)
  const [obj, setObj] = useState<BigObj>(init)
  const [err, setErr] = useState('')
  const [redBorder, setBorder] = useState('')
  const getData = async () => {
    try {
      setLoading(true)
      setErr('')

      const res = await fetch('/api/weather', {


        method: 'POST',
        body: JSON.stringify({
          countyName: searchVal.trim()
        })
      })
      if (res.ok) {
        const data: BigObj = await res.json()
        if (data.cod != 200) {
          throw new Error('some went wrong')

        }
        setLoading(false)
        setErr('')
        setObj(data)
        setBorder('')


      } else {
        throw new Error('some went wrong')
      }
    } catch (error) {
      setLoading(false)
      setErr('some went wrong')
      setBorder('red')


    }

  }
  useEffect(() => {
    setTimeout(() => {
      getData()

    }, 300);
  }, [searchVal])
  const handleSearch = async () => {
    if (inputVal.trim().length == 0) { return }
    if (err.length > 0) {
      getData()
    }
    if (inputVal.trim().length > 0) {
      setSearchVal(inputVal.trim())

    }

    setTimeout(() => {
      setValue('')
    }, 0);

  }
  const getCurrentDate = () => {
    const now = new Date().toLocaleDateString('en-us', {
      year: 'numeric', weekday: 'long', month: 'long', day: 'numeric',
    })



    return now


  }

  return { handleSearch, redBorder, inputVal, setValue, setBorder, err, loading, getCurrentDate, obj }
}
export default function Weather() {

  const { handleSearch, redBorder, inputVal, setValue, setBorder, err, loading, getCurrentDate, obj } = helper()
  return (
    <section className={`py-10 px-2 bg-[#827f7f] min-h-screen flex items-center justify-center`}>
      <div className={`flex border max-w-173 rounded-2xl bg-[#09d134] w-full mx-auto flex-col gap-3 h-118  p-4`}>
        <form className={`flex  justify-center rounded-4xl overflow-hidden w-full `} onSubmit={(e) => { e.preventDefault(); handleSearch() }}>
          <input

            className={` ${(redBorder == 'red' && inputVal.trim().length == 0) ? 'border-4 border-red-500' : 'border border-black'} max-[500px]:flex-none max-[500px]:max-w-50 min-w-30 w-50  rounded-[32px_0_0_32px] outline-0 flex-1 text-2xl border-r-0 px-4 py-1.5`}
            type="text"
            placeholder={'Enter city name'}
            onChange={(e) => { setValue(e.target.value); if (e.target.value.trim().length > 0) { setBorder('') } }}
            value={inputVal} />
          <button type={'submit'} onClick={handleSearch} className={` bg-black cursor-pointer flex justify-center items-center    border border-l-0 border-black   rounded-[0px_32px_32px_0px]  text-white px-4 py-2 text-2xl`}>Search</button>

        </form>




        {err.length > 0 && loading == false && <>

          <div className={` px-2 w-full h-full bg-amber-400 flex justify-center items-center     text-4xl `}>{err}</div>
        </>}
        {loading == true && err == '' && <>
          <div className={`text-2xl w-full h-full flex justify-center items-center`}>
            <LoaderIcon className={`animate-spin`} size={50}></LoaderIcon>
          </div>
        </>}

        {err.length == 0 && loading == false && <>

          <div className={`flex flex-1  rounded-2xl bg-[#9fa7a1]  flex-col gap-3 justify-center items-center text-2xl p-m8`}>
            <span className={`text-3xl font-bold tracking-wide`}>{obj.name}, {obj.sys.country}</span>
            <span className={`font-medium italic`}>{getCurrentDate()}</span>
            <span className={`text-6xl font-bold`}>{obj.main.temp}</span>
            <span className={`text-2xl font-medium`}>{obj.weather[0].description}</span>
            <div className={`p-4 w-full flex justify-evenly font-bold items-center`}>
              <div className={`flex flex-col items-center  p-2`}><span>{obj.wind.speed}</span><span>Wind Spead</span></div>
              <div className={`flex flex-col items-center  p-2`}><span>{obj.main.humidity}</span><span>Humidity</span></div>

            </div>


          </div>
        </>}
      </div>


    </section>
  )
}