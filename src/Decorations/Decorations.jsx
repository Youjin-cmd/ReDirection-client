import PropTypes from "prop-types";
import useEditStore from "../store/edit";

import Font from "./Font";
import Sticker from "./Sticker";

function Decorations({ handleMouseUp }) {
  const { selectedSquares } = useEditStore();

  return (
    <div onMouseUp={handleMouseUp}>
      {selectedSquares.font && <Font />}
      {selectedSquares.sticker && <Sticker />}
    </div>
  );
}

Decorations.propTypes = {
  handleMouseUp: PropTypes.func.isRequired,
};

export default Decorations;
