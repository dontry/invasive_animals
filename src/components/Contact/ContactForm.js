import React, { Component } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { Field, reduxForm } from "redux-form";
import { Redirect, withRouter } from "react-router-dom";
//Material UI
import Grid from "material-ui/Grid";
//Components
import { Mask } from "../common/Mask";
import { StyledButton } from "../common/ActionButtonGroup";
import Loader from "../common/Loader";
import { TextField } from "../common/FormFields";

const StyledForm = styled.form`
  padding: 2.5rem 2rem 3rem 0;
  width: 100%;
`;

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
  handleSubmit = () => {
    this.props.reset();
  };

  render() {
    const { handleSubmit, submitting, submitSucceeded } = this.props;

    return (
      <StyledForm onSubmit={handleSubmit(this.handleSubmit)}>
        <FormBody container direction="row" justify="flex-start">
          <Field required component={TextField} name="username" label="Name" />
          <Field
            required
            component={TextField}
            name="email"
            label="Email"
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
          </Grid>
          <Grid item>
            <StyledButton type="primary">Send</StyledButton>
          </Grid>
        </FormFooter>
      </StyledForm>
    );
  }
}

export default reduxForm({ form: "contact" })(ContactForm);
