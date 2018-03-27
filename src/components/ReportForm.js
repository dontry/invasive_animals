import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "material-ui/styles";
import TextField from "material-ui/TextField";
import { Field, reduxForm } from "redux-form";

const styles = {
  textField: {
    display: "block",
    marginTop: '1rem'
  }
};

const renderTextField = ({ name, label, ...custom }) => (
  <TextField
    id={name}
    label={label}
    InputLabelProps={{ shrink: true }}
    {...custom}
  />
);

const renderDateField = ({ name, label, ...custom }) => (
  <TextField
    id="date"
    label="Date"
    type="date"
    defaultValue="2017-03-03"
    InputLabelProps={{ shrink: true }}
    {...custom}
  />
);

const ReportForm = ({ handleSubmit, classes }) => {
  return (
    <form onSubmit={handleSubmit} noValidate autoComplete="off">
      <Field
        name="name"
        component={renderTextField}
        label="Name"
        className={classes.textField}
      />
      <Field
        name="species"
        component={renderTextField}
        label="Species"
        className={classes.textField}
      />
      <Field
        name="date"
        component={renderDateField}
        label="Date"
        className={classes.textField}
      />
      {/* <TextField
        id="species"
        label="Species"
        className={classes.textField}
        InputLabelProps={{ shrink: true }}
      /> */}
      <Field
        id="description"
        label="Description"
        component={renderTextField}
        className={classes.textField}
        fullWidth
      />
    </form>
  );
};

const EnhancedReportForm = withStyles(styles)(ReportForm);

export default reduxForm({ form: "report" })(EnhancedReportForm);
