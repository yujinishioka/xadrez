'use client'

import { useBoard } from "@/context/BoardContext";
import Cell from "./Cell";
import Piece from "@/components/Pieces/Piece";

export default function Board() {
  const { board } = useBoard();

  return (
    <div className="grid grid-cols-8 grid-rows-8 w-fit">
      {board.map((row, rowIndex) => (
        row.map((cell, colIndex) => (
          <Cell key={`${rowIndex}-${colIndex}`} row={rowIndex} col={colIndex}>
            {cell && <Piece type={cell.type} color={cell.color} />}
          </Cell>
        ))
      ))}
    </div>
  )
}