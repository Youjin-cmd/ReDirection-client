import Button from "../shared/Button";

interface SquareProps {
  children: React.ReactNode;
  clickHandleSquare: () => void;
  active: boolean;
}

function Square({ children, clickHandleSquare, active }: SquareProps) {
  return (
    <div
      className={`flex justify-center items-center w-[125px] h-[110px] md:h-[141px] md:w-[300px] border-b-4 border-lightRed
        ${active && "bg-lightRed"}`}
      draggable={false}
    >
      <Button
        className="relative flex justify-center items-center h-[120px] w-full hover:cursor-pointer"
        onClick={clickHandleSquare}
      >
        {children}
      </Button>
    </div>
  );
}

export default Square;
