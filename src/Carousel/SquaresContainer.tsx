interface SquaresContainerProps {
  children: React.ReactNode;
}

function SquaresContainer({ children }: SquaresContainerProps) {
  return (
    <div className="flex flex-row md:flex-col overflow-hidden w-[700px] h-[100px] md:w-[300px] md:h-[700px] rounded-xl ring-4 ring-red">
      {children}
    </div>
  );
}

export default SquaresContainer;
