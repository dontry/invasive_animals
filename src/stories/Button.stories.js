import React, { Fragment } from "react";
import { storiesOf } from "@storybook/react";
import { ThemeProvider } from "styled-components";
import theme from "../assets/theme";
import ActionButtonGroup, {
  StyledButton,
  ActionButton
} from "../components/common/ActionButtonGroup";

storiesOf("Buttons", module)
    .add("Default button", () => (
        <StyledButton>Default Buttons</StyledButton>
    ))

storiesOf("Buttons", module)
  .addDecorator(story => <ThemeProvider theme={theme}>{story()}</ThemeProvider>)
  .add("StyledButtons", () => (
    <Fragment>
      <StyledButton>Primary</StyledButton>
      <br />
      <br />
      <StyledButton type="secondary">Secondary</StyledButton>
      <br />
      <br />
      <StyledButton type="error">Error</StyledButton>
      <br />
      <br />
      <StyledButton type="message">Message</StyledButton>
    </Fragment>
  ))
  .add("ActionButtonGroup", () => (
      <ActionButtonGroup />
  ))
