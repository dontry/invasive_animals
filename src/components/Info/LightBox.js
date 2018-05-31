import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import ImageLightbox from "react-image-lightbox";

import ImagePlaceholder from "../../assets/images/placeholder.png";

class Lightbox extends PureComponent {
  render() {
    const {
      images,
      imgIndex,
      open,
      handleClose,
      handleMovePrev,
      handleMoveNext
    } = this.props;
    return (
      <div>
        {open && (
          <ImageLightbox
            mainSrc={images[imgIndex] || ImagePlaceholder}
            nextSrc={images[(imgIndex + 1) % images.length] || ImagePlaceholder}
            prevSrc={
              images[(imgIndex + images.length - 1) % images.length] ||
              ImagePlaceholder
            }
            onCloseRequest={handleClose}
            onMovePrevRequest={handleMovePrev}
            onMoveNextRequest={handleMoveNext}
          />
        )}
      </div>
    );
  }
}

Lightbox.propTypes = {
  images: PropTypes.array.isRequired,
  imgIndex: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  open: PropTypes.bool.isRequired,
  handleClose: PropTypes.func,
  handleMovePrev: PropTypes.func,
  handleMoveNext: PropTypes.func
}

export default Lightbox;
