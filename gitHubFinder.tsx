"use client"

import Image from "next/image"
import { useEffect, useState } from "react"
interface DataObj {
  following: string,
  name: string, followers: string, html_url: string, bio: string, public_repos: string, created_at: string, avatar_url: string
}
export default function GithubFinder() {
  const [loading, setLoading] = useState(true)
  const [userName, setUserName] = useState('mahmoudkhateep7-arch')
  const [obj, setObj] = useState<DataObj>({ html_url: '', following: '', followers: '', avatar_url: '', bio: '', created_at: '', name: '', public_repos: '' })
  const [inputVal, setInputval] = useState('')
  const [errormessage, setErrorMessage] = useState('')
  const getUserData = async () => {
    try {
      setLoading(true)
      setErrorMessage('')
      const res = await fetch(`https://api.github.com/users/${userName}`)
      const dataObj = await res.json()
      const joinedIn: string = dataObj.created_at
      const firstPart = joinedIn.split('T')[0]
      const arrayOf3 = firstPart.split('-');
      const monthNumber = Number(arrayOf3[1])
      const date = new Date()
      date.setMonth(monthNumber - 1)
      const mothName = new Intl.DateTimeFormat('en-us', { month: 'long' }).format(date)
      const cretedAt = `${arrayOf3[2]} - ${mothName} -- ${arrayOf3[0]}`
      setTimeout(() => {
        setLoading(false)
        setObj({ ...dataObj, created_at: cretedAt })

      }, 1000);
    } catch (error) {
      setTimeout(() => {
        setLoading(true)
        setErrorMessage('not found')
      }, 1000);

    }

  }
  useEffect(() => {
    const getData = async () => {
      await getUserData()
    }
    getData()
  }, [userName])
  const handleOnechane = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputval(e.target.value)
  }
  const getNewData = () => {
    setUserName(inputVal)
  }


  return (
    <section className={`py-10`}>
      {/* search input and button */}
      <div className={`flex bg-black text-white p-4 justify-center`}>
        <input onChange={handleOnechane} value={inputVal} className={`flex-1 border-l border-t max-w-100 border-b px-4 py-2 outline-none`} placeholder={'Enter a name'} type="text" />
        <span onClick={getNewData} className={'border-t bg-white text-black text-2xl border-b border-r border-l border-white cursor-pointer justify-center  px-2 py-2 flex items-center'}>Search</span>
      </div>
      <h5 className={`h-10`}></h5>
      <div className={`px-0`}>
        <div className={`max-w-200 min-h-44  relative flex flex-col gap-4 text-center mx-auto p-4  bg-black text-white`}>
          {/* absoulte  */}
          {loading == true &&
            <div className={`absolute z-4 flex justify-center items-center inset-0 bg-[#444]`}>
              {errormessage.length > 0 ?
                <span>{errormessage}</span>
                :
                <span style={{ animationDuration: '1s' }} className={`animate-spin`}>ooo</span>

              }
            </div>
          }
          {loading == false &&
            <>

              <div className={` justify-center flex p-2`}>
                <Image className={`rounded-full  `}
                  alt={'avatar'} src={obj.avatar_url}
                  width={100} height={100} /></div>
              <div className={`flex max-[370px]:text-sm gap-6 justify-center`}>
                <a target={'_blank'} className={`text-blue-500`} href={obj.html_url}>{obj.name}</a>
                user joined on {obj.created_at}</div>
              <div className={`flex gap-10 justify-center text-xl`}>public repos   <span> {obj.public_repos}</span></div>
              <div className={`flex gap-10 justify-center text-xl`}>followers   <span> {obj.followers}</span> </div>
              <div className={`flex gap-10 justify-center text-xl`}>following    <span> {obj.following}</span> </div>

            </>}

        </div>

      </div>
    </section>
  )
}