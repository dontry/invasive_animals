import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "material-ui/styles";
import Dropzone from "react-dropzone";
import "../assets/DropImageZone.css";
import encodeImage from "../utils/encodeImage";

const styles = {
  dropZone: {
    position: "relative",
    height: "30vh",
    width: "60wh",
    minWidth: "360px",
    border: "2px dashed #999",
    margin: "0 auto"
  },
  image: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    maxWidth: "80%",
    maxHeight: "90%"
  },
  p: {
    marginTop: "2rem",
    padding: "1rem",
    textAlign: "center"
  }
};

class DropImageZone extends Component {
  state = {
    image: null
  };

  handleDrop = (accepted, rejected) => {
    if (accepted.length > 1) {
      window.alert("Sorry, you can only drop one photo.");
    } else {
      this.setState({
        image: accepted[0]
      });
    }
  };

  createImageURL = blob => {
    const urlCreator = window.URL || window.webkitURL;
    return urlCreator.createObjectURL(blob);
  };

  render() {
    const { classes } = this.props;
    const { image } = this.state;
    // const imageURL = image && this.createImageURL(image.preview);
    return (
      <section className={classes.root}>
        <div>
          <Dropzone
            id="dropzone"
            onDrop={this.handleDrop}
            accept="image/jpeg, image/png, image/jpg"
            className={classes.dropZone}
          >
            {image ? (
              <img className={classes.image} src={image.preview} />
            ) : (
              <p className={classes.p}>Please drop your photo here(jpg, png)</p>
            )}
          </Dropzone>
        </div>
      </section>
    );
  }
}

DropImageZone.propTypes = {
  classes: PropTypes.object
};

export default withStyles(styles)(DropImageZone);
