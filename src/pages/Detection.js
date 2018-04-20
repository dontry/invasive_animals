import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import UploadImageModule from "../components/Detect/UploadImageModule";
import DetectionResultContainer from "../containers/DetectionResultContainer";
import Divider from "material-ui/Divider";
import ResultModule from "../components/ResultModule";
import SwipeableViews from "react-swipeable-views";
import PageContainer from "../components/common/PageContainer";
import Grid from "material-ui/Grid";
import { Title } from "../components/common/Text";
import { green } from "material-ui/colors";
import BriefInfo from "../components/Info/BriefInfo";

const ViewWrapper = styled.section`
  width: 100vw;
  height: 100vh;
`;

const DropboxWrapper = styled.div`
  margin-top: 15%;
`;

class Detection extends Component {
  state = {
    viewIndex: 0
  };

  handeChangeIndex = index => {
    this.setState({ viewIndex: index });
  };

  handleSubmit = () => {
    this.setState({ viewIndex: 1 });
  };

  handleBack = () => {
    this.setState({ viewIndex: 0 });
  };

  render() {
    const { viewIndex } = this.state;
    const { species } = this.props;
    console.log(viewIndex);
    return (
      <Fragment>
        <PageContainer>
          <SwipeableViews
            axis={"x"}
            index={viewIndex}
            onChangeIndex={() => {
              console.log("no change view");
            }}
          >
            <ViewWrapper>
              <DropboxWrapper>
                <Title variant="display1" txtColor={green[700]} padding="0 0 2rem">
                  Detect the invasive species
                </Title>
                <UploadImageModule handleSubmit={this.handleSubmit} />
              </DropboxWrapper>
            </ViewWrapper>
            <ViewWrapper>
              <BriefInfo handleBack={this.handleBack} species={species} />
            </ViewWrapper>
          </SwipeableViews>
        </PageContainer>
      </Fragment>
    );
  }
}

export default Detection;
