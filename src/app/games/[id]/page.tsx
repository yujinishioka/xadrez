import Providers from "@/app/providers/Providers";
import Board from "@/components/Board/Board";
import Top from "@/components/Cards/Top";

export default function GamePage() {
  return (
    <main className="flex flex-col justify-center items-center min-h-screen bg-neutral-800">
      <Providers>
        <Top />
        <Board />
      </Providers>
    </main>
  );
}
