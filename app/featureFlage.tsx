"use client";

import { useEffect, useState } from "react";
import { ObjResShape } from "./api/getrandomdata/route";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, AppState, fillState, updateObj } from "./redux";


export default function FeatureFlag() {
  const [obj, setObj] = useState<{} | ObjResShape>({})

  const dispatch: AppDispatch = useDispatch()
  const getrandomdata = async () => {
    const res = await fetch('/api/getrandomdata')
    const dataObj: ObjResShape = await res.json()
    setObj(dataObj)
    dispatch(fillState(dataObj))
    setTimeout(() => {
    }, 100);

  }

  useEffect(() => {
    getrandomdata()
  }, [])
  const lkkl=useSelector((state:AppState)=>{return state.showComponentsSlice})

  useEffect(()=>{
setObj(lkkl)
  },[lkkl.newProp])

  const arr: { key: string, val: boolean }[] = Object.entries(obj).map(([key, val]) => { return { key, val } })
  const handleclick = (key: string) => {
    dispatch(updateObj(key))
  }
  return (
    <section className={`px-3 py-2 w-full text-white flex items-center bottom-0 max-[850px]:h-auto z-1000 fixed bg-black `}>
      <div className={`flex gap-1 max-[850px]:grid max-[850px]:grid-cols-3 max-[600px]:hidden   justify-evenly w-full`}>
        {arr.length == 0 && <></>}
        {arr.length > 0 && <>
          {arr.map((inseiderObj, idx) => {
            if(inseiderObj.key=='newProp'){return}
            return (
              <div className={`cursor-pointer  flex items-center justify-center`} onClick={() => { handleclick(inseiderObj.key) }} key={idx}>{inseiderObj.key} is {inseiderObj.val == true ? 'on' : 'off'}</div>
            )
          })}
        </>}


      </div>


    </section>
  )
}