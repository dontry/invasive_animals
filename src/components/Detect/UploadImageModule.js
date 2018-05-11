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
    &:hover {
      background-color: ${props => props.theme.palette.primary.dark};
    }
  }
`;

class UploadImageModule extends PureComponent {
  componentWillMount() {
    this.props.reset();
  }

  handleSubmitBtnClick = () => {
    this.props.getDetectionResult(this.props.image.entity);
    this.props.handleSubmit();
  };
  render() {
    const { image, uploadImage } = this.props;
    return (
      <Fragment>
        <Grid container direction="column" justify="center" alignItems="center">
          <Grid item sm={8}>
            <DropImageZone uploadImage={uploadImage} image={image.entity} />
          </Grid>
          <Grid item sm={8}>
            <BrowseButton
              variant="raised"
              onClick={this.handleSubmitBtnClick}
              disabled={!image.entity}
            >
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
