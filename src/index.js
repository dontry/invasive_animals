import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import ErrorBoundary from "./components/common/ErrorBoundary";
import "typeface-roboto";
import { Provider } from "react-redux";
import ConfigureStore from "./stores/configureStore";
import registerServiceWorker from "./registerServiceWorker";

const store = ConfigureStore();
ReactDOM.render(
  <Provider store={store}>
    <ErrorBoundary>
      <App />
    </ErrorBoundary>
  </Provider>,
  document.getElementById("root")
);
registerServiceWorker();
