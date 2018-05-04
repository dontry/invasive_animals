import { connect } from "react-redux";
import ReportForm from "../components/Report/ReportForm";
import { sendEmail } from "../actions/email";

const mapStateToProps = state => {
  return {
    image: state.detection.uploadImage
  };
};

const mapDispatchToProps = dispatch => {
  return {
    sendEmail: async (email) => {
      dispatch(await sendEmail(email));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ReportForm);
