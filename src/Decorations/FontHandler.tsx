import useEditStore from "../store/edit";
import GrabPointToDrag from "./GrabPointToDrag";
import FontBgColorSelector from "./FontBgColorSelector";
import FontColorSelector from "./FontColorSelector";

interface FontHandlerProps {
  setElementScale: () => void;
}

function FontHandler({ setElementScale } : FontHandlerProps) {
  const { selectedSquares, setIsDragging } = useEditStore();
  return (
    <>
      <GrabPointToDrag
        coordX={selectedSquares["font"].X}
        coordY={selectedSquares["font"].Y}
        elementType="font"
        setIsDragging={setIsDragging}
        setElementScale={setElementScale}
      />
      <FontColorSelector />
      <FontBgColorSelector />
    </>
  );
}

export default FontHandler;
