import React from "react";
import { storiesOf } from "@storybook/react";
import Loader from "../components/common/Loader";
import BlankPage from "./BlankPage";

storiesOf("Loaders", module)
  .add("Default", () => (
    <BlankPage>
      <Loader />
    </BlankPage>
  ))
  .add("Bars", () => (
    <BlankPage>
      <Loader type="bars" />
    </BlankPage>
  ));
