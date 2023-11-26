import { createPortal } from "react-dom";
import Button from "../shared/Button";

function Modal({ children, onClick }) {
  return createPortal(
    <div className="fixed flex justify-center items-center left-0 right-0 top-0 bottom-0 bg-black bg-opacity-50 z-10">
      <div
        className="flex justify-center items-center relative h-auto w-auto px-14 py-9 rounded-lg bg-white shadow-lg overflow-auto"
        onClick={event => event.stopPropagation()}
      >
        <Button
          className="absolute top-3 right-3 flex w-6 h-6"
          onClick={onClick}
        >
          <img className="" src="/assets/close_icon.svg" alt="close button" />
        </Button>
        {children}
      </div>
    </div>,
    document.body,
  );
}

export default Modal;
