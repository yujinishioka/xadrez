import Bishop from "./Bishop";
import King from "./King";
import Knight from "./Knight";
import Pawn from "./Pawn";
import Queen from "./Queen";
import Rook from "./Rook";

const Piece = ({ type, color }: { type: string; color: "white" | "black" }) => {
  const props = { color };

  switch (type) {
    case "king":
      return <King {...props} />;
    case "queen":
      return <Queen {...props} />;
    case "bishop":
      return <Bishop {...props} />;
    case "knight":
      return <Knight {...props} />;
    case "rook":
      return <Rook {...props} />;
    case "pawn":
      return <Pawn {...props} />;
    default:
      return null;
  }
};

export default Piece;
