import Image from "next/image";

export default function Queen({
  color,
}: Readonly<{ color: "white" | "black" }>) {
  return (
    <Image
      src={color === "white" ? "/pieces/queen-w.svg" : "/pieces/queen-b.svg"}
      alt={color === "white" ? "White Queen" : "Black Queen"}
      width={50}
      height={50}
    />
  );
}
