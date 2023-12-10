import { beforeEach, describe, expect, it } from "vitest";
import moveAreaSelector from "../../util/moveAreaSelector";
import useSelectAreaStore from "../../store/selectArea";

import CONSTANT from "../../constants/constant";
const { ANALYSIS_VIDEO_WIDTH } = CONSTANT;

const initialState = useSelectAreaStore.getState();

describe("moveAreaSelector", () => {
  beforeEach(() => {
    useSelectAreaStore.setState(initialState);
  });

  it("updates selectors coords correctly in normal pattern", () => {
    const { setSelectorLeft, setSelectorWidth } = useSelectAreaStore.getState();
    const mockVideoRect = { left: 38.75 };
    const mockEvent = { clientX: 798 };

    setSelectorLeft(263.25);
    setSelectorWidth(497);

    moveAreaSelector(
      mockVideoRect as DOMRect,
      mockEvent as React.MouseEvent,
      useSelectAreaStore.getState().selectorLeft,
      useSelectAreaStore.getState().selectorWidth,
      setSelectorLeft,
      setSelectorWidth,
    );

    const { selectorLeft, selectorWidth } = useSelectAreaStore.getState();

    expect(selectorLeft).toBe(263.25);
    expect(selectorWidth).toBe(496);
  });

  it("limits leftside whem outside of video is clicked", () => {
    const { setSelectorLeft, setSelectorWidth } = useSelectAreaStore.getState();
    const mockVideoRect = { left: 38.75 };
    const mockEvent = { clientX: -100 }; // outside video area

    setSelectorLeft(263.25);
    setSelectorWidth(497);

    moveAreaSelector(
      mockVideoRect as DOMRect,
      mockEvent as React.MouseEvent,
      useSelectAreaStore.getState().selectorLeft,
      useSelectAreaStore.getState().selectorWidth,
      setSelectorLeft,
      setSelectorWidth,
    );

    const { selectorLeft } = useSelectAreaStore.getState();

    expect(selectorLeft).toBe(0);
  });

  it("limits right side when right outside of video is clicked", () => {
    const { setSelectorLeft, setSelectorWidth } = useSelectAreaStore.getState();
    const mockVideoRect = { left: 38.75 };
    const mockEvent = { clientX: 1200 }; // outside video area

    setSelectorLeft(263.25);
    setSelectorWidth(497);

    moveAreaSelector(
      mockVideoRect as DOMRect,
      mockEvent as React.MouseEvent,
      useSelectAreaStore.getState().selectorLeft,
      useSelectAreaStore.getState().selectorWidth,
      setSelectorLeft,
      setSelectorWidth,
    );

    const { selectorLeft, selectorWidth } = useSelectAreaStore.getState();

    expect(selectorWidth).toBe(ANALYSIS_VIDEO_WIDTH - selectorLeft);
  });
})
