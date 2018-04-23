import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { connect } from "react-redux";
import UploadImageModule from "../components/Detect/UploadImageModule";
import UploadImageContainer from "../containers/UploadImageContainer";
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
import LoadingSpinner from "../components/common/LoadingSpinner";
import { ScreenMask, Mask } from "../components/common/Mask";
import BreadcrumbsWithRouter from "../components/common/BreadcrumbsWithRouter";

const ViewWrapper = styled.section`
  height: 100%;
`;

const DropboxWrapper = styled.div`
  height: 100%;
  margin-top: 50px;
`;

class Detection extends Component {
  state = {
    viewIndex: 0,
    loading: false
  };

  componentWillMount() {
    
  }
  handeChangeIndex = index => {
    this.setState({ viewIndex: index });
  };

  componentWillReceiveProps(nxtProps) {
    if (
      nxtProps.species.entity &&
      nxtProps.species.entity != this.props.species.entity
    ) {
      this.setState({ viewIndex: 1, loading: false });
    }
  }

  handleSubmit = () => {
    this.setState({ loading: true });
  };

  handleBack = () => {
    this.setState({ viewIndex: 0 });
  };

  render() {
    const { viewIndex, loading } = this.state;
    const { species } = this.props;
    console.log(viewIndex);
    return (
      <Fragment>
        <NavAppBar />
        {species.loading && (
          <ScreenMask>
            <LoadingSpinner />
          </ScreenMask>
        )}
        <SwipeableViews
          axis={"x"}
          index={viewIndex}
          onChangeIndex={() => {
            console.log("no change view");
          }}
          style={{ overflow: "hidden" }}
        >
          <PageContainer height="90vh">
            <BreadcrumbsWithRouter />
            <DropboxWrapper>
              <Title
                variant="display1"
                txtColor={green[700]}
                padding="0 0 2rem"
              >
                Detect the invasive species
              </Title>
              <UploadImageContainer handleSubmit={this.handleSubmit} />
            </DropboxWrapper>
          </PageContainer>
          <PageContainer bgColor={lime[300]}>
            {species.entity && (
              <BriefInfo
                handleBack={this.handleBack}
                species={species.entity.candidates}
              />
            )}
          </PageContainer>
        </SwipeableViews>
      </Fragment>
    );
  }
}

Detection.defaultProps = {
  species: {
    CommonName: "",
    AcademicalName: ""
  }
};

const mapStateToProps = state => {
  return {
    species: state.detection.detectionResult
  };
};

export default connect(mapStateToProps)(Detection);
