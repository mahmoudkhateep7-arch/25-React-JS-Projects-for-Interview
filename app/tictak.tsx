"use client";

import { Circle, Plus, X } from "lucide-react";
import { useEffect, useState } from "react";
import { IoAtCircleOutline } from "react-icons/io5";

const arrayOfEmtyStrings = Array.from({ length: 9 }, () => { return '' })
export default function TicTac() {
  const [draw,setDraw]=useState(1)
  const [bordArray, setBoard] = useState(arrayOfEmtyStrings)
  const [player, setPlayer] = useState<'X' | 'O'>('X')
  const [Winnerrr, setWinner] = useState<'X' | 'O' | ''>('')


  const handleclickspan = (idx: number) => {
    if (Winnerrr == '') {
      const newArr = [...bordArray]
      if (newArr[idx] == '') {
        newArr[idx] = player
        setBoard(newArr)
        setPlayer((p) => { return p == 'O' ? 'X' : 'O' })


      }
    }
  }
  const DecideWinner = () => {
    const winnerCasesArray = [
      [0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 4, 8], [2, 4, 6],
      [0, 3, 6], [1, 4, 7], [2, 5, 8]
    ]
    let winner: ('' | 'X' | 'O') = ''
   const a= winnerCasesArray.map(([one, two, three], idx) => {
      if (bordArray[one] == bordArray[two] && bordArray[one] == bordArray[three]) {
        if (bordArray[one] == 'X') {
          winner = "X"
        }
        if (bordArray[one] == 'O') {
          winner = 'O'
        }

      }
      return '2'
    })
    if (winner != '') {
      setWinner(winner)
    }

  }

  useEffect(() => {
    DecideWinner()
    const arr=[...bordArray]
    const filteredArr=arr.filter((str)=>{
      return str!=''
    })
    if(filteredArr.length==9){
      setTimeout(() => {
        if(Winnerrr==''){
        setDraw(2)

        }
      }, 0);
      
    }


  }, [player, bordArray])
  const handleReset = () => {
    setBoard(arrayOfEmtyStrings)
    setPlayer('X')
    setWinner('')
    setDraw(1)

  }
 
  return (
    <section className={` p-10`}>
      <div className={`max-w-100 text-white mx-auto bg-[#333333c8] min-h-50 p-1 grid grid-cols-3 gap-1`}>
        {bordArray.map((str, idx) => {
          return (
            <span onClick={() => { handleclickspan(idx) }} className={`flex h-15 ${(Winnerrr!=''||draw==2)?'opacity-25':'opacity-100'} cursor-pointer justify-center items-center bg-[#333]  text-2xl`}
             key={idx}>{str==''?'':str=='X'?<X />:<Circle />}</span>
          )
        })}
        <div className={`col-span-3 py-2 items-center text-center text-2xl bg-gray-500 flex justify-center gap-2`}>
         {draw==1&&<>
         
          {Winnerrr == '' && <>
            Next Player is <span>{player=='X'?<X size={25} className={`relative top-0.75`} />:<Circle size={25} className={`relative top-0.75`} />}</span>

          </>}
            {Winnerrr != '' && <>
            Winner  is <span>{Winnerrr}</span>

          </>}
         </>}
          {draw==2&&<>
          It is a draw
         
            

         </>}

        </div>
        <div onClick={handleReset} className={` cursor-pointer col-span-3 py-2 text-center text-2xl flex justify-center bg-red-700 `}>Reset </div>



      </div>
    </section>
  )
}