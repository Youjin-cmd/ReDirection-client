import PropTypes from "prop-types";

function Button({ className, type, children, disabled, onClick }) {
  return (
    <button
      type={type}
      className={className}
      disabled={disabled}
      onMouseDown={onClick}
    >
      {children}
    </button>
  );
}

Button.propTypes = {
  className: PropTypes.string,
  type: PropTypes.string,
  disabled: PropTypes.bool,
  onClick: PropTypes.func,
  children: PropTypes.any.isRequired,
};

Button.defaultProps = {
  type: "click",
  disabled: false,
  className: "",
  onClick: null,
};

export default Button;
