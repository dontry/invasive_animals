import React from "react";
import { BrowserRouter } from "react-router-dom";
import Routes from "./Routes";
import "./assets/App.css";

const App = ({ children }) => (
  <div className="App">
    <BrowserRouter>
      <Routes />
    </BrowserRouter>
  </div>
);

export default App;
