import React from "react";

import Squares from "./Squares";
import Button from "../shared/Button";
import CarouselContainer from "./CarouselContainer";
import SquaresContainer from "./SquaresContainer";
import { IDecoElement } from "../types/deco";

interface CarouselProps {
  type: string;
  itemsList: IDecoElement[];
  setItemsList: (updatedArray: IDecoElement[]) => void;
}

const Carousel = React.memo(
  ({ type, itemsList, setItemsList }: CarouselProps) => {
    function handleClickUp(event: React.MouseEvent) {
      const lastItem = itemsList[itemsList.length - 1];
      const updatedArray = [
        lastItem,
        ...itemsList.slice(0, itemsList.length - 1),
      ];

      event.stopPropagation();
      setItemsList(updatedArray);
    }

    function handleClickDown(event: React.MouseEvent) {
      const firstItem = itemsList[0];
      const updatedArray = [...itemsList.slice(1), firstItem];

      event.stopPropagation();
      setItemsList(updatedArray);
    }

    return (
      <CarouselContainer>
        <Button
          className="absolute flex justify-center items-center -left-[20px] md:left-auto md:top-[5px] w-10 h-10 z-10 rounded-full -rotate-90 md:rotate-0  bg-red hover:bg-hoverRed hover:cursor-pointer"
          onClick={event => {
            handleClickUp(event);
          }}
        >
          <img
            className="select-none"
            src="/assets/up_icon.png"
            alt="up icon"
          />
        </Button>
        <SquaresContainer>
          <Squares type={type} itemsList={itemsList} />
        </SquaresContainer>
        <Button
          className="absolute flex justify-center items-center -right-[20px] md:right-auto md:bottom-[5px] w-10 h-10 z-10 rounded-full -rotate-90 md:rotate-0  bg-red hover:bg-hoverRed hover:cursor-pointer"
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
  },
);

Carousel.displayName = "Carousel";

export default Carousel;
