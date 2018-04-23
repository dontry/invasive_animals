import React from "react";
import { BrowserRouter } from "react-router-dom";
import Routes from "./routes";
import CssBaseLine from "material-ui/CssBaseline";
import NotificationContainer from "./containers/NotificationContainer";
import { ThemeProvider } from "styled-components";
import { theme } from "./assets/theme";
import { MuiThemeProvider, createMuiTheme } from "material-ui/styles";
import { lightGreen, lime, red } from "material-ui/colors";
import "./assets/App.css";
const muiTheme = createMuiTheme({
  palette: {
    primary: lightGreen,
    secondary: lime,
    error: red,
    contrastThreshold: 3
  }
});


const App = ({ children }) => (
  <ThemeProvider theme={theme}>
    <MuiThemeProvider theme={muiTheme}>
    <div className="App">
      <BrowserRouter>
        <CssBaseLine>
          <Routes />
        </CssBaseLine>
      </BrowserRouter>
      <NotificationContainer />
    </div>
    </MuiThemeProvider>
  </ThemeProvider>
);

export default App;
