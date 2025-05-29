'use client'

import { useState } from 'react';
import clsx from 'clsx';
import { ICell } from "@/types/cell";
import { useBoard } from '@/context/BoardContext';
import { getValidMoves, handleMove } from '@/utils/moveHandler';

export default function Cell({ row, col, children }: Readonly<ICell>) {
  const {
    board, setBoard,
    selected, setSelected,
    turn, setTurn,
    validMoves, setValidMoves
  } = useBoard();

  const [winner, setWinner] = useState<"white" | "black" | null>(null);
  
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

    const { updatedBoard, moved, victory } = handleMove(selected, { row, col }, board, turn);

    if (moved) {
      setBoard(updatedBoard);
      setTurn(turn === "white" ? "black" : "white");

      if (victory) {
        setWinner(victory);
      }
    }

    setSelected(null);
    setValidMoves([]);
  };

  return (
    <>
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

      {winner && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl p-6 shadow-lg text-center space-y-4">
            <h2 className="text-2xl font-bold text-gray-800">
              {(winner === "white" ? "BRANCAS" : "PRETAS")} venceram!
            </h2>
            <button
              className="bg-black/60 text-white px-4 py-2 rounded hover:bg-black/70"
              onClick={() => setWinner(null)}
            >
              Fechar
            </button>
          </div>
        </div>
      )}
    </>
  );
}