import React, { Component, Fragment } from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import UploadImageContainer from "../containers/UploadImageContainer";
import SwipeableViews from "react-swipeable-views";
import PageContainer from "../components/common/PageContainer";
import { Title } from "../components/common/Text";
import { green, lime } from "material-ui/colors";
import BriefInfo from "../components/Info/BriefInfo";
import NavAppBar from "../components/common/NavAppBar";
import Loader from "../components/common/Loader";
import { ScreenMask } from "../components/common/Mask";
import BreadcrumbsWithRouter from "../components/common/BreadcrumbsWithRouter";
import ActionButtonGroup from "../components/common/ActionButtonGroup";
import ConfirmationDialog from "../components/common/ConfirmationDialog";
import { resetDetection } from "../actions/detection";

const ViewWrapper = styled.section`
  height: 100vh;
`;

const DropboxWrapper = styled.div`
  margin-top: 50px;
`;

const ReportActionProps = history => ({
  raised: true,
  label: "Report",
  action() {
    return history.push("/report");
  },
  disabled: false,
  type: "primary",
  trait: "dark"
});

const SeekHelpActionProps = history => ({
  raised: true,
  label: "Seek Help",
  action() {
    return history.push("/help_center");
  },
  disabled: false,
  type: "secondary",
  trait: "dark"
});

class Detection extends Component {
  state = {
    viewIndex: 0,
    loading: false,
    dialogOpen: false
  };

  componentWillReceiveProps(nxtProps) {
    if (
      nxtProps.result.entity &&
      nxtProps.result.entity != this.props.result.entity
    ) {
      this.setState({ viewIndex: 1, loading: false });
    } else if (nxtProps.result.error) {
      this.setState({ dialogOpen: true });
    }
  }

  handeChangeIndex = index => {
    this.setState({ viewIndex: index });
  };
  handleSubmit = () => {
    this.setState({ loading: true });
  };

  handleDialogClose = () => {
    this.setState({ dialogOpen: false });
    this.props.reset();
  };

  handleBack = () => {
    this.setState({ viewIndex: 0 });
  };

  render() {
    const { result, history } = this.props;
    const { viewIndex, loading, dialogOpen } = this.state;
    return (
      <Fragment>
        <NavAppBar />
        {result.loading && (
          <ScreenMask>
            <Loader />
          </ScreenMask>
        )}
        <SwipeableViews
          axis={"x"}
          index={viewIndex}
          onChangeIndex={() => {
            console.log("no change view");
          }}
          style={{ height: "120vh" }}
        >
          <PageContainer>
            <BreadcrumbsWithRouter />
            <DropboxWrapper>
              <Title
                variant="display1"
                txtColor={green[700]}
                padding="0 0 2rem"
              >
                Identify the invasive species
              </Title>
              <UploadImageContainer handleSubmit={this.handleSubmit} />
            </DropboxWrapper>
            <ConfirmationDialog
              open={dialogOpen}
              message={result.error}
              handleClose={this.handleDialogClose}
            />
          </PageContainer>
          <PageContainer>
            {result.entity && (
              <BriefInfo
                handleBack={this.handleBack}
                species={result.entity.candidates}
              />
            )}
            <ActionButtonGroup
              btnStyle={{ margin: "2rem" }}
              primaryProps={ReportActionProps(history)}
              secondaryProps={SeekHelpActionProps(history)}
            />
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
    result: state.detection.detectionResult
  };
};

const mapDisptachToProps = dispatch => {
  return {
    reset: () => {
      dispatch(resetDetection());
    }
  };
};

export default connect(mapStateToProps, mapDisptachToProps)(
  withRouter(Detection)
);
