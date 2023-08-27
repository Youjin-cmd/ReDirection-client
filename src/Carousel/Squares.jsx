import PropTypes from "prop-types";
import useEditStore from "../store/edit";
import Square from "./Square";

function Squares({ array, type }) {
  const { selectedSquares, setSelectedSquares } = useEditStore();

  function clickHandleSquare(path, type) {
    let typeface = selectedSquares.typeface;
    let stickerName = selectedSquares.stickerName;

    if (type === "font") {
      typeface = path ? path.split("/").pop().replace(".svg", "") : null;
    }

    if (type === "sticker") {
      stickerName = path ? path.split("/").pop().replace(".svg", "") : null;
    }

    setSelectedSquares(path, type, typeface, stickerName);
  }

  return array.map(element => {
    return (
      <div key={crypto.randomUUID()}>
        {selectedSquares[type] === element ? (
          <Square
            onClick={() => clickHandleSquare(element, type)}
            active={true}
          >
            <img
              className="absolute top-5 right-5 select-none"
              src="/assets/checked_icon.png"
            />
            <img className="w-24 select-none" src={element} draggable={false} />
          </Square>
        ) : (
          <Square
            onClick={() => clickHandleSquare(element, type)}
            active={false}
          >
            <img className="w-24 opacity-20 select-none" src={element} />
          </Square>
        )}
      </div>
    );
  });
}

Squares.propTypes = {
  array: PropTypes.array.isRequired,
  type: PropTypes.string.isRequired,
};

export default Squares;
