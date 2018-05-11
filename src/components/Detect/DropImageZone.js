import React, { Component } from "react";
import PropTypes from "prop-types";
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
  cursor: pointer;
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
  handleDrop = (accepted, rejected) => {
    let image;
    if (accepted.length > 1) {
      //TODO: use modal box
      window.alert("Sorry, you can only drop one photo at a time");
    } else if (accepted.length === 1) {
      image = accepted[0];
      this.props.uploadImage(image);
    }

    if (
      rejected.length > 0 &&
      rejected.filter(item => item.size >= 2000).length > 0
    ) {
      window.alert("Sorry, the size of image should be smaller than 2MB");
    }
  };

  render() {
    const { image } = this.props;
    // const imageURL = image && this.createImageURL(image.preview);
    return (
      <StyledDropzone
        id="dropzone"
        onDrop={this.handleDrop}
        accept="image/jpeg, image/png, image/jpg"
        maxSize={5000000}
      >
        {image ? (
          <UploadedImage src={image.preview} />
        ) : (
          <div>
            <HintText>
              Please drop the suspicious invasive species here, we will tell you
              if it is.<br />(Accept image format: jpg, png; Max size: 2MB)
            </HintText>
            <StyledMoveToInbox />
          </div>
        )}
      </StyledDropzone>
    );
  }
}

DropImageZone.propTypes = {
  uploadImage: PropTypes.func.isRequired
};

DropImageZone.defaultProps = {
  uploadImage() {
    console.log("upload image");
  }
};

export default DropImageZone;
