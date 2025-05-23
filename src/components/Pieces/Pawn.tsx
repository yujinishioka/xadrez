import Image from "next/image";

export default function Pawn({
  color,
}: Readonly<{ color: "white" | "black" }>) {
  return (
    <Image
      src={color === "white" ? "/pieces/pawn-w.svg" : "/pieces/pawn-b.svg"}
      alt={color === "white" ? "White Pawn" : "Black Pawn"}
      width={50}
      height={50}
    />
  );
}
