import React, { Component, Fragment } from "react";
import styled from "styled-components";
//MUI Components
import Tabs, { Tab } from "material-ui/Tabs";
import Grid from "material-ui/Grid";
import SwipeableViews from "react-swipeable-views";
//Components
import PageContainer from "../components/common/PageContainer";
import NavAppBar from "../components/common/NavAppBar";
import BreadcrumbsWithRouter from "../components/common/BreadcrumbsWithRouter";
import { Title, Paragraph } from "../components/common/Text";
import TabContainer from "../components/common/TabContainer";

import {
  GeograhicalDensity,
  GeographicalDistribution
} from "../components/Insight/DistributionMap";
import {
  RecordsByState,
  TimeSeries,
  MonthlyRecords
} from "../components/Insight/Charts";

const GraphWrapper = styled(Grid)`
  && {
    margin-bottom: 4rem;
  }
`;

export default class Insight extends Component {
  state = {
    index: 0
  };
  handleChange = (event, value) => {
    this.setState({ index: value });
  };
  handleChangeIndex = index => {
    this.setState({ index });
  };
  render() {
    const { index } = this.state;
    return (
      <Fragment>
        <NavAppBar />
        <PageContainer>
          <BreadcrumbsWithRouter />
          <Tabs
            value={index}
            onChange={this.handleChange}
            indicatorColor="primary"
            textColor="primary"
            centered
          >
            <Tab label="Distribution" />
            <Tab label="Trend Observation" />
            <Tab label="Occurrence by State" />
          </Tabs>
          <SwipeableViews
            axis="x"
            index={index}
            onChangeIndex={this.onChangeIndex}
          >
            <TabContainer width="100%">
              <Grid container justify="center">
                <GraphWrapper item>
                  <Title variant="display1" align="left">
                    Geographical Distribution
                  </Title>
                  <Paragraph variant="subheading" line_height="2em">
                    View the location of all the occurrences of all the species
                    in specific time period. The indicator can be selected to
                    view the only one species.
                  </Paragraph>
                  <GeographicalDistribution />
                </GraphWrapper>
              </Grid>
              <Grid container justify="center">
                <GraphWrapper item>
                  <Title variant="display1" align="left">
                    Geographical Density
                  </Title>
                  <Paragraph variant="subheading" line_height="2em">
                    View the location of all the occurrences of all the species
                    in specific time period. The indicator can be selected to
                    view the only one species.
                  </Paragraph>
                  <GeograhicalDensity />
                </GraphWrapper>
              </Grid>
            </TabContainer>
            <TabContainer width="100%">
              <GraphWrapper item>
                <Title variant="display1" align="left">
                  Time Series
                </Title>
                <Paragraph variant="subheading" line_height="2em">
                  View the comparison of the monthly occurrences of the selected
                  species in specific time period.
                </Paragraph>
                <TimeSeries />
              </GraphWrapper>
              <GraphWrapper item>
                <Title variant="display1" align="left">
                  Monthly Records
                </Title>
                <Paragraph variant="subheading" line_height="2em">
                  View the comparison of the monthly occurrences of the selected
                  species in specific time period.
                </Paragraph>
                <MonthlyRecords />
              </GraphWrapper>
            </TabContainer>
            <TabContainer width="100%">
              <GraphWrapper>
                <Title variant="display1" align="left">
                  Occurrences by States
                </Title>
                <Paragraph variant="subheading" line_height="2em">
                  View the amount of occurrences of the selected species in a
                  specific time period by state in descending sorting.
                </Paragraph>
                <RecordsByState />
              </GraphWrapper>
            </TabContainer>
          </SwipeableViews>
        </PageContainer>
      </Fragment>
    );
  }
}
