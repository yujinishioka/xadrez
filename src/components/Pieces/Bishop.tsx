import Image from "next/image";

export default function Bishop({
  color,
}: Readonly<{ color: "white" | "black" }>) {
  return (
    <Image
      src={color === "white" ? "/pieces/bishop-w.svg" : "/pieces/bishop-b.svg"}
      alt={color === "white" ? "White Bishop" : "Black Bishop"}
      width={50}
      height={50}
    />
  );
}
