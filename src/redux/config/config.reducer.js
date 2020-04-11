import { ConfigActionTypes } from "./config.types";

const INITIAL_STATE = {};

const configReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ConfigActionTypes.SET_CONFIG:
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
};

export default configReducer;
