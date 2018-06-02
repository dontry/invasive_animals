import React from "react";
import { storiesOf } from "@storybook/react";
import { withNotes } from "@storybook/addon-notes";
import BreadcrumbsWithRouter from "../components/common/BreadcrumbsWithRouter";
import { MemoryRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import theme from "../assets/theme";

storiesOf("Breadcrumbs", module)
  .addDecorator(story => <ThemeProvider theme={theme}>{story()}</ThemeProvider>)
  .addDecorator(story => (
    <MemoryRouter initialEntries={["/species/brumby"]} initalIndex={1}>
      {story()}
    </MemoryRouter>
  ))
  .add(
    "brumby species page",
    withNotes("The Home icon is added at the start")(() => (
      <BreadcrumbsWithRouter />
    ))
  );

storiesOf("Breadcrumbs", module)
  .addDecorator(story => <ThemeProvider theme={theme}>{story()}</ThemeProvider>)
  .addDecorator(story => (
    <MemoryRouter initialEntries={["/help_center"]} initalIndex={1}>
      {story()}
    </MemoryRouter>
  ))
  .add(
    "help center page",
    withNotes("The underscore becomes whitespace")(() => (
      <BreadcrumbsWithRouter />
    ))
  );
