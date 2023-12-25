/* eslint-disable @typescript-eslint/no-explicit-any */
interface ButtonProps {
  id?: string;
  className: string;
  children: React.ReactNode;
  disabled?: boolean;
  onClick: (...args: any[]) => void;
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
