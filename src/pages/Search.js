import React, { Component, Fragment } from "react";
import styled from "styled-components";
import PageContainer from "../components/common/PageContainer";
import NavAppBar from "../components/common/NavAppBar";
import SearchBar from "../components/Search/SearchBar";
import SidePane from "../components/Search/SidePane";
import ResultList from "../components/Search/ResultList";
import Grid from "material-ui/Grid";

const SearchBarWrapper = styled(Grid)`
  && {
    padding: 3rem 0 2rem;
  }
`;

const SidePaneWrapper = styled(Grid)`
  && {
    max-width: 250px;
    padding: 0 1rem !important;
  }
`;

const ResultWrapper = styled(Grid)`
  && {
    padding-right: 2rem !important;
  }
`;

const Search = ({ results }) => (
  <Fragment>
    <NavAppBar />
    <PageContainer height="90vh">
      <SearchBarWrapper container justify="center">
        <Grid item xs={12} sm={10} md={8}>
          <SearchBar />
        </Grid>
      </SearchBarWrapper>
      <Grid container justify="space-around">
        <SidePaneWrapper item sm={4}>
          <SidePane />
        </SidePaneWrapper>
        <ResultWrapper item xs={10} sm={8}>
          <ResultList results={results} />
        </ResultWrapper>
      </Grid>
    </PageContainer>
  </Fragment>
);

export default Search;
