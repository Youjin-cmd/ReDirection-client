import PropTypes from "prop-types";

function CarouselContainer({ children }) {
  return (
    <div
      className="relative flex justify-center items-center w-[320px] h-[750px] mx-5"
      draggable={false}
    >
      {children}
    </div>
  );
}

CarouselContainer.propTypes = {
  children: PropTypes.node.isRequired,
};

export default CarouselContainer;
