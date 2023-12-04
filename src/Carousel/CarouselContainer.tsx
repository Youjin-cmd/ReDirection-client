interface CarouselContainerProps {
  children: React.ReactNode;
}

function CarouselContainer({ children }: CarouselContainerProps) {
  return (
    <div
      className="relative flex justify-center items-center w-[320px] h-[750px] mx-5"
      draggable={false}
    >
      {children}
    </div>
  );
}

export default CarouselContainer;
