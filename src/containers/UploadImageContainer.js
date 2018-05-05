import {connect} from "react-redux";
import {requestAddImage, fetchDetectionResult, resetDetection} from "../actions/detection";
import UploadImageModule from "../components/Detect/UploadImageModule";

const mapStateToProps = (state) => {
  return {
    image: state.detection.uploadImage
  };
};

const mapDispatchToProps = dispatch => {
  return {
    uploadImage: image => {
      dispatch(requestAddImage(image));
    },
    getDetectionResult: async (image, options) => {
      dispatch(await fetchDetectionResult(image, options));
    },
    reset: () => {
      dispatch(resetDetection());
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UploadImageModule);
