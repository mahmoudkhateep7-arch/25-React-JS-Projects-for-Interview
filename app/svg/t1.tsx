"use client";


import { X } from "lucide-react";
import { useState } from "react";
const blueEyes = 'blue eyes'
const greenEyes = 'green eyes'
const moveCat = 'move Cat'
const sitStill = 'sit still'
const smile = 'smile'
const sad = 'sad'
export default function T1() {
  const [isCatMoving, setIsCatMoving] = useState(true)
  const [isSad, setIsSad] = useState(false)
  const [eyesColoe, setEyesColor] = useState('green')

  const arrayButtons: { btnText: string }[] = [
    { btnText: greenEyes },
    { btnText: blueEyes },
    { btnText: moveCat },
    { btnText: sitStill },
    { btnText: smile },
    { btnText: sad },



  ]
  const handleClick = (e: React.MouseEvent<HTMLSpanElement>) => {
    const target = (e.target) as HTMLSpanElement;
    const text = (target.innerText)
    if (text.toLowerCase() == greenEyes.toLowerCase()) {
      return setEyesColor('green')

    }

    if (text.toLowerCase() == blueEyes.toLowerCase()) {
      return setEyesColor('blue')

    }
    if (text.toLowerCase() == sad.toLowerCase()) {
      return setIsSad(true)

    }
    if (text.toLowerCase() == smile.toLowerCase()) {
      return setIsSad(false)

    }
    if (text.toLowerCase() == moveCat.toLowerCase()) {
      return setIsCatMoving(true)

    }
    if (text.toLowerCase() == sitStill.toLowerCase()) {
      return setIsCatMoving(false)

    }
  }
  const [hide, setHide] = useState(false)
  return (

    <section className={`p-10 ${hide ? 'tobottom' : ''} fromtop w-full top-0 left-0 right-0 bottom-0 fixed z-3000 bg-[#333] min-h-screen `}>
      <div onClick={() => { setHide(true) }} className={`absolute top-0 right-0 bg-white p-2 cursor-pointer`}><X size={30} /></div>

      <div className={`flex flex-col items-center p-2`}>
        <div className={`  flex gap-3 text-2xl `}>
          {arrayButtons.map((item, idx) => {

            return (
              <span onClick={handleClick}
                className={`px-4 py-2 bg-gray-500 text-white cursor-pointer capitalize`}
                key={idx}>{item.btnText}</span>
            )
          })}
        </div>


        <div style={{ perspective: 1000 }} className={`pt-8`}>

          <svg style={{ animationPlayState: isCatMoving ? 'running' : 'paused' }} className={`rotatey`} width="640" height="480">
            <path d="m119.00002,184.5c0,0 11.25,-157.50001 -36,-164.25001c-47.25,-6.75 156,15.75001 159.75,96.00001c3.75,80.25 29.25,-16.5 137.25,-11.25c108.00001,5.25 53.25001,-111.75001 84.00001,-99.00001l30.24997,12.00001c0,0 81.50003,17.25 44.00003,125.25c-37.5,108 -20.25,174.75 -20.75003,174.75c-0.50003,0 47.75003,120.75 79.25003,123.75c31.5,3 -129,-5.25 -132.75,-3c-3.75,2.25 -24.75,22.50001 -77.25001,27.75001c-52.5,5.25 -167.25,-48.00001 -167.75002,-48.00001c-0.50002,0 -152.49998,35.25001 -153,35.25c-0.50002,-0.00001 116.75002,-83.25 108.50002,-107.25c-8.25,-24 -89.25,-87 -71.25,-120.75c18,-33.75 15.75,-41.25 15.75,-41.25z" stroke="#000000" fill="#999999" />

            <g transform="rotate(-10 382.4999999999998,240.99999999999974) ">
              <ellipse fill="#ffffff" cx="382.5" cy="240.99998" rx="56.50162" ry="84.75243" transform="rotate(10 382.5000000000002,240.99996948242193) " stroke="#000000" />

              <g style={{ animationPlayState: isCatMoving ? 'running' : 'paused' }}
                className={` rollaround`} id={`rollaround`}>
                <ellipse style={{ fill: eyesColoe }} cx="382.38001" cy="286.68047" rx="31" ry="35" />
                <ellipse fill="#ffffff" cx="380.38001" cy="303.68047" rx="6" ry="6" />
              </g>

            </g>
            <g>
              <ellipse fill="#ffffff" cx="274.11999" cy="239.31951" rx="56.50162" ry="84.75243" transform="rotate(10 274.1199951171879,239.31950378417977) " stroke="#000000" />
              <g style={{ animationPlayState: isCatMoving ? 'running' : 'paused' }}
                className={` rollaround`} >
                <ellipse style={{ fill: eyesColoe }} cx="274" cy="285" rx="31" ry="35" />
                <ellipse fill="#ffffff" stroke="#000000" cx="272" cy="302" rx="6" ry="6" />
              </g>
            </g>
            <path d="m295,337c2,2 25,-39 64,-7c39,32 8,13 -21,31c-29,18 -45,-26 -43,-24z" stroke="#000000" fill="#fcbfdb" />
            <path d="m236,384c0,0 154,106 224,17c70,-89 -203,-2 -203,-2c0,0 -21,-15 -21,-15z" stroke="#000000" fill="none" />
            {isSad != true &&
              <path stroke="#000000" d="m248.03582,375.86192c26.65347,15.01979 95.78592,70.09234 209.06318,-1.66887c113.27726,-71.7612 0,10.84762 0,10.84762c0,0 -138.26489,80.93996 -214.89363,-1.66887c-76.62874,-82.60883 -20.82303,-22.52968 5.83045,-7.50989l0,0.00001z" fill="#000000" />
            }
            {isSad != false &&
              <path d="m259.91577,413.70794c26.65347,14.09869 95.78592,65.79385 209.06318,-1.56652c113.27726,-67.36037 0,10.18238 0,10.18238c0,0 -138.26489,75.97623 -214.89363,-1.56652c-76.62874,-77.54275 -20.82303,-21.14802 5.83045,-7.04934l0,0.00001z" fill="#000000" id="svg_2" stroke="#000000" transform="rotate(177.189 367.276 418.163)" />
            }
            <g className={`${isCatMoving ? 'leftwiskers' : ''}`}>
              <line y2="301" x2="102" y1="353" x1="297" stroke="#DDDDDD" fill="none" />
              <line fill="none" stroke="#DDDDDD" x1="105" y1="344" x2="300" y2="358" />
            </g>

            <g className={`${isCatMoving ? 'rigtwiskers' : ''}`}>
              <line fill="none" stroke="#DDDDDD" x1="354" y1="361" x2="571" y2="296" />
              <line y2="364" x2="363" y1="373" x1="556" stroke="#DDDDDD" fill="none" />
            </g>
          </svg>







        </div>
      </div>


    </section >
  )
}