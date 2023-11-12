import PropTypes from "prop-types";

function GrabPointToDrag({ coordX, coordY, setIsDragging }) {
  return (
    <div
      className="absolute justify-center items-center w-6 h-6 z-10 rounded-full bg-white hidden select-none hover:flex peer-hover:flex hover:cursor-move"
      style={{
        left: `${coordX - 10}px`,
        top: `${coordY - 10}px`,
      }}
      onMouseDown={() => setIsDragging(true)}
      onMouseUp={() => setIsDragging(false)}
      draggable={false}
    >
      <img
        className="w-5 select-none"
        src="/assets/move_icon.png"
        alt="move icon"
        draggable={false}
      />
    </div>
  );
}

GrabPointToDrag.propTypes = {
  coordX: PropTypes.number.isRequired,
  coordY: PropTypes.number.isRequired,
  setIsDragging: PropTypes.func.isRequired,
};

export default GrabPointToDrag;
