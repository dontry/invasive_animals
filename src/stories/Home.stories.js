import React from 'react'
import {storiesOf} from '@storybook/react'
import { MemoryRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import theme from "../assets/theme";


import NavAppBar from "../components/common/NavAppBar";
import IntroGrid from "../components/Home/IntroGrid";
import Logo from "../components/Home/Logo";

storiesOf("Home", module)
  .addDecorator(story => (
    <MemoryRouter initialEntries={["/get_involved/detect", "/about"]}>
      {story()}
    </MemoryRouter>
  ))
  .addDecorator(story => <ThemeProvider theme={theme}>{story()}</ThemeProvider>)
  .add("Website Logo", () => <Logo />)
  .add("NavAppBar", () => <NavAppBar />)
  .add("Intro grid", () => <IntroGrid />);

