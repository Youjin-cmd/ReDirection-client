import useEditStore from "../store/edit";
import DraggableArea from "./DraggableArea";
import FontBgColorSelector from "./FontBgColorSelector";
import FontColorSelector from "./FontColorSelector";

function FontHandler() {
  const { fontX, fontY, setIsFontDragging } = useEditStore();
  return (
    <>
      <DraggableArea
        coordX={fontX}
        coordY={fontY}
        setIsDragging={setIsFontDragging}
      />
      <FontColorSelector />
      <FontBgColorSelector />
    </>
  );
}

export default FontHandler;
