import { render, screen, fireEvent } from "@testing-library/react";
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
        itemsList={initialState.stickerArray}
        setItemsList={initialState.setStickerArray}
      />
    );
    const confirmButton = screen.getAllByRole("button");

    expect(confirmButton.length).toBe(12);
  });

  it("up button updates array well", () => {
    render(
      <Carousel
      type="sticker"
      itemsList={initialState.stickerArray}
      setItemsList={initialState.setStickerArray}
      />
    );
    const upButton = screen.getByAltText("up icon");

    fireEvent.mouseDown(upButton);

    const { stickerArray } = useEditStore.getState();

    expect(stickerArray).toStrictEqual([
      {
        name: "monitor",
        url: "https://re-direction-bucket.s3.ap-northeast-2.amazonaws.com/stickers/monitor.svg",
      },
      { name: null, url: null },
      {
        name: "heart",
        url: "https://re-direction-bucket.s3.ap-northeast-2.amazonaws.com/stickers/heart.svg",
      },
      {
        name: "yay",
        url: "https://re-direction-bucket.s3.ap-northeast-2.amazonaws.com/stickers/yay.svg",
      },
      {
        name: "game_over",
        url: "https://re-direction-bucket.s3.ap-northeast-2.amazonaws.com/stickers/game_over.svg",
      },
      {
        name: "fabulous",
        url: "https://re-direction-bucket.s3.ap-northeast-2.amazonaws.com/stickers/fabulous.svg",
      },
      {
        name: "star",
        url: "https://re-direction-bucket.s3.ap-northeast-2.amazonaws.com/stickers/star.svg",
      },
      {
        name: "rainbow",
        url: "https://re-direction-bucket.s3.ap-northeast-2.amazonaws.com/stickers/rainbow.svg",
      },
      {
        name: "pizza",
        url: "https://re-direction-bucket.s3.ap-northeast-2.amazonaws.com/stickers/pizza.svg",
      },
      {
        name: "sunglass",
        url: "https://re-direction-bucket.s3.ap-northeast-2.amazonaws.com/stickers/sunglass.svg",
      },
    ]);
  });

  it("down button updates array well", () => {
    render(
      <Carousel
      type="sticker"
      itemsList={initialState.stickerArray}
      setItemsList={initialState.setStickerArray}
      />
    );
    const downButton = screen.getByAltText("down icon");

    fireEvent.mouseDown(downButton);

    const { stickerArray } = useEditStore.getState();

    expect(stickerArray).toStrictEqual([
      {
        name: "heart",
        url: "https://re-direction-bucket.s3.ap-northeast-2.amazonaws.com/stickers/heart.svg",
      },
      {
        name: "yay",
        url: "https://re-direction-bucket.s3.ap-northeast-2.amazonaws.com/stickers/yay.svg",
      },
      {
        name: "game_over",
        url: "https://re-direction-bucket.s3.ap-northeast-2.amazonaws.com/stickers/game_over.svg",
      },
      {
        name: "fabulous",
        url: "https://re-direction-bucket.s3.ap-northeast-2.amazonaws.com/stickers/fabulous.svg",
      },
      {
        name: "star",
        url: "https://re-direction-bucket.s3.ap-northeast-2.amazonaws.com/stickers/star.svg",
      },
      {
        name: "rainbow",
        url: "https://re-direction-bucket.s3.ap-northeast-2.amazonaws.com/stickers/rainbow.svg",
      },
      {
        name: "pizza",
        url: "https://re-direction-bucket.s3.ap-northeast-2.amazonaws.com/stickers/pizza.svg",
      },
      {
        name: "sunglass",
        url: "https://re-direction-bucket.s3.ap-northeast-2.amazonaws.com/stickers/sunglass.svg",
      },
      {
        name: "monitor",
        url: "https://re-direction-bucket.s3.ap-northeast-2.amazonaws.com/stickers/monitor.svg",
      },
      { name: null, url: null },
    ]);
  });

  it("down button successfully updates array for three times in a row", () => {
    const { rerender } = render(
      <Carousel
        type="sticker"
        itemsList={initialState.stickerArray}
        setItemsList={initialState.setStickerArray}
      />
    );
    const downButton = screen.getByAltText("down icon");

    fireEvent.mouseDown(downButton);

    const { stickerArray: afterFirstClick } = useEditStore.getState();

    rerender(
      <Carousel
        type="sticker"
        itemsList={afterFirstClick}
        setItemsList={initialState.setStickerArray}
      />
    );

    fireEvent.mouseDown(downButton);

    const { stickerArray: afterSecondClick } = useEditStore.getState();

    rerender(
      <Carousel
        type="sticker"
        itemsList={afterSecondClick}
        setItemsList={initialState.setStickerArray}
      />
    );

    fireEvent.mouseDown(downButton);

    const { stickerArray: afterThirdClick } = useEditStore.getState();

    expect(afterThirdClick).toStrictEqual([
      {
        name: "game_over",
        url: "https://re-direction-bucket.s3.ap-northeast-2.amazonaws.com/stickers/game_over.svg",
      },
      {
        name: "fabulous",
        url: "https://re-direction-bucket.s3.ap-northeast-2.amazonaws.com/stickers/fabulous.svg",
      },
      {
        name: "star",
        url: "https://re-direction-bucket.s3.ap-northeast-2.amazonaws.com/stickers/star.svg",
      },
      {
        name: "rainbow",
        url: "https://re-direction-bucket.s3.ap-northeast-2.amazonaws.com/stickers/rainbow.svg",
      },
      {
        name: "pizza",
        url: "https://re-direction-bucket.s3.ap-northeast-2.amazonaws.com/stickers/pizza.svg",
      },
      {
        name: "sunglass",
        url: "https://re-direction-bucket.s3.ap-northeast-2.amazonaws.com/stickers/sunglass.svg",
      },
      {
        name: "monitor",
        url: "https://re-direction-bucket.s3.ap-northeast-2.amazonaws.com/stickers/monitor.svg",
      },
      { name: null, url: null },
      {
        name: "heart",
        url: "https://re-direction-bucket.s3.ap-northeast-2.amazonaws.com/stickers/heart.svg",
      },
      {
        name: "yay",
        url: "https://re-direction-bucket.s3.ap-northeast-2.amazonaws.com/stickers/yay.svg",
      },
    ]);
  });
});
