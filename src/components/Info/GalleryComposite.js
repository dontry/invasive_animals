import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import LightBox from "./LightBox";
/* eslint react/prop-types: 0 */
class GalleryComposite extends Component {
  state = {
    imgIndex: 0,
    open: false
  };

  selectImage = event => {
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
    const { images, children } = this.props;
    const { imgIndex, open } = this.state;
    const gallery = React.cloneElement(children, { handleClick: this.selectImage, images });
    return (
      <Fragment>
        {gallery}
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
