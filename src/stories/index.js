import React from "react";

import { storiesOf, addDecorator } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { linkTo } from "@storybook/addon-links";
import { withNotes } from "@storybook/addon-notes";
import { MemoryRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { lightGreen } from "material-ui/colors";
import { theme } from "../assets/theme";
import { Fade } from "material-ui/transitions";
import Provider from "./Provider";
import "../index.css";

import BlankPage from "./BlankPage";
import { ScreenMask, Mask } from "../components/common/Mask";
import Loader from "../components/common/Loader";
import Error from "../components/common/Error";
import { BreadcrumbsItem, Breadcrumbs } from "../components/common/Breadcrumbs";
import BreadcrumbsWithRouter from "../components/common/BreadcrumbsWithRouter";
import ActionButtonGroup from "../components/common/ActionButtonGroup";
import NavAppBar from "../components/common/NavAppBar";
import Banner from "../components/common/Banner";
import Sidebar from "../components/common/Sidebar";
import Footer, { Copyright, Sitemap } from "../components/common/Footer";
import Icon from "material-ui/Icon";

import IntroGrid from "../components/Home/IntroGrid";
import Home from "../pages/Home";
import Logo from "../components/Home/Logo";

import Testimonial from "../components/About/Testimonial";
import Profile from "../components/About/Profile";
import ProfileGrid from "../components/About/ProfileGrid";
import AboutUs from "../pages/AboutUs";

import DropImageZone from "../components/Detect/DropImageZone";
// import Detection from "../pages/Detection";

import ReportForm from "../components/Report/ReportForm";
import Report from "../pages/Report";

import SearchBar from "../components/Search/SearchBar";
import ResultList from "../components/Search/ResultList";
import SidePane from "../components/Search/SidePane";
import Search from "../pages/Search";

import Gallery, { Slider } from "../components/Info/Gallery";
import BriefInfo from "../components/Info/BriefInfo";

import imageFile from "../assets/images/dandenong-ranges.jpg";
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
      <Loader />
    </BlankPage>
  ))
  .add("loading bar ", () => (
    <BlankPage>
      <Loader type="bars" />
    </BlankPage>
  ));

storiesOf("Error ", module)
  .addDecorator(story => (
    <MemoryRouter initialEntries={["/abc/asaa", "/abc", "adf"]}>
      {story()}
    </MemoryRouter>
  ))
  .add("Default Error 404", () => <Error />);

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

// storiesOf("Transition", module)
// .add("Banner", <Fade in={true} timeout={5000}><Banner /></Fade>)

// storiesOf("Icons", module)
//   .add("Brand icons", () => (
//     <div>
//       <BrandIcon color="#000" />
//       <BrandIcon color="#f00" size={"50px"} />
//     </div>
//   ))
//   .add("Home page icons", () => (
//     <div>
//       <DetectionIcon color="#000" />
//       <TargetIcon color="#000" />
//       <Target2Icon color="#000" />
//       <BinocularsIcon color="#000" />
//     </div>
//   ));

// storiesOf("Home", module)
//   .addDecorator(story => (
//     <MemoryRouter initialEntries={["/get_involved/detect", "/about"]}>
//       {story()}
//     </MemoryRouter>
//   ))
//   .add("Intro grid", () => <IntroGrid />)
//   .add("Website Logo", () => <Logo />)
//   .add("Home page", () => <Home />);

// storiesOf("Detection", module)
//   .addDecorator(story => (
//     <MemoryRouter initialEntries={["/get_involved/detect", "/about"]}>
//       {story()}
//     </MemoryRouter>
//   ))
//   .add("Drop zone", () => <DropImageZone />)
// //   .add("Detection page", () => <Detection species={results[0]} />);

// storiesOf("About", module)
//   .addDecorator(story => (
//     <MemoryRouter initialEntries={["/get_involved/detect", "/about"]}>
//       {story()}
//     </MemoryRouter>
//   ))
//   .add("Testimonial", () => <Testimonial />)
//   .add("Profile", () => <Profile />)
//   .add("ProfileGrid", () => <ProfileGrid />)
//   .add("About Us page", () => <AboutUs />);

//Due to async/await issue Report form is not available at the moment
storiesOf("Report", module)
  .addDecorator(story => (
    <MemoryRouter initialEntries={["/get_involved/detect", "/about"]}>
      {story()}
    </MemoryRouter>
  ))
  .add("Form", () => <ReportForm />)
  .add("Report page", () => <Report />);

// storiesOf("Search", module)
//   .addDecorator(story => (
//     <MemoryRouter initialEntries={["/get_involved/detect", "/about"]}>
//       {story()}
//     </MemoryRouter>
//   ))
//   .add("Search bar", () => <SearchBar />)
//   .add("Sidepane", () => <SidePane />)
//   .add("Result List", () => <ResultList results={results} />)
//   .add("Search", () => <Search results={results} />);

storiesOf("Species info", module)
  .addDecorator(story => (
    <MemoryRouter initialEntries={["/get_involved/detect", "/about"]}>
      {story()}
    </MemoryRouter>
  ))
  .add("Gallery", () => <Gallery />)
  .add("Slider", () => <Slider />)
  .add("Gallery Composite", () => <GalleryComposite />)
  // .add("Brief Info", () => <BriefInfo species={results[0]} />);
