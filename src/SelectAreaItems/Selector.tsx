import useSelectAreaStore from "../store/selectArea";

function Selector() {
  const {
    selectorLeft,
    selectorWidth,
    isFixed,
  } = useSelectAreaStore();
  return(
    <div
      id="selector"
      className="absolute ring-8 ring-red bg-red opacity-30"
      style={{
        left: `${selectorLeft}px`,
        width: `${selectorWidth}px`,
        height: `560px`,
      }}
    >
      {isFixed && (
        <span className="flex justify-center items-center h-full text-4xl text-white">
          fixed
        </span>
      )}
    </div>
  );
}

export default Selector;
