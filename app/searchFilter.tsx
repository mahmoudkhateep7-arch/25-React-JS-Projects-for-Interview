"use client";

import { useEffect, useState } from "react";
const noMatchesFound = 'No Matches Found'
export default function FilterSearch() {
  const [names, setNames] = useState(['Williams', 'jake', 'dede'])
  const [filteredNames, setFilteredNames] = useState<[] | string[]>([])
  const [inputValue, setInputValue] = useState('William')
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value.trim().length == 0) { setInputValue('') }
    else { setInputValue(e.target.value) }

  }
  useEffect(() => {
    const getDate = async () => {
      const res = await fetch('https://dummyjson.com/users')
      const dataObj = await res.json()
      const arrayOfUsers: { firstName: string, lastName: string, madinName: string }[] = (dataObj.users)
      const stringArray = arrayOfUsers.map((objItem) => { return `${objItem.firstName} ${objItem.lastName}` })
      // const stringArray=dataObj.users.map((objItem))
      setNames(stringArray)
    }
    getDate()
  }, [])
  useEffect(() => {
    let same = false
    if (inputValue.length > 0) {
      const arr = [...names].filter((personName) => {
        if (personName == inputValue) { same = true }
        if (personName.includes(inputValue)) {
          return inputValue
        } else { }

      })
      if (arr.length == 0) {
        setFilteredNames([noMatchesFound])
      }
      else {
        if (same == false) {
          setFilteredNames(arr)
        } else {
          setFilteredNames([])
        }
      }
    } else {
      setFilteredNames([])
    }

  }, [inputValue, names])
  const handleSpanClick = (e: React.MouseEvent<HTMLSpanElement>) => {
    const target = e.target as HTMLSpanElement
    const innetext = target.innerText
    if (innetext == noMatchesFound) { } else {
      setInputValue(innetext)

    }
  }

  return (
    <section className={`py-10 bg-[#333] flex  justify-center items-center`}>
      {/* span for num of results */}
      <div className={`relative bg-amber-50 max-[800px]:pt-5`}>
        <div className={`max-w-200 w-full z-0 text-white  bg-[#595858c4] p-1 sm:p-4 md:p-6 h-40 sm:h-55 md:h-60 lg:h-80 overflow-auto  mx-auto flex flex-col md:gap-5  gap-3`}>
          <div className={`sticky top-0`} ><input onChange={handleInputChange} value={inputValue} className={`border md:text-2xl px-4 py-1.5 w-full bg-black text-white`} type="text" placeholder={'Enter a name'} /></div>
          {inputValue.length == 0 && <span className={`text-2xl tracking-wide  flex justify-center`}>Start Typing Now</span>}

          {filteredNames.length > 0 && <>

            {filteredNames.map((name, idx) => {

              return (<span onClick={handleSpanClick} className={`${name == noMatchesFound ? 'text-red-500' : 'border-b cursor-pointer duration-300 transition-all hover:tracking-wider'} md:text-2xl`} key={idx}>{name}</span>)
            })}
          </>}

          {filteredNames.length > 0 && filteredNames[0] != noMatchesFound && <>

            <span className={`absolute z-10 backdrop-blur-2xl top-0 left-2`}>{filteredNames.length} {filteredNames.length > 1 ? 'Results' : 'Result'}</span>
          </>}

          {filteredNames.length > 0 && filteredNames[0] == noMatchesFound && <>

            <span className={`absolute z-10 backdrop-blur-2xl  flex  top-0 left-2`}>Zero  {filteredNames.length > 1 ? 'Results' : 'Result'}</span>
          </>}

        </div>
      </div>
    </section>
  )
}