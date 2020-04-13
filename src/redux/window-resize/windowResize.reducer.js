import { WindowResizeTypes } from "./windowResize.types";

const INITIAL_STATE = {
  width: typeof window === "object" ? window.innerWidth : null,
  height: typeof window === "object" ? window.innerHeight : null,
};

const windowResizeReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case WindowResizeTypes.SET_SIZE:
      return {
        ...state,
        width: action.width,
        height: action.height,
      };
    default:
      return state;
  }
};

export default windowResizeReducer;
