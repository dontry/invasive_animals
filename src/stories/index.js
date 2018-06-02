import React from "react";

import { storiesOf, addDecorator } from "@storybook/react";
import { withNotes } from "@storybook/addon-notes";
import { MemoryRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { lightGreen } from "material-ui/colors";
import theme from "../assets/theme";
import { Fade } from "material-ui/transitions";
import Provider from "./Provider";
import "../index.css";

import ActionButtonGroup from "../components/common/ActionButtonGroup";
import NavAppBar from "../components/common/NavAppBar";
import Carousel from "../components/common/Carousel";
import { LogoIcon, SubscribeIcon, BinocularsIcon, BuildingIcon, Target2Icon, TargetIcon, AnimalIcon, DetectionIcon } from "../components/common/Icons";
import Footer, { Copyright, Sitemap } from "../components/common/Footer";
import Icon from "material-ui/Icon";

import IntroGrid from "../components/Home/IntroGrid";
import Home from "../pages/Home";
import Logo from "../components/Home/Logo";


import Profile from "../components/About/Profile";
import ProfileGrid from "../components/About/ProfileGrid";
import AboutUs from "../pages/AboutUs";

import DropImageZone from "../components/Detect/DropImageZone";

// import ReportForm from "../components/Report/ReportForm"
// import Report from "../pages/Report";

import SearchBar from "../components/Search/SearchBar";
import ResultList from "../components/Search/ResultList";
import SidePane from "../components/Search/SidePane";
import Search from "../pages/Search";

import Gallery, { Slider } from "../components/Info/Gallery";
import Brief from "../components/Info/Brief";
import DetailInfo from "../components/Info/Profile";
import species from "./species";

import GalleryComposite from "../components/Info/GalleryComposite";

const results = [
  {
    CommonName: "Cane Toad",
    AcademicalName: "valua dfuir",
    BriefIntroduction: "asdfasdfly asdfyasdfas fnasdfasdf"
  },
  {
    CommonName: "Brumby",
    AcademicalName: "yare wony"
  },
  {
    CommonName: "European Rabbit",
    AcademicalName: "valua dfuir"
  }
];

addDecorator(story => {
  return <Provider story={story()} />;
});

addDecorator(story => <ThemeProvider theme={theme}>{story()}</ThemeProvider>);

storiesOf("Buttons", module).add(
  "Action button group",
  withNotes("primary and secondary buttons")(() => <ActionButtonGroup />)
);

storiesOf("Navigation", module)
  .addDecorator(story => (
    <MemoryRouter initialEntries={["/"]}>{story()}</MemoryRouter>
  ))

storiesOf("Footer", module)
  .addDecorator(story => (
    <MemoryRouter initialEntries={["/"]}>{story()}</MemoryRouter>
  ))
  .add("Copyright", () => <Copyright />)
  .add("Site map", () => <Sitemap />)
  .add("Footer", () => <Footer />);


storiesOf("SVG Icons", module)
  .add("Brand icons", () => (
    <div>
      <LogoIcon color="#f00" size={"50px"} />
      <BuildingIcon color="#f00" size={"50px"} />
      <BinocularsIcon color="#f00" size={"50px"} />
      <AnimalIcon color="#f00" size={"50px"} />
      <TargetIcon color="#f00" size={"50px"} />
    </div>
  ))
  .add("Home page icons", () => (
    <div>
      <DetectionIcon color="#000" />
      <TargetIcon color="#000" />
      <Target2Icon color="#000" />
      <BinocularsIcon color="#000" />
    </div>
  ));

storiesOf("Home", module)
  .addDecorator(story => (
    <MemoryRouter initialEntries={["/get_involved/detect", "/about"]}>
      {story()}
    </MemoryRouter>
  ))
  .add("Intro grid", () => <IntroGrid />)
  .add("Website Logo", () => <Logo />)

storiesOf("Identify", module)
  .addDecorator(story => (
    <MemoryRouter initialEntries={["/identify", "/about"]}>
      {story()}
    </MemoryRouter>
  ))
  .add("Drop zone", () => <DropImageZone />)
//   .add("Detection page", () => <Detection species={results[0]} />);

storiesOf("About", module)
  .addDecorator(story => (
    <MemoryRouter initialEntries={["/get_involved/detect", "/about"]}>
      {story()}
    </MemoryRouter>
  ))
  .add("Testimonial", () => <Testimonial />)
  .add("Profile", () => <Profile />)
  .add("ProfileGrid", () => <ProfileGrid />)
  .add("About Us page", () => <AboutUs />);

//Due to async/await issue Report form is not available at the moment
// storiesOf("Report", module)
//   .addDecorator(story => (
//     <MemoryRouter initialEntries={["/get_involved/detect", "/about"]}>
//       {story()}
//     </MemoryRouter>
//   ))
  // .add("Form", () => <ReportForm />)
  // .add("Report page", () => <Report />);

storiesOf("Search", module)
  .addDecorator(story => (
    <MemoryRouter initialEntries={["/get_involved/detect", "/about"]}>
      {story()}
    </MemoryRouter>
  ))
  .add("Search bar", () => <SearchBar />)
  .add("Sidepane", () => <SidePane />)
  .add("Result List", () => <ResultList results={results} />)
  .add("Search", () => <Search results={results} />);

storiesOf("Species info", module)
  .addDecorator(story => (
    <MemoryRouter initialEntries={["/get_involved/detect", "/about"]}>
      {story()}
    </MemoryRouter>
  ))
  .add("Gallery", () => <Gallery />)
  .add("Slider", () => <Slider />)
