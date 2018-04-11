import React from "react";

import { storiesOf, addDecorator } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { linkTo } from "@storybook/addon-links";
import { WithNotes } from "@storybook/addon-notes";
import { MemoryRouter } from "react-router-dom";

import { Button, Welcome } from "@storybook/react/demo";

import BlankPage from "./BlankPage";
import { ScreenMask, Mask } from "../components/common/Mask";
import Loading from "../components/common/LoadingSpinner";
import Error from "../components/common/Error";
import { BreadcrumbsItem, Breadcrumbs } from "../components/common/Breadcrumbs";

addDecorator(story => (
  <MemoryRouter initialEntries={["/"]}>{story()}</MemoryRouter>
));

storiesOf("Welcome", module).add("to Storybook", () => (
  <Welcome showApp={linkTo("Button")} />
));

storiesOf("Button", module)
  .add("with text", () => (
    <Button onClick={action("clicked")}>Hello Button</Button>
  ))
  .add("with some emoji", () => (
    <Button onClick={action("clicked")}>😀 😎 👍 💯</Button>
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

storiesOf("Error ", module).add("Default Error 404", () => <Error />);

// storiesOf("Drop zone", module).add("Drop zone", () => <DropImageZone />);

storiesOf("Breadcrumbs", module).add("Breadcrumbs", () => (
  <Breadcrumbs>
    <BreadcrumbsItem href="/" text="Home" />
    <BreadcrumbsItem href="/getinvolved" text="Get involved" />
    <BreadcrumbsItem href="/getinvolved/detect" text="detect" />
  </Breadcrumbs>
));
