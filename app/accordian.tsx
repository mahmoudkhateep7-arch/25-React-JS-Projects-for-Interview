"use client";

import { Plus, X } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useRef, useState } from "react";


const accordionData = [
  // WEB DEVELOPMENT (1-10)
  { id: 1, question: "What are accordion components?", answer: "Accordions are UI components that allow for expandable and collapsible sections of content." },
  { id: 2, question: "What is JSX?", answer: "JSX is a syntax extension for JavaScript that allows you to write HTML-like code inside React." },
  { id: 3, question: "What is the Virtual DOM?", answer: "A lightweight copy of the real DOM used by React for performance optimization." },
  { id: 4, question: "What are React Hooks?", answer: "Functions that let you use state and lifecycle features in functional components." },
  { id: 5, question: "What is Tailwind CSS?", answer: "A utility-first CSS framework for rapidly building custom user interfaces." },
  { id: 6, question: "What is TypeScript?", answer: "A superset of JavaScript that adds static typing to the language." },
  { id: 7, question: "What is Next.js?", answer: "A React framework that enables server-side rendering and static site generation." },
  { id: 8, question: "What is a Closure?", answer: "A function that has access to its outer function scope even after the outer function has returned." },
  { id: 9, question: "What is an API?", answer: "An Application Programming Interface that allows different software to communicate." },
  { id: 10, question: "What is Git?", answer: "A distributed version control system for tracking changes in source code." },

  // FOOD (11-20)
  { id: 11, question: "What is Umami?", answer: "One of the five basic tastes, often described as savory or meaty." },
  { id: 12, question: "What is Sourdough?", answer: "Bread made by the fermentation of dough using wild lactobacillus and yeast." },
  { id: 13, question: "Origin of Sushi?", answer: "Sushi originated in Southeast Asia as a way to preserve fish in fermented rice." },
  { id: 14, question: "What is Tofu made of?", answer: "Tofu is made from condensed soy milk that is pressed into solid white blocks." },
  { id: 15, question: "What is the world's most expensive spice?", answer: "Saffron, which is harvested by hand from the Crocus sativus flower." },
  { id: 16, question: "What is Kimchi?", answer: "A staple Korean side dish made from salted and fermented vegetables." },
  { id: 17, question: "What is the Scoville Scale?", answer: "A measurement of the pungency (spiciness) of chili peppers." },
  { id: 18, question: "What is Molecular Gastronomy?", answer: "A subdiscipline of food science that investigates the physical and chemical transformations of ingredients." },
  { id: 19, question: "What is Gelato?", answer: "An Italian frozen dessert that is denser and served at a warmer temperature than ice cream." },
  { id: 20, question: "What is Quinoa?", answer: "A flowering plant in the amaranth family grown as a crop primarily for its edible seeds." },

  // COUNTRIES (21-30)
  { id: 21, question: "Smallest country in the world?", answer: "Vatican City, with an area of only about 0.44 square kilometers." },
  { id: 22, question: "Most populous country?", answer: "As of 2023, India has overtaken China as the world's most populous nation." },
  { id: 23, question: "Land of the Rising Sun?", answer: "Japan is frequently referred to by this nickname." },
  { id: 24, question: "Which country has the most islands?", answer: "Sweden has the most islands in the world, with over 221,800." },
  { id: 25, question: "Country with the longest coastline?", answer: "Canada has the world's longest coastline, stretching over 202,080 kilometers." },
  { id: 26, question: "Where is the Great Barrier Reef?", answer: "It is located off the coast of Queensland, Australia." },
  { id: 27, question: "Which country is the largest by land area?", answer: "Russia is the largest country, covering more than 17 million square kilometers." },
  { id: 28, question: "Capital of Iceland?", answer: "Reykjavík is the capital and largest city of Iceland." },
  { id: 29, question: "Which country has three capitals?", answer: "South Africa: Pretoria (Administrative), Cape Town (Legislative), and Bloemfontein (Judicial)." },
  { id: 30, question: "Home of the Pyramids?", answer: "The most famous pyramids are located in Egypt, specifically the Giza complex." },

  // HISTORY (31-40)
  { id: 31, question: "Who was the first person in space?", answer: "Yuri Gagarin, a Soviet cosmonaut, orbited the Earth in 1961." },
  { id: 32, question: "When did the French Revolution start?", answer: "The revolution began in 1789 with the storming of the Bastille." },
  { id: 33, question: "The Renaissance began in which country?", answer: "The Renaissance began in Italy during the 14th century." },
  { id: 34, question: "Who wrote the Magna Carta?", answer: "It was drafted by the Archbishop of Canterbury to make peace between the unpopular King John and rebel barons." },
  { id: 35, question: "Discovery of Penicillin?", answer: "Alexander Fleming discovered penicillin in 1928, marking the start of modern antibiotics." },
  { id: 36, question: "The Fall of the Berlin Wall?", answer: "The wall fell on November 9, 1989, signaling the end of the Cold War." },
  { id: 37, question: "Ancient Silk Road?", answer: "A network of trade routes connecting the East and West, central to cultural interaction." },
  { id: 38, question: "Who was Cleopatra?", answer: "The last active ruler of the Ptolemaic Kingdom of Egypt." },
  { id: 39, question: "First female Prime Minister of the UK?", answer: "Margaret Thatcher, who served from 1979 to 1990." },
  { id: 40, question: "What was the Industrial Revolution?", answer: "The transition to new manufacturing processes in Europe and the US in the late 18th century." },

  // SCIENCE (41-50)
  { id: 41, question: "Speed of light?", answer: "The speed of light in a vacuum is approximately 299,792 kilometers per second." },
  { id: 42, question: "What is Absolute Zero?", answer: "The lowest possible temperature, where all molecular motion ceases (0 Kelvin or -273.15°C)." },
  { id: 43, question: "Who proposed Relativity?", answer: "Albert Einstein developed the theories of special and general relativity." },
  { id: 44, question: "What is the powerhouse of the cell?", answer: "The mitochondria are often referred to as the powerhouse of the cell." },
  { id: 45, question: "Most abundant gas in Earth's atmosphere?", answer: "Nitrogen makes up about 78% of the Earth's atmosphere." },
  { id: 46, question: "What is photosynthesis?", answer: "The process by which plants use sunlight to synthesize foods from carbon dioxide and water." },
  { id: 47, question: "Number of planets in our Solar System?", answer: "There are eight recognized planets: Mercury, Venus, Earth, Mars, Jupiter, Saturn, Uranus, and Neptune." },
  { id: 48, question: "What is a Black Hole?", answer: "A region of spacetime where gravity is so strong that nothing, not even light, can escape." },
  { id: 49, question: "Who discovered Gravity?", answer: "Sir Isaac Newton is credited with formulating the law of universal gravitation." },
  { id: 50, question: "What is DNA?", answer: "Deoxyribonucleic acid, a molecule that carries the genetic instructions for all living organisms." }
];

