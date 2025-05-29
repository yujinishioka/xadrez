'use client';

import clsx from 'clsx';
import { useBoard } from '@/context/BoardContext';
import Image from 'next/image';

export default function Top() {
  const { turn } = useBoard();

  return (
    <div className={clsx(
      "flex px-12 py-1 rounded-lg text-xl font-semibold mb-4 text-center",
      turn === "white" ? "text-white bg-transparent" : "text-black bg-white/80"
    )}>
      <p>Jogada:</p>
      <Image
        src={turn === "white" ? "/pieces/pawn-w.svg" : "/pieces/pawn-b.svg"}
        alt={turn === "white" ? "Peça branca" : "Peça preta"}
        width={30}
        height={30}
      />
    </div>
  );
}