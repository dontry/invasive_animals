import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { Field, reduxForm } from "redux-form";
import { Redirect, withRouter } from "react-router-dom";
//Material UI
import Grid from "material-ui/Grid";
//Components
import { Mask } from "../common/Mask";
import Loader from "../common/Loader";
import { StyledButton } from "../common/ActionButtonGroup";
import { TextField } from "../common/FormFields";
import Captcha from "../common/Captcha";
import MessageDialog from "../common/MessageDialog";
import { validate } from "../../utils/formValidation";

const RECEPIENT = "vic.invasive@gmail.com";

export const StyledForm = styled.form`
  position: relative;
  padding: 2.5rem 2rem 3rem 0;
  width: 100%;
`;

/* eslint react/no-deprecated: 0 */
const FormBody = styled(Grid)`
  && {
    padding-bottom: 2rem;
  }
`;

const FormFooter = styled(Grid)`
  && {
    width: 100%;
    text-align: right;
  }
`;

export class ContactForm extends Component {
  state = {
    dialogOpen: false,
    complete: false,
    message: ""
  };

  componentWillReceiveProps(nextProps) {
    if (
      nextProps.submitSucceeded &&
      (!nextProps.email.loading && !!nextProps.email.entity)
    ) {
      this.handleDialogOpen("Your report has been sent successfully");
    } else if (nextProps.submitSucceeded && nextProps.email.error) {
      this.handleDialogOpen(
        `The email delivery failed: ${JSON.stringify(nextProps.email.error)}`
      );
    }
  }

  componentWillUnmount() {
    this.props.reset();
  }

  handleSubmit = async email => {
    email = { ...email, to: RECEPIENT };
    await this.props.sendEmail(email);
  };

  handleDialogOpen = message => {
    this.setState({ dialogOpen: true, message });
  };

  handleDialogClose = () => {
    this.setState({ dialogOpen: false, complete: true });
  };

  render() {
    const { handleSubmit, submitting,  email } = this.props;
    const { dialogOpen, message, complete } = this.state;

    if (complete === true) {
      return <Redirect to="/" />;
    }

    return (
      <Fragment>
        <StyledForm onSubmit={handleSubmit(this.handleSubmit)}>
          {(submitting || email.loading) && (
            <Mask>
              <Loader />
            </Mask>
          )}
          <FormBody container direction="row" justify="flex-start">
            <Field
              required
              component={TextField}
              name="username"
              label="Your name"
            />
            <Field
              required
              component={TextField}
              name="from"
              label="Your email address"
              type="email"
            />
            <Field
              required
              component={TextField}
              name="message"
              label="Message"
              multiline={true}
              witdh="100%"
              sm={12}
              fullWidth
              rows={5}
            />
          </FormBody>
          <FormFooter container direction="column" alignItems="flex-end">
            <Grid item>
              <Field name="recaptcha" component={Captcha} />
            </Grid>
            <br />
            <Grid item>
              <StyledButton type="primary">Send</StyledButton>
            </Grid>
          </FormFooter>
        </StyledForm>

        <MessageDialog
          open={dialogOpen}
          handleClose={this.handleDialogClose}
          message={message}
        />
      </Fragment>
    );
  }
}

ContactForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  submitting: PropTypes.bool.isRequired,
  submitSucceeded: PropTypes.bool.isRequired,
  email: PropTypes.object.isRequired,
  reset: PropTypes.func.isRequired,
  sendEmail: PropTypes.func.isRequired,
}

export default reduxForm({ form: "contact", validate })(
  withRouter(ContactForm)
);
