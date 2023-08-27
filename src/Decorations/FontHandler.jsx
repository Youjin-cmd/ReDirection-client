import useEditStore from "../store/edit";
import GrabPointToDrag from "./GrabPointToDrag";
import FontBgColorSelector from "./FontBgColorSelector";
import FontColorSelector from "./FontColorSelector";

function FontHandler() {
  const { fontX, fontY, setIsFontDragging } = useEditStore();
  return (
    <>
      <GrabPointToDrag
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
