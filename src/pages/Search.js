import React, {Component, Fragment} from "react";
import styled from "styled-components";
import PageContainer from "../components/common/PageContainer";
import NavAppBar from "../components/common/NavAppBar";
import SearchBar from "../components/Search/SearchBar";
import SidePane from "../components/Search/SidePane";
import ResultList from "../components/Search/ResultList";
import TileBarGridList from "../components/Search/TileBarGridList";
import {Title} from "../components/common/Text";
import Grid from "material-ui/Grid";
import {getAllSpecies} from "../utils/api";
import LoadingSpinner from "../components/common/LoadingSpinner";
import BreadcrumbsWithRouter from "../components/common/BreadcrumbsWithRouter";

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
    padding: 0 2rem 3rem 0 !important;
  }
`;

class Search extends Component {
  state = {
    initialRender: true,
    speciesList: [],
    result: [],
    loading: false
  };
  async componentWillMount() {
    const speciesList = await getAllSpecies();
    this.setState({ speciesList });
  }

  handleSearch = query => {
    this.setState({ initialRender: false });
    this.loading();

    setTimeout(() => {
      const result = this.searchByName(query);
      this.setState({ result, loading: false });
    }, 600);
  };

  loading = () => {
    this.setState({ loading: true });
  };

  searchByName = name => {
    const { speciesList } = this.state;
    return speciesList.filter(item => {
      return item.Species.toLowerCase().includes(name.toLowerCase());
    });
  };

  render() {
    const { initialRender, result, loading } = this.state;
    return (
      <Fragment>
        <NavAppBar />
        <PageContainer>
          <BreadcrumbsWithRouter />
          <SearchBarWrapper container justify="center">
            <Grid item xs={12} sm={10} md={8}>
              <SearchBar handleSearch={this.handleSearch} />
            </Grid>
          </SearchBarWrapper>
          <Grid container justify="space-around">
            <SidePaneWrapper item sm={4}>
              <SidePane />
            </SidePaneWrapper>
            <ResultWrapper item xs={10} sm={8}>
              {initialRender ? (
                <div>
                  <Title variant="display1" txtColor="#666" align="center">
                    6 Most Harmful Species
                  </Title>
                  <TileBarGridList />
                </div>
              ) : loading ? (
                <LoadingSpinner />
              ) : (
                <ResultList results={result} />
              )}
            </ResultWrapper>
          </Grid>
        </PageContainer>
      </Fragment>
    );
  }
}
export default Search;
