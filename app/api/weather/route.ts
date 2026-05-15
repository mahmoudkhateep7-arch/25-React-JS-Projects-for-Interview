import { NextResponse, NextRequest } from "next/server";
export interface BigObj {
  cod: number,
  main: {
    temp: number,
    humidity: number
  },
  name: string,
  sys: {
    country: string,
  },
  weather: {
    main: string,
    description: string,
  }[];
  wind: { speed: number }
}
const apiKey = 'd12885a016244605738ecfec658433d7'
const makeUrlFunction = (countryName: string) => {

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${countryName}&appid=${apiKey}`
  return url
}
const getData = async (url: string) => {

  const res = await fetch(url)
  const data: BigObj = await res.json()

  return data
}



export async function POST(req: NextRequest) {
  const { countyName }: { countyName: string } = await req.json()
  const url = makeUrlFunction(countyName)
  const data = await getData(url)


  return NextResponse.json(data)
}