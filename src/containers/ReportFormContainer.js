import { connect } from "react-redux";
import ReportForm from "../components/Report/ReportForm";
import { sendEmail, resetEmail } from "../actions/email";

const mapStateToProps = state => {
  return {
    image: state.detection.uploadImage,
    email: state.email
  };
};

const mapDispatchToProps = dispatch => {
  return {
    sendEmail: async email => {
      dispatch(await sendEmail(email));
    },
    reset: () => {
      dispatch( resetEmail());
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ReportForm);
