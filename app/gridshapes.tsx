import Square from "./squareandcircle";
import Tringle from "./tringale";

export default function GridShapes() {
  return (
    <div className={`grid grid-cols-2 max-[800px]:grid-cols-1`}>

      <Square></Square>
      <Tringle></Tringle>
    </div>
  )
}