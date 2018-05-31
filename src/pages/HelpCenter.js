import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
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
import MapWithKmlLayers from "../components/HelpCenter/MapWithKmlLayers";
import { reduxifiedServices } from "../reducers/feathers";

const Wrapper = styled(Grid)`
  && {
    padding: 2rem;
  }
`;

const MapWrapper = styled(Grid)`
  && {
    margin: 0 auto;
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
  }
  handleSearch = event => {
    const region = event.featureData.name;
    // const result = this.searchByRegion(region);
    if (region === "Greater Melbourne") {
      this.props.onFindByRegion("Port Philips");
    } else if (region === "Loddon Mallee") {
      this.props.onFindByRegion("Loddon-Mallee");
    } else {
      this.props.onFindByRegion(region);
    }
    this.setState({region})
  };
  componentWillUnmount() {
    this.props.onReset();
  }
  render() {
    const { helpCenters } = this.props;
    const {region}  = this.state;
    return (
      <Fragment>
        <NavAppBar />
        <PageContainer min_height="90vh">
          <BreadcrumbsWithRouter />
          <Wrapper container  spacing={16}>
            <MapWrapper item xs={12} sm={6}>
              <Title
                variant="subheading"
                text_color={green[900]}
                font_size="1.3rem"
                line_height="3em"
                font_weight="bolder"
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
                text_color={green[900]}
                font_size="1.3rem"
                line_height="3em"
                font_weight="bolder"
              >
                Help centers {region && `in  ${region}`}
              </Title>
              <ResultList>
                {!Array.isArray(helpCenters.queryResult) &&
                  !helpCenters.isLoading && (
                    <Title
                      variant="title"
                      text_color={grey[400]}
                      font_weight="bold"
                      style={{ marginTop: 50 }}
                    >
                      Please select a region on the map.
                    </Title>
                  )}
                {helpCenters.isLoading ? (
                  <Loader type="bars" />
                ) : (
                  Array.isArray(helpCenters.queryResult) &&
                  helpCenters.queryResult.map(center => (
                    <LocationInfo key={center.name} info={center} />
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

HelpCenter.propTypes = {
  onFindByRegion: PropTypes.func,
  onReset: PropTypes.func,
  helpCenters: PropTypes.object
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
