import { connect } from "react-redux";
import ReportForm from "../components/Report/ReportForm";
import { sendReportEmail, resetEmail } from "../actions/email";

const mapStateToProps = state => {
  return {
    image: state.detection.uploadImage,
    species: state.detection.detectionResult.entity,
    email: state.email
  };
};

const mapDispatchToProps = dispatch => {
  return {
    sendEmail: async email => {
      dispatch(await sendReportEmail(email));
    },
    reset: () => {
      dispatch( resetEmail());
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ReportForm);
