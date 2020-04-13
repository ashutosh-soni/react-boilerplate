import { createStore, applyMiddleware, compose } from "redux";

import rootReducer from "./root-reducer";

const middleware = [];

// export const store = createStore(rootReducer, applyMiddleware(...middleware));
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const enhancer = composeEnhancers(
  applyMiddleware(...middleware)
  // other store enhancers if any
);

export const store = createStore(rootReducer, enhancer);
