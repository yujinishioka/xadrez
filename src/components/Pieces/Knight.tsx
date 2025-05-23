import Image from "next/image";

export default function Knight({
  color,
}: Readonly<{ color: "white" | "black" }>) {
  return (
    <Image
      src={color === "white" ? "/pieces/knight-w.svg" : "/pieces/knight-b.svg"}
      alt={color === "white" ? "White Knight" : "Black Knight"}
      width={50}
      height={50}
    />
  );
}
