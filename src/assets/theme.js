import {
  red,
  blue,
  yellow,
  teal,
  indigo,
  lightGreen,
  green,
  lime
} from "material-ui/colors";
/**
 * Created by caidong on 11/4/18.
 */
export const theme = {
  palette: {
    primary: {
      light: lightGreen[200],
      main: green[500],
      dark: green[700],
      contrastText: "#fff"
    },
    secondary: {
      light: lime[100],
      main: lime[300],
      dark: lime[600],
      contrastText: lime[900]
    },
    error: {
      light: red[100],
      main: red[500],
      dark: red[700],
      contrastText: "#fff"
    }
  },
  textSize: {
    xsm: "12px",
    sm: "16px",
    md: "20px",
    lg: "24px",
    xl: "32px",
    xxl: "48px"
  },
  spacing: {
    xs: 0,
    sm: 8,
    md: 16,
    lg: 24,
    xl: 40
  }
};
