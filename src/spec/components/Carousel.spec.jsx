import { render, screen, fireEvent, rerender } from "@testing-library/react";
import Carousel from "../../Carousel/Carousel";

import useEditStore from "../../store/edit";

const initialState = useEditStore.getState();

describe("Carousel component", () => {
  beforeEach(() => {
    useEditStore.setState(initialState);
  });

  it("renders buttons well (10 stickers with 2 handlers)", () => {
    render(
      <Carousel
        type="sticker"
        array={initialState.stickerArray}
        setArray={initialState.setStickerArray}
      />
    );
    const confirmButton = screen.getAllByRole("button");

    expect(confirmButton.length).toBe(12);
  });

  it("up button updates array well", () => {
    render(
      <Carousel
        type="sticker"
        array={initialState.stickerArray}
        setArray={initialState.setStickerArray}
      />
    );
    const upButton = screen.getByAltText("up icon");

    fireEvent.mouseDown(upButton);

    const { stickerArray } = useEditStore.getState();

    expect(stickerArray).toStrictEqual([
      "https://re-direction-bucket.s3.ap-northeast-2.amazonaws.com/stickers/monitor.svg",
      null,
      "https://re-direction-bucket.s3.ap-northeast-2.amazonaws.com/stickers/heart.svg",
      "https://re-direction-bucket.s3.ap-northeast-2.amazonaws.com/stickers/yay.svg",
      "https://re-direction-bucket.s3.ap-northeast-2.amazonaws.com/stickers/game_over.svg",
      "https://re-direction-bucket.s3.ap-northeast-2.amazonaws.com/stickers/fabulous.svg",
      "https://re-direction-bucket.s3.ap-northeast-2.amazonaws.com/stickers/star.svg",
      "https://re-direction-bucket.s3.ap-northeast-2.amazonaws.com/stickers/rainbow.svg",
      "https://re-direction-bucket.s3.ap-northeast-2.amazonaws.com/stickers/pizza.svg",
      "https://re-direction-bucket.s3.ap-northeast-2.amazonaws.com/stickers/sunglass.svg",
    ]);
  });

  it("down button updates array well", () => {
    render(
      <Carousel
        type="sticker"
        array={initialState.stickerArray}
        setArray={initialState.setStickerArray}
      />
    );
    const downButton = screen.getByAltText("down icon");

    fireEvent.mouseDown(downButton);

    const { stickerArray } = useEditStore.getState();

    expect(stickerArray).toStrictEqual([
      "https://re-direction-bucket.s3.ap-northeast-2.amazonaws.com/stickers/heart.svg",
      "https://re-direction-bucket.s3.ap-northeast-2.amazonaws.com/stickers/yay.svg",
      "https://re-direction-bucket.s3.ap-northeast-2.amazonaws.com/stickers/game_over.svg",
      "https://re-direction-bucket.s3.ap-northeast-2.amazonaws.com/stickers/fabulous.svg",
      "https://re-direction-bucket.s3.ap-northeast-2.amazonaws.com/stickers/star.svg",
      "https://re-direction-bucket.s3.ap-northeast-2.amazonaws.com/stickers/rainbow.svg",
      "https://re-direction-bucket.s3.ap-northeast-2.amazonaws.com/stickers/pizza.svg",
      "https://re-direction-bucket.s3.ap-northeast-2.amazonaws.com/stickers/sunglass.svg",
      "https://re-direction-bucket.s3.ap-northeast-2.amazonaws.com/stickers/monitor.svg",
      null,
    ]);
  });

  it("down button successfully updates array for three times in a row", () => {
    const { rerender } = render(
      <Carousel
        type="sticker"
        array={initialState.stickerArray}
        setArray={initialState.setStickerArray}
      />
    );
    const downButton = screen.getByAltText("down icon");

    fireEvent.mouseDown(downButton);

    const { stickerArray: afterFirstClick } = useEditStore.getState();

    rerender(
      <Carousel
        type="sticker"
        array={afterFirstClick}
        setArray={initialState.setStickerArray}
      />
    );

    fireEvent.mouseDown(downButton);

    const { stickerArray: afterSecondClick } = useEditStore.getState();

    rerender(
      <Carousel
        type="sticker"
        array={afterSecondClick}
        setArray={initialState.setStickerArray}
      />
    );

    fireEvent.mouseDown(downButton);

    const { stickerArray: afterThirdClick } = useEditStore.getState();

    expect(afterThirdClick).toStrictEqual([
      "https://re-direction-bucket.s3.ap-northeast-2.amazonaws.com/stickers/game_over.svg",
      "https://re-direction-bucket.s3.ap-northeast-2.amazonaws.com/stickers/fabulous.svg",
      "https://re-direction-bucket.s3.ap-northeast-2.amazonaws.com/stickers/star.svg",
      "https://re-direction-bucket.s3.ap-northeast-2.amazonaws.com/stickers/rainbow.svg",
      "https://re-direction-bucket.s3.ap-northeast-2.amazonaws.com/stickers/pizza.svg",
      "https://re-direction-bucket.s3.ap-northeast-2.amazonaws.com/stickers/sunglass.svg",
      "https://re-direction-bucket.s3.ap-northeast-2.amazonaws.com/stickers/monitor.svg",
      null,
      "https://re-direction-bucket.s3.ap-northeast-2.amazonaws.com/stickers/heart.svg",
      "https://re-direction-bucket.s3.ap-northeast-2.amazonaws.com/stickers/yay.svg",
    ]);
  });
});
