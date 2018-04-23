import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import "typeface-roboto";
import { Provider } from "react-redux";
import ConfigureStore from "./stores/configureStore";
import registerServiceWorker from "./registerServiceWorker";

const store = ConfigureStore();
ReactDOM.render(
  <Provider store={store}>
      <App />
  </Provider>,
  document.getElementById("root")
);
registerServiceWorker();
