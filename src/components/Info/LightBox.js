import React, { PureComponent } from "react";
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

export default Lightbox;
