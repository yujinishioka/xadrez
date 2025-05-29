import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-(family-name:--font-geist-sans)">
      <main className="flex flex-col gap-8 row-start-2 items-center">
        <h1>Xadrez</h1>
        <p>jogo de xadrez desenvolvido por Yuunity</p>
        <div className="flex gap-1">
          <p>Venha participar do nosso</p>
          <Link
            href="/games"
            className="text-green-400"
          >
            Boarding
          </Link>
        </div>
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
      </footer>
    </div>
  );
}