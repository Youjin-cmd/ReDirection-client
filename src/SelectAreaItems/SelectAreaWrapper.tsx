import useProgressStore from "../store/progress";
import useSelectAreaStore from "../store/selectArea";

interface VideoWrapperProps {
  children: React.ReactNode;
}

function VideoWrapper({ children }: VideoWrapperProps) {
  const { showLoading } = useProgressStore();
  const { setIsDragging } = useSelectAreaStore();

  return (
    <div
      className="relative flex justify-center items-center min-w-[1000px] mb-10 hover:cursor-ew-resize"
      onMouseDown={!showLoading ? () => setIsDragging(true) : undefined}
    >
      {children}
    </div>
  );
}

export default VideoWrapper;
