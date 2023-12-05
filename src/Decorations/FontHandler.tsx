import PropTypes from "prop-types";

import useEditStore from "../store/edit";
import GrabPointToDrag from "./GrabPointToDrag";
import FontBgColorSelector from "./FontBgColorSelector";
import FontColorSelector from "./FontColorSelector";

interface FontHandlerProps {
  setElementScale: () => void;
}

function FontHandler({ setElementScale } : FontHandlerProps) {
  const { fontCoord, setIsDragging } = useEditStore();
  return (
    <>
      <GrabPointToDrag
        coordX={fontCoord.fontX}
        coordY={fontCoord.fontY}
        elementType="font"
        setIsDragging={setIsDragging}
        setElementScale={setElementScale}
      />
      <FontColorSelector />
      <FontBgColorSelector />
    </>
  );
}

FontHandler.propTypes = {
  setElementScale: PropTypes.func.isRequired,
};

export default FontHandler;