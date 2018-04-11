import React, { Fragment } from "react";
import PropTypes from "prop-types";
import { withStyles } from "material-ui/styles";
import Grid from "material-ui/Grid";
import DropImageZone from "./DropImageZone";
import Button from "material-ui/Button";

const styles = theme => ({
  root: {
    flexGrow: 1,
    paddingBottom: "1rem"
  },
  browseButton: {},
  submitButton: {
    textAlign: "center",
    width: "80%",
    marginLeft: "10%"
  }
});

const getSpacing = (number = 1) => Number(16 / number);

const UploadImageModule = ({
  classes,
  image,
  uploadImage,
  getDetectionResult
}) => {
  const handleBrowseClick = () => {
    const $dropzone = document.getElementById("dropzone");
    $dropzone.click();
  };
  const handleSubmitClick = () => {
    getDetectionResult(image.entity);
  };
  return (
    <Fragment>
      <Grid
        container
        className={classes.root}
        direction="column"
        justify="center"
        alignItems="center"
        spacing={getSpacing()}
      >
        <Grid item sm={8}>
          <Button
            variant="raised"
            className={classes.browseButton}
            onClick={handleBrowseClick}
          >
            Browse
          </Button>
        </Grid>
        <Grid item sm={8}>
            <DropImageZone uploadImage={uploadImage} />
        </Grid>
        <Grid item sm={8}>
          <Button
            variant="raised"
            className={classes.submitButton}
            onClick={handleSubmitClick}
          >
            Submit
          </Button>
        </Grid>
      </Grid>
    </Fragment>
  );
};

UploadImageModule.propTypes = {
  classes: PropTypes.object.isRequired,
  image: PropTypes.object.isRequired,
  uploadImage: PropTypes.func.isRequired,
  getDetectionResult: PropTypes.func.isRequired
};

UploadImageModule.defaultProps = {
  classes: {},
  image: null,
  uploadImage() {
    console.log("uploadImage");
  },
  getDetectionResult() {
    console.log("getDetectionResult");
  }
};

export default withStyles(styles)(UploadImageModule);
