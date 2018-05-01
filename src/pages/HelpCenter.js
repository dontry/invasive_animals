import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import Grid from "material-ui/Grid";
import { green } from "material-ui/colors";

import PageContainer from "../components/common/PageContainer";
import NavAppBar from "../components/common/NavAppBar";
import BreadcrumbsWithRouter from "../components/common/BreadcrumbsWithRouter";
import Loader from "../components/common/LoadingSpinner";
import { Title } from "../components/common/Text";

import LocationInfo from "../components/HelpCenter/LocationInfo";
import SelectionField from "../components/HelpCenter/SelectionField";
import { getAllHelpCenters } from "../utils/api";
import VictoriaMap from "../assets/images/vitoria_map.png";

import { getServicesStatus } from "feathers-redux";
import { reduxifiedServices } from "../reducers/feathers";

const REGION_LIST = [
  "Loddon-Mallee",
  "Hume",
  "Grampians",
  "Port Philips",
  "Gippsland",
  "Barwon South West",
  "All"
];

const SelectionWrapper = styled(Grid)`
  padding: 1rem;
`;

const Map = styled.img`
  max-width: 800px;
  padding: 2rem;
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
    this.setState({ initialRender: false });
    // this.loading();

    const region = event.target.value;
    this.setState({ region });
    // const result = this.searchByRegion(region);
    if (region === "All") {
      this.props.onFind();
    } else {
      this.props.onFindByRegion(region);
    }
  };
  render() {
    const { region } = this.state;
    const { helpCenters } = this.props;
    return (
      <Fragment>
        <NavAppBar />
        <PageContainer minHeight="90vh">
          <BreadcrumbsWithRouter />
          <Title variant="display2" txtColor={green[900]}>
            HELP CENTER
          </Title>
          <SelectionWrapper container justify="center" alignItems="flex-end">
            <Grid item>
              <Title
                variant="subheading"
                txtColor={green[900]}
                txtSize="1.3rem"
              >
                Please select your region:
              </Title>
            </Grid>
            <Grid item>
              <SelectionField
                handleChange={this.handleSearch}
                options={REGION_LIST}
                value={region}
              />
            </Grid>
          </SelectionWrapper>
          <ResultWrapper>
            {/* {initialRender && <Map src={VictoriaMap} alt="Map of Victoria" />} */}
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
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(HelpCenter);
