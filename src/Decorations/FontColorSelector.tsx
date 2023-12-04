import useEditStore from "../store/edit";

function FontColorSelector() {
  const { fontCoord, fontWidth, setFontColor } = useEditStore();

  function handleClickColor(event: React.MouseEvent<HTMLDivElement>) {
    const { id } = event.target as HTMLDivElement;
    if (id === "font-red") {
      setFontColor("#C32F2F");
    }

    if (id === "font-white") {
      setFontColor("#FFFFFF");
    }

    if (id === "font-blue") {
      setFontColor("#4287f5");
    }

    if (id === "font-black") {
      setFontColor("#000000");
    }
  }

  return (
    <>
      <div
        className="absolute justify-center w-[150px] h-10 z-10 hidden hover:flex peer-focus:flex"
        style={{
          left: `${fontCoord.fontX + fontWidth / 4}px`,
          top: `${fontCoord.fontY - 40}px`,
        }}
      >
        <div
          key="font-red"
          id="font-red"
          className="w-6 h-6 mr-3 rounded-full bg-red"
          onClick={e => handleClickColor(e)}
        />
        <div
          key="font-white"
          id="font-white"
          className="w-6 h-6 mr-3 rounded-full bg-white"
          onClick={e => handleClickColor(e)}
        />
        <div
          key="font-blue"
          id="font-blue"
          className="w-6 h-6 mr-3 rounded-full bg-blue"
          onClick={e => handleClickColor(e)}
        />
        <div
          key="font-black"
          id="font-black"
          className="w-6 h-6 mr-3 rounded-full bg-black"
          onClick={e => handleClickColor(e)}
        />
      </div>
    </>
  );
}

export default FontColorSelector;
