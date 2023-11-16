import PropTypes from "prop-types";

function SquaresContainer({ children }) {
  return (
    <div className="flex flex-col overflow-hidden w-[300px] h-[700px] rounded-xl ring-4 ring-red">
      {children}
    </div>
  );
}

SquaresContainer.propTypes = {
  children: PropTypes.node.isRequired,
};

export default SquaresContainer;
