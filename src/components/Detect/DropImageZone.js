import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "material-ui/styles";
import Dropzone from "react-dropzone";
import styled from "styled-components";
import MoveToInbox from "material-ui-icons/MoveToInbox";
import { grey } from "material-ui/colors";

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
    textAlign: "center",
    maxWidth: 600
  }
};

const StyledDropzone = styled(Dropzone)`
  position: relative;
  display: flex;
  height: 30vh;
  width: 60vw;
  min-width: 360px;
  min-height: 360px;
  border: 2px dashed #999;
  margin: 0 auto;
  align-items: center;
  justify-content: center;
  color: ${grey[600]};
  background-color: ${grey[200]};
  text-align: center;
  &:hover *{
    color: ${grey[900]};
  }
`;

const StyledMoveToInbox = styled(MoveToInbox)`
  color: ${grey[600]};
  && {
    width: 3em;
    height: 3em;
  }
`;

class DropImageZone extends Component {
  state = {
    image: null
  };

  componentDidMount() {
    if (this.props.image && null !== this.props.image.entity) {
      this.setState({ image: this.props.image.entity });
    }
  }

  handleDrop = (accepted, rejected) => {
    let image;
    if (accepted.length > 1) {
      window.alert("Sorry, you can only drop one photo.");
    } else {
      image = accepted[0];
      this.setState({
        image
      });
      this.props.uploadImage(image);
    }
  };

  // createImageURL = blob => {
  //   const urlCreator = window.URL || window.webkitURL;
  //   return urlCreator.createObjectURL(blob);
  // };

  render() {
    const { classes } = this.props;
    const { image } = this.state;
    // const imageURL = image && this.createImageURL(image.preview);
    return (
      <section className={classes.root}>
        <div>
          <StyledDropzone
            id="dropzone"
            onDrop={this.handleDrop}
            accept="image/jpeg, image/png, image/jpg"
          >
            {image ? (
              <img className={classes.image} src={image.preview} />
            ) : (
              <di>
                <p className={classes.p}>
                  Please drop the suspicious invasive species here, we will tell
                  you if it is.<br />(Accept image format: jpg, png)
                </p>
                <StyledMoveToInbox />
              </di>
            )}
          </StyledDropzone>
        </div>
      </section>
    );
  }
}

DropImageZone.propTypes = {
  classes: PropTypes.object.isRequired,
  uploadImage: PropTypes.func.isRequired
};

DropImageZone.defaultProps = {
  classes: {},
  uploadImage() {
    console.log("upload image");
  }
};

export default withStyles(styles)(DropImageZone);
