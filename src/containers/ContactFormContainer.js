import { connect } from "react-redux";
import ContactForm from "../components/Contact/ContactForm";
import { sendContactEmail, resetEmail } from "../actions/email";

const mapStateToProps = state => {
  return {
    email: state.email
  };
};

const mapDispatchToProps = dispatch => {
  return {
    sendEmail: async email => {
      dispatch(await sendContactEmail(email));
    },
    reset: () => {
      dispatch(resetEmail());
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ContactForm);
