
import Image from "next/image";



export default function Animations() {



  return (
    <div className={`bg-sky-800p-10  bg-black h-140 flex items-center justify-center `}>

      {/* card */}
      <div className={`    h-fit relative overflow-hidden  mx-auto  w-fit`}>
        <div className={`w-70 h-50 relative`}>
          <Image

            className={`object-cover   `}
            alt={'game'}
            src={'https://annerabbitte.ie/wp-content/uploads/2019/10/Child-with-toy.jpg'}
            fill />
        </div>
        <svg id={`move`} className={`absolute -bottom-15  left-0 w-[200%] h-2/2 `} viewBox="0 0 2880 320" preserveAspectRatio="none">
          <path fill="#0099ff" fillOpacity="1"
            d="M0,160 C360,20 360,300 720,160 C1080,20 1080,300 1440,160 C1800,20 1800,300 2160,160 C2520,20 2520,300 2880,160 L2880,320 L0,320 Z">
          </path>
        </svg>



      </div>
    </div>
  )
}