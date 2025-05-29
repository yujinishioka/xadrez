"use client";

import { BoardProvider } from "@/context/BoardContext";

export default function Providers({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <BoardProvider>
      {children}
    </BoardProvider>
  );
}