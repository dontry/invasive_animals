import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "material-ui/styles";
import Dropzone from "react-dropzone";
import styled from "styled-components";
import MoveToInbox from "material-ui-icons/MoveToInbox";
import { grey } from "material-ui/colors";

const StyledDropzone = styled(Dropzone)`
  position: relative;
  display: flex;
  height: 30vh;
  width: 60vw;
  min-width: 360px;
  min-height: 360px;
  border: 2px dashed #999;
  align-items: center;
  justify-content: center;
  color: ${grey[600]};
  background-color: ${grey[200]};
  text-align: center;
  &:hover * {
    color: ${grey[900]};
  }
`;

const HintText = styled.p`
  margin-top: 2rem;
  padding: 1rem;
  text-align: center;
  max-width: 600;
`;

const StyledMoveToInbox = styled(MoveToInbox)`
  color: ${grey[600]};
  && {
    width: 3em;
    height: 3em;
  }
`;

const UploadedImage = styled.img`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  max-width: 80%;
  max-height: 90%;
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
      //TODO: use modal box
      window.alert("Sorry, you can only drop one photo at a time");
    } else {
      image = accepted[0];
      this.setState({
        image
      });
      this.props.uploadImage(image);
    }
  };

  render() {
    const { classes } = this.props;
    const { image } = this.state;
    // const imageURL = image && this.createImageURL(image.preview);
    return (
      <StyledDropzone
        id="dropzone"
        onDrop={this.handleDrop}
        accept="image/jpeg, image/png, image/jpg"
      >
        {image ? (
          <UploadedImage src={image.preview} />
        ) : (
          <di>
            <HintText>
              Please drop the suspicious invasive species here, we will tell you
              if it is.<br />(Accept image format: jpg, png)
            </HintText>
            <StyledMoveToInbox />
          </di>
        )}
      </StyledDropzone>
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

export default DropImageZone;
