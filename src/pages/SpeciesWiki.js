import React, { Fragment, Component } from "react";

import { connect } from "react-redux";

import { lime } from "material-ui/colors";

import PageContainer from "../components/common/PageContainer";
import { Title } from "../components/common/Text";
import Loader from "../components/common/Loader";

import NavAppBar from "../components/common/NavAppBar";
import BreadcrumbsWithRouter from "../components/common/BreadcrumbsWithRouter";
import SpeciesGallery from "../components/Info/SpeciesGallery";
import { reduxifiedServices } from "../reducers/feathers";

class SpeciesWiki extends Component {
  componentWillMount() {
    this.props.onFind();
  }
  componentWillUnmount() {
    this.props.resetSpecies();
  }
  render() {
    const { species } = this.props;
    return (
      <Fragment>
        <NavAppBar />
        <BreadcrumbsWithRouter />
        <PageContainer style={{ padding: "1rem 2rem" }}>
          <Title variant="display2" txtColor={lime[700]} padding="0 1rem 2rem">
            Invasive Species Wiki
          </Title>
          {species.isLoading ? (
            <Loader />
          ) : (
            Array.isArray(species.queryResult) && (
              <SpeciesGallery dataList={species.queryResult} />
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
    onFind: () => {
      dispatch(reduxifiedServices.species.find());
    },
    resetSpecies: () => {
      dispatch(reduxifiedServices.species.reset());
    }
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(SpeciesWiki);
