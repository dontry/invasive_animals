import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import PageContainer from "../components/common/PageContainer";
import NavAppBar from "../components/common/NavAppBar";
import { Mask } from "../components/common/Mask";
import SearchBar from "../components/Search/SearchBar";
import SidePane from "../components/Search/SidePane";
import ResultList from "../components/Search/ResultList";
import TileBarGridList from "../components/Search/TileBarGridList";
import { Title } from "../components/common/Text";
import Grid from "material-ui/Grid";
import Loader from "../components/common/Loader";
import BreadcrumbsWithRouter from "../components/common/BreadcrumbsWithRouter";
import { reduxifiedServices } from "../reducers/feathers";

const Wrapper = styled(Grid)`
  padding-top: 3rem;
`;

const SearchBarWrapper = styled(Grid)`
  && {
    padding: 0rem 0 2rem;
  }
`;

const SidePaneWrapper = styled(Grid)`
  && {
    max-width: 3000px;
    padding: 0 1rem !important;
    margin-bottom: 2rem;
    @media (max-width: 600px) {
      & {
        padding: 0 3rem !important;
      }
    }
  }
`;

const SearchWrapper = styled(Grid)`
  position: relative;
  && {
    padding: 0 2rem 3rem !important;
  }
`;

class Search extends Component {
  state = {
    initialRender: true,
    result: []
  };

  handleSearch = query => {
    this.setState({ initialRender: false });
    this.props.onFindByCommonName(query);
  };

  componentWillUnmount() {
    this.props.onReset();
  }

  handleQuickSearch = event => {
    this.setState({ initialRender: false });
    const Category = event.target.dataset.value || event.target.getElementsByTagName("span")[0].dataset.value;
    this.props.onFind({ Category});
  };

  render() {
    const { initialRender } = this.state;
    const { species } = this.props;
    return (
      <Fragment>
        <NavAppBar />
        <PageContainer>
          <BreadcrumbsWithRouter />
          <Wrapper container justify="space-around">
            <SidePaneWrapper item xs={12} sm={3}>
              <SidePane handleClick={this.handleQuickSearch} />
            </SidePaneWrapper>
            <SearchWrapper item xs={12} sm={8}>
              <SearchBarWrapper container justify="center">
                <Grid item xs={10}>
                  <SearchBar handleSearch={this.handleSearch} />
                </Grid>
              </SearchBarWrapper>
              {initialRender ? (
                <div>
                  <Title variant="display1" text_color="#666" align="center">
                    6 Most Harmful Species
                  </Title>
                  <TileBarGridList />
                </div>
              ) : species.isLoading ? (
                <Mask>
                  <Loader type="bars" />
                </Mask>
              ) : species.isError ? (
                <Title variant="title">Sorry, network error occurs.</Title>
              ) : (
                species.isFinished &&
                species.queryResult && (
                  <ResultList results={species.queryResult} />
                )
              )}
            </SearchWrapper>
          </Wrapper>
        </PageContainer>
      </Fragment>
    );
  }
}

const mapStateToProps = state => {
  return {
    species: state.species
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onFindByCommonName: query => {
      dispatch(
        reduxifiedServices.species.find({
          query: { CommonName: { $search: query } }
        })
      );
    },
    onFind: query => {
      dispatch(reduxifiedServices.species.find({ query }));
    },
    onReset: () => {
      dispatch(reduxifiedServices.species.reset());
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Search);
