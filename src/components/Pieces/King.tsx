import Image from "next/image";

export default function King({
  color,
}: Readonly<{ color: "white" | "black" }>) {
  return (
    <Image
      src={color === "white" ? "/pieces/king-w.svg" : "/pieces/king-b.svg"}
      alt={color === "white" ? "White King" : "Black King"}
      width={50}
      height={50}
    />
  );
}
