import PropTypes from "prop-types";

interface ButtonProps {
  id?: string;
  className: string;
  children: React.ReactNode;
  disabled?: boolean;
  onClick: () => void;
}

function Button({ id, className, children, disabled, onClick }: ButtonProps) {
  return (
    <button
      id={id}
      className={className}
      disabled={disabled}
      onMouseDown={onClick}
    >
      {children}
    </button>
  );
}

export default Button;
