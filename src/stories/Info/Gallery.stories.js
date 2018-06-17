import React from "react";
import { storiesOf } from "@storybook/react";
import { MemoryRouter } from "react-router-dom";
import Gallery, {Slider} from "../../components/Info/Gallery";

storiesOf("Species info", module)
  .addDecorator(story => (
    <MemoryRouter initialEntries={["/get_involved/detect", "/about"]}>
      {story()}
    </MemoryRouter>
  ))
  .add("Gallery", () => <Gallery />)
