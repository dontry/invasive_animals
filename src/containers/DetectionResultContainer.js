import { connect } from "react-redux";
import ResultModule from "../components/ResultModule";

const mapStateToProps = state => {
  return {
    result: state.images.detectionResult
  };
};

export default connect(mapStateToProps, null)(ResultModule);
