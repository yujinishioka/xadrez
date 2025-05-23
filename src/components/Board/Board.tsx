import { initialBoard } from "@/data/initialBoard";
import Piece from "@/components/Pieces/Piece";
import Cell from "./Cell";

export default function Board() {
  return (
    <div className="grid grid-cols-8 grid-rows-8 w-fit">
      {initialBoard.map((row, rowIndex) => (
        row.map((cell, colIndex) => (
          <Cell key={`${rowIndex}-${colIndex}`} row={rowIndex} col={colIndex}>
            {cell && <Piece type={cell.type} color={cell.color} />}
          </Cell>
        ))
      ))}
    </div>
  )
}