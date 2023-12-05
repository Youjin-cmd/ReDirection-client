import { useEffect, useRef } from "react";

import useEditStore from "../store/edit";
import FontHandler from "./FontHandler";
import isEnglishLetter from "../util/isEnglishLetter";

function Font() {
  const {
    selectedSquares,
    fontCoord,
    fontColor,
    fontBg,
    fontWidth,
    fontContent,
    setFontWidth,
    setFontContent,
    setTargetElementScale,
  } = useEditStore();

  const spanRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (spanRef.current) {
      const spanWidth = spanRef.current.getBoundingClientRect().width;
      setFontWidth(spanWidth);
    }
  }, [fontContent, selectedSquares.typeface]);

  function setElementScale() {
    setTargetElementScale(fontWidth, 40);
  }

  function handleChangeText(event: React.ChangeEvent<HTMLInputElement>) {
    const value = event.target.value;

    for (const char of value) {
      if (!isEnglishLetter(char)) {
        return;
      }
    }

    setFontContent(value);
  }

  return (
    <div id="fontWrapper">
      <input
        key="selected font"
        id="selected font"
        className={`peer absolute pt-1 z-10 outline-none text-3xl text-center overflow-hidden resize-none select-none`}
        style={{
          left: `${fontCoord.fontX}px`,
          top: `${fontCoord.fontY}px`,
          color: `${fontColor}`,
          background: `${fontBg}`,
          width: `${fontWidth}px`,
          fontFamily: selectedSquares.typeface,
        }}
        draggable={false}
        value={fontContent}
        onChange={handleChangeText}
        autoComplete="off"
      />
      <span
        ref={spanRef}
        className="px-3 text-3xl bg-red opacity-0"
        style={{
          fontFamily: selectedSquares.typeface,
        }}
      >
        {fontContent}
      </span>
      <FontHandler setElementScale={setElementScale} />
    </div>
  );
}

export default Font;
