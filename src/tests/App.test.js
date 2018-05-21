import React from "react";
import ReactDOM from "react-dom";
import App from "../App"
import { Provider } from "react-redux";
import ConfigureStore from "../stores/configureStore";


it("renders without crashing", () => {
  const store = ConfigureStore();
  const div = document.createElement("div");
  ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});