import useEditStore from "../store/edit";

const colorOptions = [
  { backgroundHex: "#FFFFFF", textHex: "#000000" },
  { backgroundHex: "#000000", textHex: "#FFFFFF" },
  { backgroundHex: "transparent", textHex: "#FFFFFF" },
];

function FontBgColorSelector() {
  const { selectedDecos, setFontBg } = useEditStore();

  function handleClickBgColor(event: React.MouseEvent<HTMLDivElement>) {
    const { id } = event.target as HTMLDivElement;

    setFontBg(id);
  }

  return (
    <div
      className="absolute justify-center w-[150px] h-10 z-10 hidden hover:flex peer-focus:flex"
      style={{
        left: `${selectedDecos["font"].X - 75 + selectedDecos["font"].fontWidth / 2}px`,
        top: `${selectedDecos["font"].Y + 50}px`,
      }}
    >
      {colorOptions.map(option => {
        return (
          <div
            key={option.backgroundHex}
            id={option.backgroundHex}
            className="flex justify-center items-center w-6 h-6 mr-3 select-none border-2"
            style={{
              backgroundColor: option.backgroundHex,
              color: option.textHex
            }}
            onClick={e => handleClickBgColor(e)}
          >
            T
          </div>
        );
      })}
    </div>
  );
}

export default FontBgColorSelector;
