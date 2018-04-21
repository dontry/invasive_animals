import { connect } from "react-redux";
import ResultModule from "../components/ResultModule";

const mapStateToProps = state => {
  return {
    result: state.detection.detectionResult
  };
};

export default connect(mapStateToProps, null)(ResultModule);
