import { useState } from "react";
import QRCode from "react-qr-code";
const urltoVid = 'https://www.youtube.com/watch?v=5ZdHfJVAY-s&t=7s'

export default function QrCode() {
  const [inVal, setInVal] = useState('')
  const [kemo, setKemo] = useState('hello')
  const hanclick = () => {
    if (inVal.trim().length > 0) {
      setKemo(inVal)
    }
  }
  return (
    <section className={`pt-20 pb-10 px-8  text-white   `}>
      <div className={`flex justify-center max-[500px]:flex-col  max-[500px]:gap-1    pb-4`}>
        <input placeholder={'enter password '}
          className={`bg-black w-100 max-[500px]:w-full border-none outline-none max-[700px]:w-50 px-3 py-1.5 `}
          onChange={(e) => { setInVal(e.target.value) }} type="text" value={inVal} />

        <button onClick={hanclick} className={`bg-black ${inVal.trim().length == 0 ? 'bg-gray-600 opacity-25' : 'bg-black opacity-100'} cursor-pointer py-1.5 px-3 text-2xl border-l max-[500px]:border-none `}>GeneRate</button>
      </div>
      <div className={`bg-amber-200 flex justify-center py-4`}>
        <QRCode value={kemo} className={`w-60 max-[1000px]:w-40 max-[700px]:w-30 h-fit bg-amber-500 `}></QRCode>

      </div>
    </section>
  )
}