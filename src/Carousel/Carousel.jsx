import PropTypes from "prop-types";

import Squares from "./Squares";
import Button from "../shared/Button";
import CarouselContainer from "./CarouselContainer";
import SquaresContainer from "./SquaresContainer";

function Carousel({ array, type, setArray }) {
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

  return (
    <CarouselContainer>
      <Button
        className="absolute flex justify-center items-center top-[5px] w-10 h-10 z-10 rounded-full bg-red hover:bg-hoverRed hover:cursor-pointer"
        onClick={event => {
          handleClickUp(event);
        }}
      >
        <img className="select-none" src="/assets/up_icon.png" alt="up icon" />
      </Button>
      <SquaresContainer>
        <Squares array={array} type={type} />
      </SquaresContainer>
      <Button
        className="absolute flex justify-center items-center bottom-[5px] w-10 h-10 z-10 rounded-full bg-red hover:bg-hoverRed hover:cursor-pointer"
        onClick={event => {
          handleClickDown(event);
        }}
      >
        <img
          className="select-none"
          src="/assets/down_icon.png"
          alt="down icon"
        />
      </Button>
    </CarouselContainer>
  );
}

Carousel.propTypes = {
  array: PropTypes.array.isRequired,
  setArray: PropTypes.func.isRequired,
  type: PropTypes.string.isRequired,
};

export default Carousel;
