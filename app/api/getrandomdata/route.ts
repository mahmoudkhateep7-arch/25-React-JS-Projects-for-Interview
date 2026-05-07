import { NextResponse } from "next/server";
export interface ObjResShape{
  showlightDarkMode:boolean,
  showTicTac:boolean,
  showRandomColor:boolean,
  showAccoridan:boolean,
  showTreeView:boolean,
  [key:string]:boolean

}
const t=true
const resObject:ObjResShape={
  showlightDarkMode:t,
  showTicTac:t,
  showRandomColor:t,
  showAccoridan:t,
  showTreeView:t

}
export const dynamic = 'force-dynamic'; // Ensures this isn't cached as a static JSON file

export async function GET(){

 return NextResponse.json(resObject)
}