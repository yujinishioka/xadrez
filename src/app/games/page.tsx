import Link from "next/link";

export default function Games() {
  return (
    <main className="flex flex-col items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-(family-name:--font-geist-sans)">
      <p>lista de partidas em andamento</p>
      <Link
        href="/games/1"
        className="text-green-400"
      >
        criar nova partida
      </Link>
    </main>
  )
};
