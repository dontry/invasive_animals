import React, { Component } from "react";
import PropTypes from "prop-types";
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

const styles = {
  textField: {
    display: "block",
    marginTop: "1rem"
  },
  dropzone: {
    width: "50vw",
    minWidth: 376,
    marginTop: "1rem"
  },
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

const renderTextField = ({
  input,
  label,
  meta: { touched, error },
  ...custom
}) => {
  return (
    <TextField
      label={label}
      InputLabelProps={{ shrink: true }}
      error={touched && !!error}
      helperText={error}
      {...input}
      {...custom}
    />
  );
};

const renderDateField = ({
  input,
  label,
  meta: { touched, error },
  ...custom
}) => (
  <TextField
    label={label}
    type="date"
    InputLabelProps={{ shrink: true }}
    error={touched && !!error}
    helperText={error}
    {...input}
    {...custom}
  />
);

const renderDropZone = ({ name, label, image, className, ...custom }) => (
  <div className={className}>
    <InputLabel style={{ fontSize: "0.75rem" }} shrink={true}>
      {label}
    </InputLabel>
    <DropImageZone image={image} />
  </div>
);

class ReportForm extends Component {
  static contextTypes = {
    router: PropTypes.object // replace with PropTypes.object if you use them
  };

  handleChangeSpeciesField(event) {
    this.setState({ species: event.target.value });
  }

  submit = () => {
    console.log("submit");
  }

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
      type: "submit"
    };
    const CancelProps = {
      className: classes.Cancel,
      label: "Cancel",
      primary: false,
      action: this.cancel.bind(this),
      disabled: false,
      raise: false
    };

    return (
      <form onSubmit={handleSubmit(this.submit)} noValidate autoComplete="off">
        <Field
          name="username"
          component={renderTextField}
          label="Your name"
          className={classes.textField}
        />
        <Field
          name="email"
          component={renderTextField}
          label="Email"
          type="email"
          className={classes.textField}
        />
        <Field
          name="species"
          component={renderTextField}
          label="Species"
          className={classes.textField}
        />
        <Field
          name="picture"
          component={renderDropZone}
          label="Picture"
          image={image}
          className={classes.dropzone}
        />
        <Field
          name="date"
          component={renderDateField}
          label="Date"
          className={classes.textField}
        />
        <Field
          name="description"
          label="Description"
          component={renderTextField}
          className={classes.textField}
          fullWidth
          multiline={true}
          rows={5}
        />
        <Grid container justify="flex-end">
          <Grid item sm={4}>
            <ActionButtonGroup
              className={classes.btnGroup}
              primaryProps={SubmitProps}
              secondaryProps={CancelProps}
            />
          </Grid>
        </Grid>
      </form>
    );
  }
}

ReportForm.defaultProps = {
  classes: {},
  candidate: null
};

let EnhancedReportForm = withStyles(styles)(ReportForm);
EnhancedReportForm = withRouter(EnhancedReportForm);

export default reduxForm({ form: "report", validate })(EnhancedReportForm);
