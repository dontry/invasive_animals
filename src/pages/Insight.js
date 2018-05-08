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
import Loader from "../components/common/Loader";
import { Title } from "../components/common/Text";
import TabContainer from "../components/common/TabContainer";
import { TableauScript } from "../components/common/3rdPartyScripts";

import {
  GeograhicalDensity,
  GeographicalDistribution
} from "../components/Insight/DistributionMap";
import {
  RecordsByState,
  TimeSeries,
  MonthlyRecords
} from "../components/Insight/Charts";

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
            <Tab label="Records by State" />
            <Tab label="Time Series" />
          </Tabs>
          <SwipeableViews
            axis="x"
            index={index}
            onChangeIndex={this.onChangeIndex}
          >
            <TabContainer width="100%">
              <Grid container justify="center">
                <Grid item xs={12} sm={6} />
                <Grid item xs={12} sm={6}>
                  <GeographicalDistribution />
                </Grid>
              </Grid>
              <Grid container justify="center">
                <Grid item>
                  <GeograhicalDensity />
                </Grid>
              </Grid>
            </TabContainer>
            <TabContainer width="100%">
              <RecordsByState />
            </TabContainer>
            <TabContainer width="100%">
              <TimeSeries />
              <br />
              <MonthlyRecords />
            </TabContainer>
          </SwipeableViews>
        </PageContainer>
      </Fragment>
    );
  }
}
