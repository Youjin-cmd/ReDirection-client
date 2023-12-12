import { useEffect, useRef } from "react";

import useEditStore from "../store/edit";
import FontHandler from "./FontHandler";
import isEnglishLetter from "../util/isEnglishLetter";

function Font() {
  const { selectedDecos, setFontWidth, setFontContent, setTargetElementScale } =
    useEditStore();
  const spanRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (spanRef.current) {
      const spanWidth = spanRef.current.getBoundingClientRect().width;
      setFontWidth(spanWidth);
    }
  }, [selectedDecos.font!.fontContent, selectedDecos.font!.name]);

  function setElementScale() {
    setTargetElementScale(selectedDecos.font!.fontWidth!, 40);
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
        className={`peer absolute pt-1 z-10 outline-none text-3xl text-center`}
        style={{
          left: `${selectedDecos.font!.X}px`,
          top: `${selectedDecos.font!.Y}px`,
          color: `${selectedDecos.font!.fontColor}`,
          background: `${selectedDecos.font!.fontBg}`,
          width: `${selectedDecos.font!.fontWidth}px`,
          fontFamily: selectedDecos.font!.name,
        }}
        value={selectedDecos.font!.fontContent}
        onChange={handleChangeText}
        autoComplete="off"
      />
      <span
        ref={spanRef}
        className="px-3 text-3xl bg-red opacity-0 select-none"
        style={{
          fontFamily: selectedDecos.font!.name,
        }}
        draggable={false}
      >
        {selectedDecos.font!.fontContent}
      </span>
      <FontHandler setElementScale={setElementScale} />
    </div>
  );
}

export default Font;
