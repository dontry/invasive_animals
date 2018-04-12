import React from "react";

import { storiesOf, addDecorator } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { linkTo } from "@storybook/addon-links";
import { withNotes } from "@storybook/addon-notes";
import { MemoryRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { theme } from "../assets/theme";

import BlankPage from "./BlankPage";
import { ScreenMask, Mask } from "../components/common/Mask";
import Loading from "../components/common/LoadingSpinner";
import Error from "../components/common/Error";
import { BreadcrumbsItem, Breadcrumbs } from "../components/common/Breadcrumbs";
import DropImageZone from "../components/Detect/DropImageZone";
import ActionButtonGroup from "../components/common/ActionButtonGroup";
import NavAppBar from "../components/common/NavAppBar";

addDecorator(story => <ThemeProvider theme={theme}>{story()}</ThemeProvider>);

storiesOf("Welcome", module).add("to Storybook", () => (
  <Welcome showApp={linkTo("Button")} />
));

storiesOf("Mask", module)
  .add("screen mask", () => (
    <ScreenMask>
      <h3 style={{ color: "blue" }}>Screen mask</h3>
    </ScreenMask>
  ))
  .add("block mask", () => (
    <div>
      <Mask>
        <h3 style={{ color: "blue" }}>Block mask</h3>
      </Mask>
      <br />
      <Mask opacity={0.5}>
        <h3>Opacity is 0.8</h3>
      </Mask>
    </div>
  ));

storiesOf("Loading", module)
  .add("default loading spinner", () => (
    <BlankPage>
      <Loading />
    </BlankPage>
  ))
  .add("loading bar ", () => (
    <BlankPage>
      <Loading type="bars" />
    </BlankPage>
  ));

storiesOf("Error ", module)
  .addDecorator(story => (
    <MemoryRouter initialEntries={["/"]}>{story()}</MemoryRouter>
  ))
  .add("Default Error 404", () => <Error />);

storiesOf("Drop zone", module).add("Drop zone", () => <DropImageZone />);

storiesOf("Breadcrumbs", module)
  .addDecorator(story => (
    <MemoryRouter initialEntries={["/"]}>{story()}</MemoryRouter>
  ))
  .add("Breadcrumbs", () => (
    <Breadcrumbs>
      <BreadcrumbsItem href="/" text="Home" />
      <BreadcrumbsItem href="/getinvolved" text="Get involved" />
      <BreadcrumbsItem href="/getinvolved/detect" text="detect" />
    </Breadcrumbs>
  ));

storiesOf("Buttons", module).add(
  "Action button group",
  withNotes("primary and secondary buttons")(() => <ActionButtonGroup />)
);

storiesOf("Navigation", module)
  .addDecorator(story => (
    <MemoryRouter initialEntries={["/"]}>{story()}</MemoryRouter>
  ))
  .add("Default AppBar", () => <NavAppBar />);
