import React, { Fragment, PureComponent } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Grid from "material-ui/Grid";
import DropImageZone from "./DropImageZone";
import Button from "material-ui/Button";

const BrowseButton = styled(Button)`
  && {
    background-color: ${props => props.theme.palette.primary.main};
    color: #fff;
  }
`;

const getSpacing = (number = 1) => Number(16 / number);

class UploadImageModule extends PureComponent {
  componentWillMount() {
    this.props.resetImage();
  }

  handleSubmitBtnClick = () => {
    this.getDetectionResult(this.props.image.entity);
    this.handleSubmit();
  };
  render() {
    const { image, uploadImage, getDetectionResult, handleSubmit } = this.props;
    return (
      <Fragment>
        <Grid
          container
          direction="column"
          justify="center"
          alignItems="center"
          spacing={getSpacing()}
        >
          <Grid item sm={8}>
            <DropImageZone uploadImage={uploadImage} />
          </Grid>
          <Grid item sm={8}>
            <BrowseButton variant="raised" onClick={this.handleSubmitBtnClick}>
              Submit
            </BrowseButton>
          </Grid>
        </Grid>
      </Fragment>
    );
  }
}

UploadImageModule.propTypes = {
  image: PropTypes.object.isRequired,
  uploadImage: PropTypes.func.isRequired,
  getDetectionResult: PropTypes.func.isRequired
};

UploadImageModule.defaultProps = {
  image: null,
  uploadImage() {
    console.log("uploadImage");
  },
  getDetectionResult() {
    console.log("getDetectionResult");
  },
  handleSubmit() {
    console.log("handleSubmit");
  }
};

export default UploadImageModule;
