import React from "react";
import { BrowserRouter } from "react-router-dom";
import Routes from "./Routes";
import NotificationContainer from "./containers/NotificationContainer";
import "./assets/App.css";

const App = ({ children }) => (
  <div className="App">
    <BrowserRouter>
      <Routes />
    </BrowserRouter>
    <NotificationContainer />
  </div>
);

export default App;
