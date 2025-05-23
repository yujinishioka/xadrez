import Image from "next/image";

export default function Rook({
  color,
}: Readonly<{ color: "white" | "black" }>) {
  return (
    <Image
      src={color === "white" ? "/pieces/rook-w.svg" : "/pieces/rook-b.svg"}
      alt={color === "white" ? "White Rook" : "Black Rook"}
      width={50}
      height={50}
    />
  );
}
