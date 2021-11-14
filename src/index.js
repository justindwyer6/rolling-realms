import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import App from "components/App/App";
import createStore from "reducers";
import "index.css";

const store = createStore();

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root"),
);
