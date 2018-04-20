import React, { Component } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { withStyles } from "material-ui/styles";
import { format } from "date-fns";
import { Field, reduxForm } from "redux-form";
import { InputLabel } from "material-ui/Input";
import TextField from "material-ui/TextField";
import DropImageZone from "../Detect/DropImageZone";
import ActionButtonGroup from "../common/ActionButtonGroup";
import Grid from "material-ui/Grid";
import { Redirect, withRouter } from "react-router-dom";
import { validate } from "../../utils/formValidation";
import { grey } from "material-ui/colors";
import {getCurrentDateString} from '../../utils/tools'

const styles = {
  btnGroup: {
    marginTop: "1rem",
    float: "right"
  },
  submitBtn: {
    backgroundColor: "blue",
    color: "#fff"
  },
  cancelButton: {
    backgroundColor: "red",
    color: "red"
  }
};

const FormWrapper = styled.form`
  margin: 0 auto;
  padding: 2rem 0 3rem;
  @media screen and (max-width: 599px) {
    width: 100%;
  }
`;

const FormBody = styled(Grid)`
  && {
    padding-bottom: 2rem;
    border-bottom: 1px solid ${grey[300]};
  }
`;

const FormFooter = styled(Grid)`
  && {
    width: 100%;
    padding-top: 1rem;
    & * {
      text-align: right;
    }
  }
`;

const FieldWrapper = styled(Grid)`
  && {
    width: ${props => props.width || "50%"};
    margin-top: 1rem;
    padding: 1rem;
    @media screen and (max-width: 599px) {
      width: 100%;
    }
  }
`;

const DropzoneWrapper = styled.div`
  width: 80%;
  min-width: 376px;
  margin-top: 1rem;
`;

const StyledTextField = styled(TextField)`
  && {
    width: ${props => props.width || "100%"};
  }
`;

const renderTextField = ({
  input,
  label,
  meta: { touched, error },
  width,
  ...custom
}) => {
  return (
    <FieldWrapper item width={width}>
      <StyledTextField
        label={label}
        InputLabelProps={{ shrink: true }}
        error={touched && !!error}
        helperText={error}
        {...input}
        {...custom}
      />
    </FieldWrapper>
  );
};

const renderDateField = ({
  input,
  label,
  meta: { touched, error },
  ...custom
}) => (
  <FieldWrapper item>
    <StyledTextField
      label={label}
      type="date"
      InputLabelProps={{ shrink: true }}
      error={touched && !!error}
      helperText={error}
      defaultValue="2018-04-01"
      {...input}
      {...custom}
    />
  </FieldWrapper>
);

const renderDropZone = ({ name, label, image, className, ...custom }) => (
  <FieldWrapper>
    <InputLabel style={{ fontSize: "0.75rem" }} shrink={true}>
      {label}
    </InputLabel>
    <DropzoneWrapper>
      <DropImageZone image={image} />
    </DropzoneWrapper>
  </FieldWrapper>
);

export class ReportForm extends Component {
  static contextTypes = {
    router: PropTypes.object // replace with PropTypes.object if you use them
  };

  handleChangeSpeciesField(event) {
    this.setState({ species: event.target.value });
  }

  submit = () => {
    console.log("submit");
  };

  cancel = () => {
    this.props.reset();
    this.context.router.history.goBack();
  };
  render() {
    const {
      handleSubmit,
      classes,
      image,
      pristine,
      submitting,
      submitSucceeded
    } = this.props;

    if (submitSucceeded === true) {
      window.alert("Your report is submitted");
      return <Redirect to="/" />;
    }

    const SubmitProps = {
      className: classes.submitBtn,
      label: "Submit",
      primary: true,
      action: null,
      disabled: false,
      raised: true,
      type: "primary"
    };
    const CancelProps = {
      className: classes.Cancel,
      label: "Cancel",
      primary: false,
      action: this.cancel.bind(this),
      disabled: false,
      raise: false,
      type: "secondary"
    };

    return (
      <FormWrapper
        onSubmit={handleSubmit(this.submit)}
        noValidate
        autoComplete="off"
      >
        <FormBody container direction="row" justify="flex-start">
          <Field
            name="username"
            component={renderTextField}
            label="Your name"
          />
          <Field
            name="email"
            component={renderTextField}
            label="Email"
            type="email"
          />
          <Field name="location" component={renderTextField} label="Location" />
          <Field name="date" component={renderDateField} label="Date" />
          <Field name="species" component={renderTextField} label="Species Name" />
          <Field name="amount" component={renderTextField} label="Number of species" />
          <Field
            name="description"
            label="Description"
            component={renderTextField}
            fullwidth
            multiline={true}
            rows={5}
            width={"100%"}
          />
          <Field
            name="picture"
            component={renderDropZone}
            label="Picture"
            image={image}
          />
        </FormBody>
        <FormFooter container justify="flex-end">
          <Grid item sm={12}>
            <ActionButtonGroup
              className={classes.btnGroup}
              primaryProps={SubmitProps}
              secondaryProps={CancelProps}
            />
          </Grid>
        </FormFooter>
      </FormWrapper>
    );
  }
}

ReportForm.defaultProps = {
  classes: {},
  handleSubmit() {
    console.log("submit");
  },
  candidate: null
};

export default reduxForm({ form: "report", validate })(withRouter(ReportForm));
