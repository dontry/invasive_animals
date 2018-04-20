import React from "react";
import { BrowserRouter } from "react-router-dom";
import Routes from "./routes";
import CssBaseLine from "material-ui/CssBaseline";
import NotificationContainer from "./containers/NotificationContainer";
import { ThemeProvider } from "styled-components";
import { theme } from "./assets/theme";
import "./assets/App.css";

const App = ({ children }) => (
  <ThemeProvider theme={theme}>
    <div className="App">
      <BrowserRouter>
        <CssBaseLine>
          <Routes />
        </CssBaseLine>
      </BrowserRouter>
      <NotificationContainer />
    </div>
  </ThemeProvider>
);

export default App;
