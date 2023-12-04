interface GrabPointToDragProps {
  coordX: number;
  coordY: number;
  elementType: string;
  setIsDragging: (elementType: string | null) => void;
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
      className="absolute justify-center items-center w-6 h-6 z-10 rounded-full bg-white hidden select-none hover:flex peer-hover:flex hover:cursor-move"
      style={{
        left: `${coordX - 10}px`,
        top: `${coordY - 10}px`,
      }}
      onMouseDown={() => {
        setIsDragging(elementType);
        setElementScale();
      }}
      onMouseUp={() => setIsDragging(null)}
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
