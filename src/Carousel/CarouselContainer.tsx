interface CarouselContainerProps {
  children: React.ReactNode;
}

function CarouselContainer({ children }: CarouselContainerProps) {
  return (
    <div
      className="relative flex justify-center items-center w-[370px] h-[150px] md:w-[320px] md:h-[750px] mx-5"
      draggable={false}
    >
      {children}
    </div>
  );
}

export default CarouselContainer;
