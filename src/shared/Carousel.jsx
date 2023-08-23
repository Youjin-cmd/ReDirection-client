import PropTypes from "prop-types";
import Square from "./Square";

import useEditStore from "../store/edit";

function Carousel({ array, type, setArray }) {
  const { selectedSquares, setSelectedSquares } = useEditStore();

  function clickHandleSquare(imagePath) {
    setSelectedSquares(imagePath, type);
  }

  function handleClickUp(event) {
    const lastItem = array.pop();
    const updatedArray = [lastItem, ...array];

    event.stopPropagation();
    setArray(updatedArray);
  }

  function handleClickDown(event) {
    const firstItem = array.shift();
    const updatedArray = [...array, firstItem];

    event.stopPropagation();
    setArray(updatedArray);
  }

  function renderSquares() {
    return array.map(element => {
      return (
        <div key={crypto.randomUUID()}>
          {selectedSquares[type] === element ? (
            <Square onClick={clickHandleSquare} active={true}>
              <img
                className="absolute top-5 right-5 select-none"
                src="/assets/checked_icon.png"
              />
              <img
                className="w-24 select-none"
                src={element}
                draggable={false}
              />
            </Square>
          ) : (
            <Square onClick={clickHandleSquare} active={false}>
              <img className="w-24 opacity-20 select-none" src={element} />
            </Square>
          )}
        </div>
      );
    });
  }

  return (
    <div
      className="relative flex justify-center items-center w-[300px] h-[750px] mx-10"
      draggable={false}
    >
      <div
        className="absolute flex justify-center items-center top-[5px] w-10 h-10 z-10 rounded-full bg-red hover:bg-hoverRed hover:cursor-pointer"
        onClick={event => {
          handleClickUp(event);
        }}
      >
        <img className="select-none" src="/assets/up_icon.png" />
      </div>
      <div
        className="absolute flex justify-center items-center bottom-[5px] w-10 h-10 z-10 rounded-full bg-red hover:bg-hoverRed hover:cursor-pointer"
        onClick={event => {
          handleClickDown(event);
        }}
      >
        <img className="select-none" src="/assets/down_icon.png" />
      </div>
      <div className="flex overflow-hidden justify-center w-[300px] h-[700px] rounded-xl ring-4 ring-red">
        <div className="flex flex-col">{renderSquares()}</div>
      </div>
    </div>
  );
}

Carousel.propTypes = {
  array: PropTypes.array.isRequired,
  setArray: PropTypes.func.isRequired,
  type: PropTypes.string.isRequired,
};

export default Carousel;
