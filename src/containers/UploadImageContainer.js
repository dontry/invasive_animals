import { connect } from "react-redux";
import { addImage, fetchDetectionResult } from "../actions/images";
import UploadImageModule from "../components/UploadImageModule";

const mapStateToProps = (state, ownProps) => {
  return {
    image: state.images.uploadImage
  };
};

const mapDispatchToProps = dispatch => {
  return {
    uploadImage: image => {
      dispatch(addImage(image));
    },
    getDetectionResult: async (image, options) => {
      dispatch(await fetchDetectionResult(image, options));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UploadImageModule);
