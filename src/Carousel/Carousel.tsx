import Squares from "./Squares";
import Button from "../shared/Button";
import CarouselContainer from "./CarouselContainer";
import SquaresContainer from "./SquaresContainer";

interface DecoElement {
  name: string | null;
  url: string | null;
}

interface CarouselProps {
  type: string;
  itemsList: DecoElement[];
  setItemsList: (updatedArray: DecoElement[]) => void;
}

function Carousel({ type, itemsList, setItemsList }: CarouselProps) {
  function handleClickUp(event: React.MouseEvent) {
    const lastItem = itemsList[itemsList.length - 1];
    const updatedArray = [lastItem, ...itemsList.slice(0, itemsList.length - 1)];

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
        className="absolute flex justify-center items-center top-[5px] w-10 h-10 z-10 rounded-full bg-red hover:bg-hoverRed hover:cursor-pointer"
        onClick={event => {
          handleClickUp(event);
        }}
      >
        <img className="select-none" src="/assets/up_icon.png" alt="up icon" />
      </Button>
      <SquaresContainer>
        <Squares type={type} itemsList={itemsList} />
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

export default Carousel;
