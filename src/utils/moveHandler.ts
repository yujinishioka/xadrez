import { isValidPawnMove } from "@/utils/moves";
import { TBoard, TColor, TPosition } from "@/types/board";

export function handleMove(
  from: TPosition,
  to: TPosition,
  board: TBoard,
  turn: TColor
): { updatedBoard: TBoard; moved: boolean } {
  const piece = board[from.row][from.col];
  if (!piece || piece.color !== turn) return { updatedBoard: board, moved: false };

  let isValid = false;

  switch (piece.type) {
    case "pawn":
      isValid = isValidPawnMove(piece.color, from, to, board);
      break;
    // Adicione outras peças aqui
  }

  if (!isValid) return { updatedBoard: board, moved: false };

  const newBoard = board.map(row => [...row]);
  newBoard[to.row][to.col] = piece;
  newBoard[from.row][from.col] = null;

  return { updatedBoard: newBoard, moved: true };
}

export function getValidMoves(
  from: TPosition,
  board: TBoard,
  turn: TColor
): TPosition[] {
  const validMoves: TPosition[] = [];

  for (let row = 0; row < 8; row++) {
    for (let col = 0; col < 8; col++) {
      const to = { row, col };
      const { moved } = handleMove(from, to, board, turn);
      if (moved) {
        validMoves.push(to);
      }
    }
  }

  return validMoves;
}
