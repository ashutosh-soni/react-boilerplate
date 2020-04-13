import { WindowResizeTypes } from "./windowResize.types";

export const setWindowSize = (width, height) => ({
  type: WindowResizeTypes.SET_SIZE,
  width,
  height,
});
