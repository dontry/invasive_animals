import React, { Component } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { Redirect, withRouter } from "react-router-dom";
import { Field, reduxForm } from "redux-form";
//Material UI
import { InputLabel } from "material-ui/Input";
import TextField from "material-ui/TextField";
import Grid from "material-ui/Grid";
import { grey } from "material-ui/colors";
import Dialog, {
  DialogActions,
  DialogContent
} from "material-ui/Dialog";

//Components
import DropImageZone from "../Detect/DropImageZone";
import ActionButtonGroup, { StyledButton } from "../common/ActionButtonGroup";
import { Mask } from "../common/Mask";
import { Title, Paragraph } from "../common/Text";
import LoadingSpinner from "../common/LoadingSpinner";
//Utils
import { validate } from "../../utils/formValidation";
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

const Wrapper = styled.div`
  position: relative;
  width: 100%;
`;

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
      style={{ maxWidth: 200 }}
      {...input}
      {...custom}
    />
  </FieldWrapper>
);

const DialogBody = styled.div`
  padding: 1rem 1.5rem;
`;
const ConfirmationDialog = ({ handleClose, title, message, ...rest }) => {
  return (
    <Dialog
      disableBackdropClick
      disableEscapeKeyDown
      maxWidth="xs"
      aria-lablledby={title}
      {...rest}
    >
      <DialogContent>
        <Paragraph variant="body1" txtColor={grey[700]}>
          {message}
        </Paragraph>
      </DialogContent>
      <DialogActions>
        <StyledButton
          onClick={handleClose}
          type="message"
          trait="main"
          variant="flat"
        >
          Confirm
        </StyledButton>
      </DialogActions>
    </Dialog>
  );
};

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

  state = {
    dialogOpen: false,
    complete: false
  };

  componentWillUnmount() {
    this.props.reset();
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.submitSucceeded === true) this.setState({ dialogOpen: true });
  }

  handleChangeSpeciesField = event => {
    this.setState({ species: event.target.value });
  };

  handleDialogOpen = () => {
    this.setState({ dialogOpen: true });
  };

  handleDialogClose = () => {
    this.setState({ dialogOpen: false, complete: true });
  };

  handleSubmit = () => {
    console.log("submit");
    this.handleDialogOpen();
  };

  handleCancel = () => {
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

    const { dialogOpen, complete } = this.state;

    if (complete === true) {
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
      action: this.handleCancel.bind(this),
      disabled: false,
      raise: false,
      type: "secondary"
    };

    return (
      <Wrapper>
        {submitting && (
          <Mask>
            <LoadingSpinner />
          </Mask>
        )}
        <FormWrapper
          onSubmit={handleSubmit(this.handleSubmit)}
          noValidate
          autoComplete="off"
        >
          <FormBody container direction="row" justify="flex-start">
            <Field
              required
              component={renderTextField}
              name="username"
              label="Your name"
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
              name="location"
              label="Location"
            />
            <Field
              required
              component={renderDateField}
              name="date"
              label="Date"
            />
            <Field
              component={renderTextField}
              name="species"
              label="Species Name"
              placeholder="Unknown"
            />
            <Field
              component={renderTextField}
              name="amount"
              label="Amount of sighting"
              type="number"
            />
            <Field
              name="description"
              label="Description"
              component={renderTextField}
              fullwidth={true}
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
        <ConfirmationDialog
          open={dialogOpen}
          handleClose={this.handleDialogClose}
          message="Your report form has been submitted"
        />
      </Wrapper>
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
