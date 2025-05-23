import clsx from 'clsx';
import { ICell } from "@/types/cell";

export default function Cell({ row, col, children, onClick }: Readonly<ICell>) {
  const isDark = (row + col) % 2 === 1;

  return (
    <button
      onClick={onClick}
      className={clsx(
        'w-16 h-16 flex items-center justify-center border border-gray-700',
        isDark ? 'bg-gray-600' : 'bg-gray-300',
      )}
    >
      {children}
    </button>
  );
}