import { TBoardContext, TBoard, TPosition, TColor } from "@/types/board";
import { createContext, useContext, useMemo, useState } from "react";
import { initialBoard } from "@/data/initialBoard";

const BoardContext = createContext<TBoardContext | null>(null);

export function BoardProvider({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const [board, setBoard] = useState<TBoard>(initialBoard);
  const [turn, setTurn] = useState<TColor>("white");
  const [selected, setSelected] = useState<TPosition | null>(null);
  const [validMoves, setValidMoves] = useState<TPosition[]>([]);

  const contextValue = useMemo(
    () => ({ board, setBoard, selected, setSelected, turn, setTurn, validMoves, setValidMoves }),
    [board, selected, turn, validMoves]
  );

  return (
    <BoardContext.Provider value={contextValue}>
      {children}
    </BoardContext.Provider>
  );
}

export const useBoard = () => {
  const context = useContext(BoardContext);
  if (!context) throw new Error("useBoard must be used within a BoardProvider");
  return context;
};
