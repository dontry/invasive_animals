import React from "react";
import { storiesOf } from "@storybook/react";
import { MemoryRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import theme from "../../assets/theme";
import Brief, { Album } from "../../components/Info/Brief";
import BlankPage from "../BlankPage";
import species from "../fixture/species";

const labels = [
  { description: "react" },
  { description: "router" },
  { description: "toy" },
  { description: "ecmascript" }
];

storiesOf("Brief", module)
  .addDecorator(story => (
    <MemoryRouter initialEntries={["/species/brumby"]} initalIndex={1}>
      {story()}
    </MemoryRouter>
  ))
  .addDecorator(story => <ThemeProvider theme={theme}>{story()}</ThemeProvider>)
  .add("Album", () => (
    <BlankPage>
      <Album species={species[0]} />
    </BlankPage>
  ))
  .add("No species", () => (
    <BlankPage>
      <Brief species={[]} labels={labels} />
    </BlankPage>
  ))
  .add("One species", () => (
    <BlankPage>
      <Brief species={species.slice(0, 1)} />
    </BlankPage>
  ))
  .add("Two species", () => (
    <BlankPage>
      <Brief species={species.slice(0, 2)} />
    </BlankPage>
  ));
