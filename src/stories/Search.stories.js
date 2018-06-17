import React from 'react'
import { storiesOf } from '@storybook/react';
import { MemoryRouter } from "react-router-dom";

import SearchBar from '../components/Search/SearchBar'
import SidePane from '../components/Search/SidePane'
import ResultList from '../components/Search/ResultList'
import species from './fixture/species'

storiesOf("Search", module)
  .addDecorator(story => (
    <MemoryRouter initialEntries={["/get_involved/detect", "/about"]}>
      {story()}
    </MemoryRouter>
  ))
  .add("Search bar", () => <SearchBar />)
  .add("Sidepane", () => <SidePane />)
  .add("ResultList", () => <ResultList results={species} />)