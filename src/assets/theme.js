import { green, lightGreen, cyan, red, teal } from "material-ui/colors";
/**
 * Created by caidong on 11/4/18.
 */
export const theme = {
  palette: {
    primary: {
      light: green[200],
      main: green[500],
      dark: green[700],
      contrastText: "#fff"
    },
    secondary: {
      light: cyan[100],
      main: cyan[200],
      dark: cyan[700],
      contrastText: teal[800]
    },
    error: {
      light: red[100],
      main: red[500],
      dark: red[700],
      contrastText: "#fff"
    },
    message: {
      main: lightGreen[100],
      dark: lightGreen[800],
      contrastText: lightGreen[500]
    }
  },
  text_size: {
    xsm: "12px",
    sm: "16px",
    md: "20px",
    lg: "24px",
    xl: "32px",
    xxl: "48px"
  }
};
