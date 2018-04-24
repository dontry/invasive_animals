import React, {Component, Fragment} from "react";
import styled from "styled-components";
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";
import UploadImageContainer from "../containers/UploadImageContainer";
import SwipeableViews from "react-swipeable-views";
import PageContainer from "../components/common/PageContainer";
import {Title} from "../components/common/Text";
import {green, lime} from "material-ui/colors";
import BriefInfo from "../components/Info/BriefInfo";
import NavAppBar from "../components/common/NavAppBar";
import LoadingSpinner from "../components/common/LoadingSpinner";
import {ScreenMask} from "../components/common/Mask";
import BreadcrumbsWithRouter from "../components/common/BreadcrumbsWithRouter";
import ActionButtonGroup from "../components/common/ActionButtonGroup";

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
    loading: false
  };

  componentWillMount() {}
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
    const { species, history } = this.props;
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
          style={{ height: "100%" }}
        >
          <PageContainer>
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
    species: state.detection.detectionResult
  };
};

export default connect(mapStateToProps)(withRouter(Detection));
