import PropTypes from "prop-types";

import useEditStore from "../store/edit";
import GrabPointToDrag from "./GrabPointToDrag";
import FontBgColorSelector from "./FontBgColorSelector";
import FontColorSelector from "./FontColorSelector";

function FontHandler({ setElementScale }) {
  const { fontX, fontY, setIsDragging } = useEditStore();
  return (
    <>
      <GrabPointToDrag
        coordX={fontX}
        coordY={fontY}
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
