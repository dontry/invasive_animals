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
      light: lightGreen[300],
      main: green[500],
      dark: green[800],
      contrastText: "#fff"
    },
    secondary: {
      light: lime[100],
      main: lime[500],
      dark: lime[700],
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
    small: "12px",
    medium: "16px",
    large: "24px",
    xlarge: "32px"
  }
};
