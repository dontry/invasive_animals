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
import BreadcrumbsWithRouter from "../components/common/BreadcrumbsWithRouter";
import DropImageZone from "../components/Detect/DropImageZone";
import ActionButtonGroup from "../components/common/ActionButtonGroup";
import NavAppBar from "../components/common/NavAppBar";
import Banner from "../components/common/Banner";
import Sidebar from "../components/common/Sidebar";
import Footer, {
  Copyright,
  Sitemap
} from "../components/common/Footer";
import { BrandIcon } from "../components/common/Icons";
import imageFile from "../assets/images/dandenong-ranges.jpg";
import "../index.css";

addDecorator(story => <ThemeProvider theme={theme}>{story()}</ThemeProvider>);

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
    <MemoryRouter initialEntries={["/abc/asaa", "/abc", "adf"]}>
      {story()}
    </MemoryRouter>
  ))
  .add("Default Error 404", () => <Error />);

storiesOf("Drop zone", module).add("Drop zone", () => <DropImageZone />);

storiesOf("Breadcrumbs", module)
  .addDecorator(story => (
    <MemoryRouter initialEntries={["/get_involved/detect", "/about"]}>
      {story()}
    </MemoryRouter>
  ))
  .add("Breadcrumbs on Home page", () => <BreadcrumbsWithRouter />);

storiesOf("Buttons", module).add(
  "Action button group",
  withNotes("primary and secondary buttons")(() => <ActionButtonGroup />)
);

storiesOf("Navigation", module)
  .addDecorator(story => (
    <MemoryRouter initialEntries={["/"]}>{story()}</MemoryRouter>
  ))
  .add("Default AppBar", () => <NavAppBar />)
  .add("Sidebar", () => <Sidebar />);

storiesOf("Banner", module)
  .add("Default Banner", () => <Banner />)
  .add("Banner with title, subheading and text", () => (
    <Banner
      title="New title"
      subheading="nice heading"
      description="Consequat id eiusmod laboris esse reprehenderit excepteur minim anim mollit incididunt sunt. Reprehenderit excepteur irure et enim amet laboris amet reprehenderit laboris qui amet. Sint id mollit minim enim consequat laborum officia mollit ex irure. Ipsum dolore enim consequat enim nulla culpa reprehenderit velit adipisicing nulla ullamco in et occaecat. Non consectetur dolor commodo incididunt aliqua velit velit enim."
      imgUrl={imageFile}
    />
  ));

storiesOf("Footer", module)
  .addDecorator(story => (
    <MemoryRouter initialEntries={["/"]}>{story()}</MemoryRouter>
  ))
  .add("Copyright", () => <Copyright />)
  .add("Site map", () => <Sitemap />)
  .add("Footer", () => <Footer />);

storiesOf("Icons", module).add("Brand icons", () => (
  <div>
    <BrandIcon color="#000" />
    <BrandIcon color="#f00" size={"50px"} />
  </div>
));
