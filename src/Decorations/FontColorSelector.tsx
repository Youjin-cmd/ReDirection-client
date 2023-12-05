import useEditStore from "../store/edit";

const colorOptions = [
  { backgroundHex: "#C32F2F"},
  { backgroundHex: "#FFFFFF"},
  { backgroundHex: "#4287f5"},
  { backgroundHex: "#000000"},
];

function FontColorSelector() {
  const { fontCoord, fontWidth, setFontColor } = useEditStore();

  function handleClickColor(event: React.MouseEvent<HTMLDivElement>) {
    const { id } = event.target as HTMLDivElement;

    setFontColor(id);
  }

  return (
    <>
      <div
        className="absolute justify-center w-[150px] h-10 z-10 hidden hover:flex peer-focus:flex"
        style={{
          left: `${fontCoord.fontX - 75 + fontWidth / 2}px`,
          top: `${fontCoord.fontY - 40}px`,
        }}
      >
        {colorOptions.map(option => {
          return (
            <div
              key={option.backgroundHex}
              id={option.backgroundHex}
              className="w-6 h-6 mr-3 rounded-full"
              style={{
                backgroundColor: option.backgroundHex,
              }}
              onClick={e => handleClickColor(e)}
            />
          );
        })}
      </div>
    </>
  );
}

export default FontColorSelector;
