import PropTypes from "prop-types";
import Button from "../shared/Button";

function Square({ children, onClick, active }) {
  return (
    <div
      className={`flex justify-center items-center h-[141px] w-[300px] border-b-4 border-lightRed
        ${active && "bg-lightRed"}`}
      draggable={false}
    >
      <Button
        className="relative flex justify-center items-center h-[120px] w-full hover:cursor-pointer"
        onClick={() => onClick()}
      >
        {children}
      </Button>
    </div>
  );
}

Square.propTypes = {
  children: PropTypes.any.isRequired,
  onClick: PropTypes.func.isRequired,
  active: PropTypes.bool.isRequired,
};

export default Square;