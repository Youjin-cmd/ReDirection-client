import useEditStore from "../store/edit";
import FontHandler from "./FontHandler";

function Font() {
  const {
    selectedSquares,
    fontX,
    fontY,
    fontColor,
    fontBg,
    fontWidth,
    fontContent,
    setFontWidth,
    setFontContent,
  } = useEditStore();

  function handleChangeText(event) {
    const value = event.target.value;
    const englishLowerCaseRegex = /[a-z]/;
    const specialCharacterRegex = /[!@#$%^&*()_+{}[\]:;<>,.?~\-/\\|=]/;
    const spaceRegex = /\s/;
    let newLength = 0;
    let newValue = "";

    for (let i = 0; i < value.length; i++) {
      if (
        englishLowerCaseRegex.test(value[i]) ||
        specialCharacterRegex.test(value[i]) ||
        spaceRegex.test(value[i])
      ) {
        newLength += 17;
        newValue += value[i];
      } else {
        newLength += 29;
        newValue += value[i];
      }
    }

    if (newLength > 370) {
      return;
    }

    setFontContent(newValue);
    setFontWidth(newLength);
  }

  function handleKeyUp(event) {
    if (!event.target.value) {
      setFontWidth(10);
    }
  }

  return (
    <div>
      <input
        key="font"
        id="font"
        className={`peer absolute z-10 outline-none text-3xl text-center overflow-hidden resize-none select-none`}
        style={{
          left: `${fontX}px`,
          top: `${fontY}px`,
          color: `${fontColor}`,
          background: `${fontBg}`,
          width: `${fontWidth}px`,
          fontFamily: selectedSquares.typeface,
        }}
        draggable={false}
        value={fontContent}
        onChange={handleChangeText}
        onKeyUp={e => handleKeyUp(e)}
        autoComplete="off"
      />
      <FontHandler />
    </div>
  );
}

export default Font;