export default function Accordian() {
  const [multiselecton, setMutlitSelect] = useState(false)
  const [id, setId] = useState(-10)
  const [arr, setArr] = useState([-20])

  const showItem = (objId: number) => {
    if (multiselecton == false) {
      return objId == id
    }

    return arr.includes(objId)


  }
  const clickx = (objectId: number) => {
    if (multiselecton == false) {
      setId(-17)
      return
    }
    const newarr = [...arr].filter((n) => { return n != objectId })
    setArr(newarr)
  }
  const clickPlus = (objectId: number) => {
    if (multiselecton == false) {
      setId(objectId)
      return
    }
    setArr([...arr, objectId])

  }

  const changemood = () => {

    if (multiselecton == false) {
      setArr([id])
      setId(-2)
      setMutlitSelect(true)
      return
    }
    else {
      setId(arr[arr.length - 1])
      setMutlitSelect(false)

    }
  }
  const clickQuestion = (idd: number) => {
    if (multiselecton == false) {
      if (idd == id) {
        setId(-5)
      } else {
        setId(idd)
      }

    } else {
      if (arr.includes(idd)) {
        const newarr = [...arr].filter((n) => { return n != idd })
        setArr(newarr)
      } else {
        setArr([...arr, idd])
      }
    }
  }
  const [numofQuestions, setNumOfQuestions] = useState(5)
  const changeNum = (n: string) => {
    if (n.length > 1 && n[0] == '0') {
      n = n.slice(1)

    }
    const qusNumber = Number(n);
    if (qusNumber > 50) {
      alert('Number of questions must be 50 or less')
    } else {
      setNumOfQuestions(4)
      setTimeout(() => {
        setNumOfQuestions(qusNumber)

      }, 0)

    }
  }
  const refinput = useRef(null)
  const focusoninput = () => {

    if (refinput.current) {
      const input = refinput.current as HTMLInputElement
      input.type = 'text'

      input.focus()
      const length = input.value.length
      input.setSelectionRange(length, length)
      setTimeout(() => {
        input.type = 'number'

      }, 0)

    }


  }
  return (
    <div className={`border-t max-[570px]:mt-5 pt-2  relative`}>
      <div className={`absolute left-0 top-0 font-semibold p-2 w-40 flex justify-center tracking-wider max-[570px]:-translate-y-full bg-[#5D4037] text-white`}>{multiselecton == true ? 'Multi selction on' : 'Single selction on'}</div>
      {/* title */}
      <h3 className={`text-3xl font-bold text-center pb-3`}>Accordion</h3>

      <div className={`py-4 px-5 flex max-[520px]:flex-col max-[520px]:gap-1 justify-between  `}>
        <input
          ref={refinput}
          id={`num1`}
          value={numofQuestions}
          onWheel={(e) => e.currentTarget.blur()}

          onChange={(e) => { changeNum(e.target.value) }} type="number"
          className={`border-t max-[520px]:border max-[520px]:rounded-xl focus:border-t-2 peer focus:border-l-2 focus:border-b-2  border-b border-l rounded-[1000px__0_0_1000px]  px-3  border-[#3333338e] max-[520px]:flex-none  h-12 flex-1 outline-none  bg-white`} />
        <div onClick={focusoninput} className={` cursor-pointer bottom-0 flex max-[520px]:justify-center peer-focus:border-r-2 peer-focus:border-b-2 peer-focus:border-t-2 items-center px-4 text-2xl top-0 right-0 peer max-[520px]:border max-[520px]:rounded-xl max-[520px]:h-12 bg-[#1B5E20]   peer text-white rounded-[0px__1000px_1000px_0px] shrink-0 border-r border-t border-b border-[#3333338e]`}>{numofQuestions} Questions of 50</div>


      </div>

      <div onClick={() => { changemood() }} className={`bg-[#5D4037] text-white text-center px-4 py-1.5 font-semibold mx-auto cursor-pointer w-70 tracking-wider`}>{multiselecton == true ? ' Multi Selection on' : 'Sigle  Selection on'}</div>

      <div className={` flex px-4 py-5 flex-col items-center`}>

        <div className={`flex flex-col  max-w-150 gap-3 w-full  py-4`}>
          {accordionData.map((item) => {
            if (item.id > numofQuestions) { return }
            return (
              <div className={`p-4 text-white 	bg-[#5D4037] `} key={item.id}>
                {/* question */}
                <div className={`flex font-bold  items-center w-full gap-5 justify-between`}>
                  <h4 onClick={() => { clickQuestion(item.id) }} className={` h-8 flex items-center cursor-pointer`}>{item.question}</h4>
                  <div className={`w-8 h-8 flex justify-center items-center`}>
                    <AnimatePresence mode={'wait'} initial={false} >

                      {showItem(item.id) ?
                        <motion.div className={`cursor-pointer`} key={'iconx'} initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }} transition={{ duration: .3 / 2 }} onClick={() => { clickx(item.id) }}><X /> </motion.div> :
                        <motion.div className={`cursor-pointer`} key={'iconplus'} initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: .3 / 2 }} onClick={() => { clickPlus(item.id) }}><Plus /></motion.div>}
                    </AnimatePresence>
                  </div>

                </div>


                <AnimatePresence>
                  {showItem(item.id) &&
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: .3 }}

                      className={`overflow-hidden  flex flex-col`}>
                      <span className={`h-5 w-full `}></span>
                      <p className={``}>{item.answer}</p>
                    </motion.div>
                  }
                </AnimatePresence>


              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}