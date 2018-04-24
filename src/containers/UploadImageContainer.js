import {connect} from "react-redux";
import {addImage, fetchDetectionResult, resetImage} from "../actions/detection";
import UploadImageModule from "../components/Detect/UploadImageModule";

const mapStateToProps = (state, ownProps) => {
  return {
    image: state.detection.uploadImage
  };
};

const mapDispatchToProps = dispatch => {
  return {
    uploadImage: image => {
      dispatch(addImage(image));
    },
    getDetectionResult: async (image, options) => {
      dispatch(await fetchDetectionResult(image, options));
    },
    resetImage: () => {
      dispatch(resetImage());
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UploadImageModule);
