import React, { Component, Fragment } from "react";
import styled from "styled-components";
import Grid from "material-ui/Grid";
import { green } from "material-ui/colors";

import PageContainer from "../components/common/PageContainer";
import NavAppBar from "../components/common/NavAppBar";
import BreadcrumbsWithRouter from "../components/common/BreadcrumbsWithRouter";
import LoadingSpinner from "../components/common/LoadingSpinner";
import { Title } from "../components/common/Text";

import LocationInfo from "../components/HelpCenter/LocationInfo";
import SelectionField from "../components/HelpCenter/SelectionField";
import { getAllHelpCenters } from "../utils/api";
import VictoriaMap from "../assets/images/vitoria_map.png";

const REGION_LIST = [
  "Loddon-Mallee",
  "Hume",
  "Grampians",
  "Port Philips",
  "Gippsland",
  "Barwon South West"
];

const SelectionWrapper = styled(Grid)`
  padding: 1rem;
`;

const Map = styled.img`
  max-width: 800px;
  padding: 2rem;
`

const ResultWrapper = styled.div`
  position: relative;
  margin: 0 auto;
  max-width: 800px;
  min-height: 200px;
  padding: 2rem 3rem 4rem;
`;

class HelpCenter extends Component {
  state = {
    initialRender: true,
    region: "",
    centerList: [],
    result: [],
    loading: false
  };

  async componentWillMount() {
    const centerList = await getAllHelpCenters();
    this.setState({ centerList });
  }
  handleSearch = event => {
    this.setState({ initialRender: false });
    this.loading();

    const region = event.target.value;
    this.setState({ region });
    setTimeout(() => {
      const result = this.searchByRegion(region);
      this.setState({ result, loading: false });
    }, 1000);
  };
  searchByRegion = region => {
    const { centerList } = this.state;
    return centerList.filter(item => {
      return item.Region.toLowerCase().includes(region.toLowerCase());
    });
  };
  loading = () => {
    this.setState({ loading: true });
  };
  render() {
    const { region, result, loading, initialRender } = this.state;
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
            {initialRender &&  <Map src={VictoriaMap} alt="Map of Victoria"/>}
            {loading ? (
              <LoadingSpinner type="bars" />
            ) : (
              result.map(item => <LocationInfo info={item} />)
            )}
          </ResultWrapper>
        </PageContainer>
      </Fragment>
    );
  }
}

export default HelpCenter;
