import React, { Component, Fragment } from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import UploadImageContainer from "../containers/UploadImageContainer";
import SwipeableViews from "react-swipeable-views";
import Button from "material-ui/Button";
import Stepper, { Step, StepLabel } from "material-ui/Stepper";
import Grid from "material-ui/Grid";

//Components
import PageContainer from "../components/common/PageContainer";
import { Title } from "../components/common/Text";
import { green, lime } from "material-ui/colors";
import BriefInfo from "../components/Info/BriefInfo";
import NavAppBar from "../components/common/NavAppBar";
import Loader from "../components/common/Loader";
import { ScreenMask } from "../components/common/Mask";
import BreadcrumbsWithRouter from "../components/common/BreadcrumbsWithRouter";
import  {
  ActionButton
} from "../components/common/ActionButtonGroup";
import ConfirmationDialog from "../components/common/ConfirmationDialog";
import { resetDetection } from "../actions/detection";
import GalleryComposite from "../components/Info/GalleryComposite";
import  { Slider } from "../components/Info/Gallery";

const STEPS = [
  "Upload the photos and submit",
  "View the result",
  "Take Actions"
];

const DropboxWrapper = styled.div`
  margin-top: 50px;
`;

const BackButton = styled(Button)`
  &&& {
    position: absolute;
    z-index: 100;
    transform: translateY(-50%);
    top: 50%;
    left: 1rem;
    color: #fff;
  }
`;

const ReportActionProps = history => ({
  raised: true,
  label: "Report",
  width: "300px",
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
  width: "300px",
  action() {
    return history.push("/help_center");
  },
  disabled: false,
  type: "secondary",
  trait: "main"
});

class Detection extends Component {
  state = {
    viewIndex: 0,
    dialogOpen: false
  };

  componentWillReceiveProps(nxtProps) {
    if (
      nxtProps.result.entity &&
      nxtProps.result.entity !== this.props.result.entity
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
    const { viewIndex, dialogOpen } = this.state;
    return (
      <Fragment>
        <NavAppBar />
        {result.loading && (
          <ScreenMask>
            <Loader />
          </ScreenMask>
        )}
        <PageContainer>
          <BreadcrumbsWithRouter />
          <Stepper
            activeStep={viewIndex}
            alternativeLabel
            style={{ backgroundColor: "transparent" }}
          >
            {STEPS.map(label => {
              return (
                <Step key={label}>
                  <StepLabel>{label}</StepLabel>
                </Step>
              );
            })}
          </Stepper>
          <SwipeableViews
            axis={"x"}
            index={viewIndex}
            onChangeIndex={() => {
              console.log("no change view");
            }}
          >
            <PageContainer min_height="auto" padding="0 0 4rem">
              <DropboxWrapper>
                <Title
                  variant="display1"
                  text_color={green[700]}
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
            <PageContainer min_height="auto" padding="0 0 4rem">
              {result.entity && (
                <BriefInfo
                  handleBack={this.handleBack}
                  species={result.entity.candidates}
                  labels={result.entity.labels}
                />
              )}
              <Grid container direction="column" alignItems="center">
                <Title variant="title">Similar Images</Title>
                <Grid item xs={12} sm={8} style={{ max_width: "800px" }}>
                  {result.entity && (
                    <GalleryComposite images={result.entity.images}>
                      <Slider />
                    </GalleryComposite>
                  )}
                </Grid>
              </Grid>
              <Grid
                container
                direction="column"
                style={{
                  width: "100%",
                  padding: "2rem",
                  margin: "0 auto",
                  position: "relative"
                }}
                alignItems="center"
              >
                <Grid item xs={6}>
                  <ActionButton {...ReportActionProps(history)} />
                </Grid>
                <Grid item xs={6}>
                  <ActionButton {...SeekHelpActionProps(history)} />
                </Grid>
                <BackButton onClick={this.handleBack} type="primary">
                  <Title variant="display1" text_color={lime[800]}>
                    ◀︎ BACK
                  </Title>
                </BackButton>
              </Grid>
            </PageContainer>
          </SwipeableViews>
        </PageContainer>
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
