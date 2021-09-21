import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { Provider } from "react-redux";
import App from "./components/App/App";
import ErrorBoundary from "./components/ErrorBoundary";
import createStoreBlah from "./reducers";

const store = createStoreBlah();

ReactDOM.render(
  <React.StrictMode>
    <ErrorBoundary>
      <Provider store={store}>
        <App />
      </Provider>
    </ErrorBoundary>
  </React.StrictMode>,
  document.getElementById("root"),
);
