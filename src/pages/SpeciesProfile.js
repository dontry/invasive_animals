import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
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

class SpeciesProfile extends Component {
  state = {
    content: null,
    images: [],
    notFound: false
  };
  async componentDidMount() {
    const name = this.props.match.params.id;
    this.props.onFindByCommonName(name.toLowerCase().replace(/_/g, " "));
  }
  componentDidUpdate() {
    renderMap();
  }
  componentWillUnmount() {
    this.props.reset();
  }
  render() {
    const { species } = this.props;
    if (
      species.isError ||
      (species.isFinished && species.queryResult.length === 0)
    )
      return <Redirect to="/error" />;
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

SpeciesProfile.propTypes = {
  species: PropTypes.object.isRequired,
  match: PropTypes.object,
  reset: PropTypes.func.isRequired,
  onFindByCommonName: PropTypes.func.isRequired
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

    reset: () => {
      dispatch(reduxifiedServices.species.reset());
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SpeciesProfile);
