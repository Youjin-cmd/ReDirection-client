import useEditStore from "../store/edit";
import Square from "./Square";

interface SquaresProps {
  array: (string | null)[];
  type: string;
}

function Squares({ array, type }: SquaresProps) {
  const { selectedSquares, setSelectedSquares } = useEditStore();

  function clickHandleSquare(path: string | null, type: string) {
    let typeface = selectedSquares.typeface;
    let stickerName = selectedSquares.stickerName;

    if (type === "font") {
      typeface = path ? path.split("/").pop()!.replace(".svg", "") : null;
    }

    if (type === "sticker") {
      stickerName = path ? path.split("/").pop()!.replace(".svg", "") : null;
    }

    setSelectedSquares(path, type, typeface, stickerName);
  }

  return array.map(element => {
    return (
      <div key={crypto.randomUUID()}>
        {selectedSquares[type] === element ? (
          <Square
            clickHandleSquare={() => clickHandleSquare(element, type)}
            active={true}
          >
            <img
              className="absolute top-5 right-5 select-none"
              src="/assets/checked_icon.png"
              alt="checked"
            />
            <img
              className="w-24 select-none"
              src={element ?? undefined}
              alt={
                element ?
                `selected ${element.split("/").pop()!.replace(".svg", "")}`
                : undefined
              }
              draggable={false}
            />
          </Square>
        ) : (
          <Square
            clickHandleSquare={() => clickHandleSquare(element, type)}
            active={false}
          >
            <img
              className="w-24 opacity-20 select-none"
              src={element ?? undefined}
              alt={
                element ?
                `none selected ${element.split("/").pop()!.replace(".svg", "")}`
                : undefined
              }
            />
          </Square>
        )}
      </div>
    );
  });
}

export default Squares;
