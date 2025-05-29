import { TBoard, TColor, TPosition } from "@/types/board";

export function isValidPawnMove(
  color: TColor,
  from: TPosition,
  to: TPosition,
  board: TBoard
): boolean {
  const direction = color === "white" ? -1 : 1;
  const startRow = color === "white" ? 6 : 1;

  const rowDiff = to.row - from.row;
  const colDiff = to.col - from.col;

  // Movimento para frente 1 casa
  if (colDiff === 0 && rowDiff === direction && !board[to.row][to.col]) {
    return true;
  }

  // Movimento inicial de 2 casas
  if (
    colDiff === 0 &&
    rowDiff === 2 * direction &&
    from.row === startRow &&
    !board[to.row][to.col] &&
    !board[from.row + direction][to.col]
  ) {
    return true;
  }

  // Captura diagonal
  if (
    Math.abs(colDiff) === 1 &&
    rowDiff === direction &&
    board[to.row][to.col] &&
    (board[to.row][to.col])?.color !== color
  ) {
    return true;
  }

  return false;
}

export function isValidKingMove(
  color: TColor,
  from: TPosition,
  to: TPosition,
  board: TBoard
): boolean {
  const rowDiff = Math.abs(to.row - from.row);
  const colDiff = Math.abs(to.col - from.col);

  if (rowDiff <= 1 && colDiff <= 1) {
    const targetPiece = board[to.row][to.col];
    return !targetPiece || targetPiece.color !== color;
  }

  return false;
}
