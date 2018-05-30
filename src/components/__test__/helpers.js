import React from "react";
import defaultTheme from "../../assets/theme";
import { ThemeProvider } from "styled-components";

export function shallowWithTheme(component, theme = defaultTheme) {
  const context = shallow(<ThemeProvider theme={theme} />)
    .instance()
    .getChildContext();

  return shallow(component, { context });
}

export function mountWithTheme(component, theme = defaultTheme) {
  const context = shallow(<ThemeProvider theme={theme} />)
    .instance()
    .getChildContext();

  return mount(component, {
    context,
    childContextTypes: ThemeProvider.childContextTypes // Needed so child components receive the theme propd
  });
}
