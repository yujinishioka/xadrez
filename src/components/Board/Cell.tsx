'use client'

import clsx from 'clsx';
import { ICell } from "@/types/cell";
import { useBoard } from '@/context/BoardContext';
import { getValidMoves, handleMove } from '@/utils/moveHandler';

export default function Cell({ row, col, children }: Readonly<ICell>) {
  const { board, setBoard, selected, setSelected, turn, setTurn, validMoves, setValidMoves } = useBoard();
  
  const isValidMoveCell = validMoves?.some(pos => pos.row === row && pos.col === col);
  const clickedCell = board[row][col];
  const isCaptureCell = isValidMoveCell && clickedCell && clickedCell.color !== turn;
  
  const isDark = (row + col) % 2 === 1;

  const handleClick = () => {
    const clickedCell = board[row][col];

    if (!selected) {
      if (clickedCell && clickedCell.color === turn) {
        setSelected({ row, col });

        const moves = getValidMoves({ row, col }, board, turn);
        setValidMoves(moves);
      }
      return;
    }

    if (clickedCell && clickedCell.color === turn) {
      setSelected({ row, col });
      const moves = getValidMoves({ row, col }, board, turn);
      setValidMoves(moves);
      return;
    }

    const { updatedBoard, moved } = handleMove(selected, { row, col }, board, turn);

    if (moved) {
      setBoard(updatedBoard);
      setTurn(turn === "white" ? "black" : "white");
    }
    setSelected(null);
    setValidMoves([]);
  };

  return (
    <button
      onClick={handleClick}
      className={clsx(
        'relative w-16 h-16 flex items-center justify-center border border-gray-700',
        isDark ? 'bg-gray-600' : 'bg-gray-300',
        children ? 'cursor-pointer' : ''
      )}
    >
      <div className="z-20">
        {children}
      </div>
      {isValidMoveCell && (
        <div
          className={clsx(
            "absolute inset-0 opacity-40 pointer-events-none z-10",
            isCaptureCell ? "bg-green-400" : "bg-yellow-300"
          )}
        />
      )}
    </button>
  );
}