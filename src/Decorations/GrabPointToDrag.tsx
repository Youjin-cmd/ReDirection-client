interface GrabPointToDragProps {
  coordX: number | undefined;
  coordY: number | undefined;
  elementType: string;
  setIsDragging: (elementType: string) => void;
  setElementScale: () => void;
}

function GrabPointToDrag({
  coordX,
  coordY,
  elementType,
  setIsDragging,
  setElementScale,
}: GrabPointToDragProps) {
  return (
    <div
      className="absolute justify-center items-center w-8 h-8 z-10 rounded-full bg-white hidden select-none hover:flex peer-hover:flex hover:cursor-move"
      style={{
        touchAction: "none",
        left: `${coordX! - 13}px`,
        top: `${coordY! - 13}px`,
      }}
      onMouseDown={() => {
        setIsDragging(elementType);
        setElementScale();
      }}
      onTouchStart={() => {
        setIsDragging(elementType);
        setElementScale();
      }}
      onMouseUp={() => setIsDragging("")}
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

export default GrabPointToDrag;
