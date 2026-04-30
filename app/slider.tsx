"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { BiLeftArrow, BiRightArrow } from "react-icons/bi";
import { AnimatePresence, motion } from "motion/react";
interface ImageMetadata {
  id: string;
  author: string;
  width: number;
  height: number;
  url: string;
  download_url: string;
}

export default function Slider() {
  const [arrayOfImages, setArrayOfImages] = useState<[] | ImageMetadata[]>([])
  const [direction, setDirection] = useState('fromRight')
  const [index, setIndex] = useState(0)
  const getImagesArray = async () => {
    const response = await fetch('https://picsum.photos/v2/list?page=1&limit=10')
    const data = await response.json()
    setArrayOfImages(data)
  }
  useEffect(() => {
    getImagesArray()

  }, [])
  const handleRigh = () => {
    if (index < arrayOfImages.length - 1) {
      setDirection('fromRight')
      setIndex((p) => { return p + 1 })
    }
  }
  const handleLeft = () => {
    if (index > 0) {
      setDirection('fromLeft')

      setIndex((p) => { return p - 1 })
    }
  }
  const variants = {
    enter: (direction: string) => {
      return (
        {
          x: direction === 'fromLeft' ? '-100%' : '100%',
        }
      )
    },
    center: {
      x: 0, opacity: 1
    }
    ,
    exit: (direction: string) => {
      return {
        x: direction === 'fromLeft' ? '100%' : '-100%',

      }
    }

  }
  const handleClicked = (idx: number) => {
    if (idx > index) {
      setDirection('fromRight');
    } else {
      setDirection('fromLeft');

    }

    setIndex(idx)


  }
  useEffect(() => {
    const interval1 = setInterval(() => {
      setDirection('fromRight')
      setIndex((p) => { return p < arrayOfImages.length - 1 ? p + 1 : 0 })
    }, 3000)

    return () => { clearInterval(interval1) }
  }, [index, arrayOfImages])

  if (arrayOfImages.length == 0) { return }

  return (
    <div className={`flex justify-center flex-col items-center py-10 px-8`}>
      <h3 className={`text-4xl font-bold pb-4`}>Slider</h3>
      {/*  wrapper*/}
      <div className={` relative z-0 rounded-xl overflow-hidden w-full max-w-120 h-100`}>

        {/* left absoulte */}
        <div onClick={handleLeft} className={`absolute w-10 ${index == 0 ? 'opacity-20' : 'opacity-100'} h-10 bg-black cursor-pointer flex justify-center items-center top-1/2 left-3 rounded-full text-xl -translate-y-1/2 text-white `}><BiLeftArrow /></div>

        {/* right absoulte */}
        <div onClick={handleRigh} className={`absolute w-10 ${index == arrayOfImages.length - 1 ? 'opacity-20' : 'opacity-100'} h-10 bg-black flex justify-center cursor-pointer items-center top-1/2 right-3 rounded-full text-xl -translate-y-1/2 text-white `}><BiRightArrow /></div>

        <AnimatePresence mode={'sync'} initial={false} custom={direction} >
          <motion.div
            initial='enter'
            animate='center'
            exit='exit'
            transition={{ duration: .5 }}
            custom={direction}
            variants={variants}


            key={index} className={`h-full absolute inset-0 -z-1  w-full `}>
            <Image className={`h-full w-full object-cover max-[500px]:object-center max-[430px]:object-center `} alt={arrayOfImages[index].author}
              priority
              src={arrayOfImages[index].download_url}
              height={arrayOfImages[index].height}
              width={arrayOfImages[index].width} />

          </motion.div>
        </AnimatePresence>

        {/* absoulte bottom */}
        <div className={`absolute    bottom-2 left-0 right-0 flex justify-center gap-2 `}>
          {Array.from({ length: arrayOfImages.length }).map((__, idx) => {
            return (
              <div onClick={() => { handleClicked(idx) }} key={idx} className={`h-4 rounded-full cursor-pointer    w-4  ${index == idx ? 'bg-white scale-125' : 'bg-white/60'} duration-300 transition-all`}></div>
            )
          })}
        </div>


      </div>
    </div>
  )
}