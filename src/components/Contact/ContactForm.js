import React, { Component } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { Field, reduxForm } from "redux-form";
import { Redirect, withRouter } from "react-router-dom";
//Material UI
import TextField from "material-ui/TextField";
import Grid from "material-ui/Grid";
import { grey } from "material-ui/colors";
//Components
import { Title, Paragraph } from "../common/Text";
import { Mask } from "../common/Mask";
import { StyledButton } from "../common/ActionButtonGroup";
import LoadingSpinner from "../common/LoadingSpinner";
import { renderTextField } from "../common/FormFields";

const StyledForm = styled.form`
  padding: 2.5rem 2rem 3rem 0;
  width: 100%;
`;

const FormBody = styled(Grid)`
  && {
    padding-bottom: 2rem;
  }
`;

const FormFooter = styled.div`
  && {
    width: 100%;
    text-align: right;
  }
`;

export class ContactForm extends Component {
  handleSubmit = () => {
    this.props.reset();
  };

  render() {
    const { handleSubmit, submitting, submitSucceeded } = this.props;

    return (
      <StyledForm onSubmit={handleSubmit(this.handleSubmit)}>
        <FormBody container direction="row" justify="flex-start">
          <Field
            required
            component={renderTextField}
            name="username"
            label="Name"
          />
          <Field
            required
            component={renderTextField}
            name="email"
            label="Email"
            type="email"
          />
          <Field
            required
            component={renderTextField}
            name="message"
            label="Message"
            multiline={true}
            witdh="100%"
            sm={12}
            fullWidth
            rows={5}
          />
        </FormBody>
        <FormFooter>
          <StyledButton type="primary">Send</StyledButton>
        </FormFooter>
      </StyledForm>
    );
  }
}

export default reduxForm({ form: "contact" })(ContactForm);
