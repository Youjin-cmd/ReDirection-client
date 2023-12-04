interface SquaresContainerProps {
  children: React.ReactNode;
}

function SquaresContainer({ children }: SquaresContainerProps) {
  return (
    <div className="flex flex-col overflow-hidden w-[300px] h-[700px] rounded-xl ring-4 ring-red">
      {children}
    </div>
  );
}

export default SquaresContainer;
