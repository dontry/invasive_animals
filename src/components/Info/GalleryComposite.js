import React, { Component, Fragment } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

import Gallery from "./Gallery";
import LightBox from "./LightBox";

class GalleryComposite extends Component {
  state = {
    imgIndex: 0,
    open: false
  };

  selectImage = event => {
    debugger;
    this.setState({ open: true, imgIndex: event.target.dataset.index });
  };

  closeLightBox = () => {
    this.setState({ open: false });
  };

  movePrev = () => {
    const { images } = this.props;
    const { imgIndex } = this.state;
    this.setState({
      imgIndex: (imgIndex + images.length - 1) % images.length
    });
  };

  moveNext = () => {
    const { images } = this.props;
    const { imgIndex } = this.state;
    this.setState({
      imgIndex: (imgIndex + 1) % images.length
    });
  };

  render() {
    const { images } = this.props;
    const { imgIndex, open } = this.state;

    return (
      <Fragment>
        <Gallery images={images} handleClick={this.selectImage} />
        <LightBox
          images={images}
          imgIndex={imgIndex}
          open={open}
          handleClose={this.closeLightBox}
          handleMovePrev={this.movePrev}
          handleMoveNext={this.moveNext}
        />
      </Fragment>
    );
  }
}

GalleryComposite.propTypes = {
  images: PropTypes.arrayOf(PropTypes.string).isRequired
};

GalleryComposite.defaultProps = {
  images: ["", "", "", "", ""]
};

export default GalleryComposite;
