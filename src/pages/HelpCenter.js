import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import Grid from "material-ui/Grid";
import { green, grey } from "material-ui/colors";

import PageContainer from "../components/common/PageContainer";
import NavAppBar from "../components/common/NavAppBar";
import BreadcrumbsWithRouter from "../components/common/BreadcrumbsWithRouter";
import Loader from "../components/common/Loader";
import { Title, Paragraph } from "../components/common/Text";

import LocationInfo from "../components/HelpCenter/LocationInfo";
import SelectionField from "../components/HelpCenter/SelectionField";
import MapWithKmlLayers from "../components/HelpCenter/MapWithKmlLayers";
import Regions from "../assets/regions";
import { reduxifiedServices } from "../reducers/feathers";

const REGION_LIST = [...Regions.map(region => region.name), "All"];

const Wrapper = styled(Grid)`
  && {
    padding: 2rem;
  }
`;

const MapWrapper = styled(Grid)`
  && {
    margin: 0 auto;
    min-height: 500px;
  }
`;

const ResultWrapper = styled(Grid)`
  && {
    margin: 0 auto;
  }
`;

const ResultList = styled.div`
  position: relative;
  background-color: ${grey[300]};
  max-width: 800px;
  height: 80vh;
  overflow-y: auto;
  padding: 0.5rem;
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
          <Wrapper container>
            <MapWrapper item xs={12} sm={6}>
              <Title
                variant="subheading"
                txtColor={green[900]}
                txtSize="1.3rem"
                lineHeight="3em"
              >
                Please select your region:
              </Title>
              <MapWithKmlLayers handleClick={this.handleSearch} />
              <Paragraph variant="body" style={{ paddingTop: "1rem" }}>
                As defined by DELWP* , there are six Victoria divided farming
                regions - which are Loddon-Mallee, Hume, Grampians, Port
                Phillip, Gippsland, Barwon South West. Each region has its own
                groups, agencies and organisations that involved in pest animal
                management. Just simply choosing your farming areas to see the
                certified help centre near you.
              </Paragraph>
              <br />
              <Paragraph variant="caption">
                * The Department of Environment, Land, Water and Planning
                (DELWP) and Parks Victoria are responsible for the managing
                established weeds and pests on public land, including in parks.
              </Paragraph>
            </MapWrapper>
            <ResultWrapper item xs={12} sm={6}>
              <Title
                variant="subheading"
                txtColor={green[900]}
                txtSize="1.3rem"
                lineHeight="3em"
              >
                {/* TOFIX: the region does not update */}
                Help centers
              </Title>
              <ResultList>
                {helpCenters.isLoading ? (
                  <Loader type="bars" />
                ) : (
                  Array.isArray(helpCenters.queryResult) &&
                  helpCenters.queryResult.map(center => (
                    <LocationInfo info={center} />
                  ))
                )}
              </ResultList>
            </ResultWrapper>
          </Wrapper>
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
