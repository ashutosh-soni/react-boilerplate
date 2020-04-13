import { combineReducers } from "redux";

import configReducer from "./config/config.reducer";
import windowResizeReducer from "./window-resize/windowResize.reducer";

const rootReducer = combineReducers({
  config: configReducer,
  screen: windowResizeReducer,
});

export default rootReducer;
