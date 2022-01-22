/* eslint-disable no-underscore-dangle */
import { combineReducers, createStore } from "redux";

import app from "reducers/app";
import rounds from "reducers/rounds";

export default () => {
  const store = createStore(
    combineReducers({
      app,
      rounds,
    }),
    window.__REDUX_DEVTOOLS_EXTENSION__ &&
      window.__REDUX_DEVTOOLS_EXTENSION__(),
  );

  return store;
};
