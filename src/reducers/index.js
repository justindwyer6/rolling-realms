import { combineReducers, createStore } from "redux";

import app from "./app";

export default () => {
  const store = createStore(
    combineReducers({
      app,
    }),
  );

  return store;
};
