import useEditStore from "../store/edit";

function FontBgColorSelector() {
  const { fontCoord, setFontBg, fontWidth } = useEditStore();

  function handleClickBgColor(event: React.MouseEvent<HTMLDivElement>) {
    const { id } = event.target as HTMLDivElement;
    if (id === "bg-white") {
      setFontBg("#FFFFFF");
    }

    if (id === "bg-black") {
      setFontBg("#000000");
    }

    if (id === "bg-none") {
      setFontBg("transparent");
    }
  }

  return (
    <div
      className="absolute justify-center w-[150px] h-10 z-10 hidden hover:flex peer-focus:flex"
      style={{
        left: `${fontCoord.fontX + fontWidth / 4}px`,
        top: `${fontCoord.fontY + 50}px`,
      }}
    >
      <div
        key="bg-white"
        id="bg-white"
        className="w-6 h-6 mr-3 select-none bg-white text-center"
        onClick={e => handleClickBgColor(e)}
      >
        T
      </div>
      <div
        key="bg-black"
        id="bg-black"
        className="w-6 h-6 mr-3 select-none bg-black text-white text-center"
        onClick={e => handleClickBgColor(e)}
      >
        T
      </div>
      <div
        key="bg-none"
        id="bg-none"
        className="w-6 h-6 mr-3 select-none bg-green text-white text-center"
        onClick={e => handleClickBgColor(e)}
      >
        T
      </div>
    </div>
  );
}

export default FontBgColorSelector;
