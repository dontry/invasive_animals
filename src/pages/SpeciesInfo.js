import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
//Components
import PageContainer from "../components/common/PageContainer";
import Loader from "../components/common/Loader";
import DetailInfoContainer from "../containers/DetailInfoContainer";
import NavAppBar from "../components/common/NavAppBar";
import BreadcrumbsWithRouter from "../components/common/BreadcrumbsWithRouter";
import { reduxifiedServices } from "../reducers/feathers";
import { renderMap } from "../components/Insight/DistributionMap";

class SpeciesInfo extends Component {
  state = {
    content: null,
    images: [],
    notFound: false
  };
  async componentWillMount() {
    // const id = this.props.match.params.id;
    // const content = await getSpeciesById(parseInt(id));
    const name = this.props.match.params.id;
    this.props.onFindByCommonName(name.toLowerCase().replace("_", " "));
  }
  componentDidUpdate() {
    renderMap();
  }
  componentWillUnmount() {
    this.props.onReset();
  }
  render() {
    // const { content, images, notFound } = this.state;
    const { species } = this.props;
    if (species.isError) return <Redirect to="/error" />;
    return (
      <Fragment>
        <NavAppBar />
        <PageContainer min_height="90vh">
          <BreadcrumbsWithRouter />
          {species.isLoading ? (
            <Loader />
          ) : (
            species.isFinished &&
            species.queryResult && (
              <DetailInfoContainer species={species.queryResult[0]} />
            )
          )}
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
    onFindById: id => {
      dispatch(reduxifiedServices.species.get(id));
    },
    onFindByCommonName: query => {
      dispatch(
        reduxifiedServices.species.find({
          query: { CommonName: { $search: query } }
        })
      );
    },

    onReset: () => {
      dispatch(reduxifiedServices.species.reset());
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SpeciesInfo);
