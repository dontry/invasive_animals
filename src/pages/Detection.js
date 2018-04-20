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
import { green, lime } from "material-ui/colors";
import BriefInfo from "../components/Info/BriefInfo";
import NavAppBar from "../components/common/NavAppBar";

const ViewWrapper = styled.section`
  height: 100%;
`;

const DropboxWrapper = styled.div`
  margin-top: 50px;
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
        <NavAppBar />
        <SwipeableViews
          axis={"x"}
          index={viewIndex}
          onChangeIndex={() => {
            console.log("no change view");
          }}
          style={{overflow: "hidden"}}
        >
          <PageContainer height="90vh">
            <DropboxWrapper>
              <Title
                variant="display1"
                txtColor={green[700]}
                padding="0 0 2rem"
              >
                Detect the invasive species
              </Title>
              <UploadImageModule handleSubmit={this.handleSubmit} />
            </DropboxWrapper>
          </PageContainer>
          <PageContainer bgColor={lime[300]} height="100vh">
            {species && (
              <BriefInfo handleBack={this.handleBack} species={species} />
            )}
            {/* <Button
              onClick={handleBack}
              style={{
                position: "absolute",
                zIndex: 100,
                bottom: "2rem",
                left: "2rem"
              }}
            >
              ⬅ back
            </Button> */}
          </PageContainer>
        </SwipeableViews>
      </Fragment>
    );
  }
}

Detection.defaultProps = {
  species: {
    CommonName: "Cane toad",
    AcademicalName: "adfas"
  }
};

export default Detection;
