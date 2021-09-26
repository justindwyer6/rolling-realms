import { combineReducers, createStore } from "redux";

import app from "./app";

export default () => {
  const store = createStore(
    combineReducers({
      app,
    }),
    // eslint-disable-next-line no-underscore-dangle
    window.__REDUX_DEVTOOLS_EXTENSION__ &&
      // eslint-disable-next-line no-underscore-dangle
      window.__REDUX_DEVTOOLS_EXTENSION__(),
  );

  return store;
};
