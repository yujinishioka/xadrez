export type TColor = "white" | "black";

export type TPieceType = "pawn" | "rook" | "knight" | "bishop" | "queen" | "king";

export type TPiece = {
  type: TPieceType;
  color: TColor;
};

export type TCell = TPiece | null;

export type TBoard = TCell[][];

export type TPosition = {
  row: number;
  col: number;
};

export type TBoardContext = {
  board: TBoard;
  setBoard: (board: TBoard) => void;
  selected: TPosition | null;
  setSelected: (position: TPosition | null) => void;
  turn: TColor;
  setTurn: (color: TColor) => void;
  validMoves: TPosition[];
  setValidMoves: (moves: TPosition[]) => void;
};
