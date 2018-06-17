import React from "react";
import { storiesOf } from "@storybook/react";
import { MemoryRouter } from "react-router-dom";
import Footer, { Copyright, Sitemap}  from '../components/common/Footer'

storiesOf("Footer", module)
.addDecorator(story => (
  <MemoryRouter initialEntries={["/"]}>{story()}</MemoryRouter>
))
.add("Copyright", () => <Copyright />)
.add("Site map", () => <Sitemap />)
.add("Footer", () => <Footer />);

