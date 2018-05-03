import React, { Component } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { Redirect, withRouter } from "react-router-dom";
import { Field, reduxForm } from "redux-form";
//Material UI
import { InputLabel } from "material-ui/Input";
import Grid from "material-ui/Grid";
import { grey } from "material-ui/colors";
import Dialog, { DialogActions, DialogContent } from "material-ui/Dialog";
//Components
import DropImageZone from "../Detect/DropImageZone";
import ActionButtonGroup, { StyledButton } from "../common/ActionButtonGroup";
import { Mask } from "../common/Mask";
import { Title, Paragraph } from "../common/Text";
import Loader from "../common/Loader";
import { DateField, TextField, FieldWrapper } from "../common/FormFields";
import Recaptcha from "../common/Recaptcha";
//Utils
import { validate } from "../../utils/formValidation";

const FormWrapper = styled.div`
  position: relative;
  width: 100%;
`;

const StyledForm = styled.form`
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

const DropzoneWrapper = styled.div`
  width: 80%;
  min-width: 376px;
  margin-top: 1rem;
`;

const FormButtonGroup = styled(ActionButtonGroup)`
  margin-top: 1rem;
  float: right;
`;

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

const renderDropZone = ({ name, label, image, ...custom }) => (
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
      label: "Submit",
      primary: true,
      action: null,
      disabled: false,
      raised: true,
      type: "primary"
    };
    const CancelProps = {
      label: "Cancel",
      primary: false,
      action: this.handleCancel.bind(this),
      disabled: false,
      raise: false,
      type: "secondary"
    };

    return (
      <FormWrapper>
        {submitting && (
          <Mask>
            <Loader />
          </Mask>
        )}
        <StyledForm
          onSubmit={handleSubmit(this.handleSubmit)}
          noValidate
          autoComplete="off"
        >
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
              name="email"
              label="Email"
              type="email"
            />
            <Field
              required
              component={TextField}
              name="location"
              label="Location"
            />
            <Field
              required
              component={DateField}
              name="date"
              label="Date"
              width="200px"
            />
            <Field
              component={TextField}
              name="species"
              label="Species Name"
              placeholder="Unknown"
            />
            <Field
              component={TextField}
              name="amount"
              label="Amount of sighting"
              type="number"
              width="200px"
            />
            <Field
              name="description"
              label="Description"
              component={TextField}
              multiline={true}
              sm={12}
              rows={5}
            />
            <Field
              name="image"
              component={renderDropZone}
              label="Image"
              image={image}
            />
          </FormBody>
          <FormFooter container justify="flex-end">
            <Grid item sm={6} >
            <Recaptcha />
            </Grid>
            <Grid item sm={12}>
              <FormButtonGroup
                primaryProps={SubmitProps}
                secondaryProps={CancelProps}
              />
            </Grid>
          </FormFooter>
        </StyledForm>
        <ConfirmationDialog
          open={dialogOpen}
          handleClose={this.handleDialogClose}
          message="Your report form has been submitted"
        />
      </FormWrapper>
    );
  }
}

ReportForm.defaultProps = {
  candidate: null
};

export default reduxForm({ form: "report", validate })(withRouter(ReportForm));
