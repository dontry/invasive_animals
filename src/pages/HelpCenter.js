import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import Grid from "material-ui/Grid";
import { green } from "material-ui/colors";

import PageContainer from "../components/common/PageContainer";
import NavAppBar from "../components/common/NavAppBar";
import BreadcrumbsWithRouter from "../components/common/BreadcrumbsWithRouter";
import Loader from "../components/common/Loader";
import { Title } from "../components/common/Text";

import LocationInfo from "../components/HelpCenter/LocationInfo";
import SelectionField from "../components/HelpCenter/SelectionField";
import MapWithKmlLayers from "../components/HelpCenter/MapWithKmlLayers";
import Regions from "../assets/regions";
import { reduxifiedServices } from "../reducers/feathers";

const REGION_LIST = [...Regions.map(region => region.name), "All"];

const SelectionWrapper = styled.div`
  margin: 0 auto;
  width: 50%;
  min-width: 500px;
  padding: 1rem;
`;

const ResultWrapper = styled.div`
  position: relative;
  margin: 0 auto;
  max-width: 800px;
  min-height: 200px;
  padding: 2rem 3rem 4rem;
`;

class HelpCenter extends Component {
  state = {
    region: ""
  };

  handleSearch = event => {
    const region = event.featureData.name;
    this.setState({ region });
    // const result = this.searchByRegion(region);
    if (region === "Greater Melbourne") {
      this.props.onFindByRegion("Port Philips");
    } else if (region === "Loddon Mallee") {
      this.props.onFindByRegion("Loddon-Mallee");
    } else {
      this.props.onFindByRegion(region);
    }
  };
  componentWillUnmount() {
    this.props.onReset();
  }
  render() {
    const { region } = this.state;
    const { helpCenters } = this.props;
    return (
      <Fragment>
        <NavAppBar />
        <PageContainer minHeight="90vh">
          <BreadcrumbsWithRouter />
          <SelectionWrapper>
            <Title variant="subheading" txtColor={green[900]} txtSize="1.3rem">
              Please select your region:
            </Title>
            <MapWithKmlLayers handleClick={this.handleSearch} />
          </SelectionWrapper>
          <ResultWrapper>
            {helpCenters.isLoading ? (
              <Loader type="bars" />
            ) : (
              Array.isArray(helpCenters.queryResult) &&
              helpCenters.queryResult.map(center => (
                <LocationInfo info={center} />
              ))
            )}
          </ResultWrapper>
        </PageContainer>
      </Fragment>
    );
  }
}

const mapStateToProps = state => {
  return {
    helpCenters: state.helpCenters
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onFind: () => {
      dispatch(reduxifiedServices.help_centers.find());
    },
    onFindByRegion: region => {
      dispatch(
        reduxifiedServices.help_centers.find({ query: { Region: region } })
      );
    },
    onReset: () => {
      dispatch(reduxifiedServices.help_centers.reset());
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(HelpCenter);
