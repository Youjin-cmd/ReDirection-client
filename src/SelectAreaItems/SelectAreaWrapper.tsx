interface VideoWrapperProps {
  children: React.ReactNode;
}

function VideoWrapper({ children }: VideoWrapperProps) {
  return (
    <div className="relative flex justify-center items-center min-w-[1000px] mb-10">
      {children}
    </div>
  );
}

export default VideoWrapper;
