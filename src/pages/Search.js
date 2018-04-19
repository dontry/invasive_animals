import React, { Component, Fragment } from "react";
import styled from "styled-components";
import PageContainer from "../components/common/PageContainer";
import SearchBar from "../components/Search/SearchBar";
import SidePane from "../components/Search/SidePane";
import ResultList from "../components/Search/ResultList";
import Grid from "material-ui/Grid";

const SearchBarWrapper = styled(Grid)`
  && {
    padding: 1rem 0 2rem;
  }
`

const SidePaneWrapper = styled(Grid)`
  && {
    max-width: 250px;
    padding: 0 1rem !important;
  }
`;

const Search = ({results}) => (
  <Fragment>
    <SearchBarWrapper container justify="center">
      <Grid item xs={12} sm={10} md={8}>
        <SearchBar />
      </Grid>
    </SearchBarWrapper>
    <Grid container justify="space-around">
      <SidePaneWrapper item sm={4}>
        <SidePane />
      </SidePaneWrapper>
      <Grid item xs={10} sm={8} >
        <ResultList results={results}/>
    </Grid>
    </Grid>
  </Fragment>
);

export default Search;
