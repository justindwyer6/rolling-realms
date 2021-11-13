/* eslint-disable no-underscore-dangle */
import { combineReducers, createStore } from "redux";

import app from "reducers/app";

export default () => {
  const store = createStore(
    combineReducers({
      app,
    }),
    window.__REDUX_DEVTOOLS_EXTENSION__ &&
      window.__REDUX_DEVTOOLS_EXTENSION__(),
  );

  return store;
};
