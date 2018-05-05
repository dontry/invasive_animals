import React, { Component, PureComponent } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { Redirect, withRouter } from "react-router-dom";
import { Field, reduxForm } from "redux-form";
//Material UI
import Input, { InputLabel } from "material-ui/Input";
import Grid from "material-ui/Grid";
import { grey } from "material-ui/colors";
//Components
import DropImageZone from "../Detect/DropImageZone";
import ActionButtonGroup, { StyledButton } from "../common/ActionButtonGroup";
import { Mask } from "../common/Mask";
import { Title, Paragraph } from "../common/Text";
import Loader from "../common/Loader";
import ConfirmationDialog from "../common/ConfirmationDialog";
import {
  DateField,
  TextField,
  Select,
  FieldWrapper
} from "../common/FormFields";
import Recaptcha from "../common/Recaptcha";
import Regions from "../../assets/regions";
import DropImageZoneContainer from "../../containers/DropImageZoneContainer";
//Utils
import { validate } from "../../utils/formValidation";
import { encodeImageFromFile } from "../../utils/encodeImage";

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

class UploadImageBlock extends Component {
  uploadImage = async image => {
    if (image) {
      const imageBase64 = await encodeImageFromFile(image);
      this.props.input.onChange(imageBase64);
    }
  };

  render() {
    const {
      name,
      label,
      input,
      meta: { touched, error }
    } = this.props;
    return (
      <FieldWrapper>
        <InputLabel style={{ fontSize: "0.75rem" }} shrink={true}>
          {label}
        </InputLabel>
        <DropzoneWrapper>
          <DropImageZoneContainer uploadImage={this.uploadImage} />
        </DropzoneWrapper>
        {error && <span>{error}</span>}
      </FieldWrapper>
    );
  }
}

const Recipients = [
  {
    name: "",
    value: ""
  },
  {
    name: "monash",
    value: "dcai16@student.monash.edu"
  },
  {
    name: "google",
    value: "mccoy018@gmail.com"
  }
];
export class ReportForm extends Component {
  static contextTypes = {
    router: PropTypes.object // replace with PropTypes.object if you use them
  };

  state = {
    dialogOpen: false,
    complete: false,
    message: "Default"
  };

  componentWillUnmount() {
    this.props.reset();
  }

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

  handleDialogOpen = message => {
    this.setState({ dialogOpen: true, message });
  };

  handleDialogClose = () => {
    this.setState({ dialogOpen: false, complete: true });
  };

  handleSubmit = async values => {
    let email = values;
    if (!email.species) {
      email = { ...email, species: "UNKNOWN" };
    }
    await this.props.sendEmail(email);
  };

  handleCancel = () => {
    this.context.router.history.goBack();
  };

  render() {
    const {
      handleSubmit,
      image,
      email,
      pristine,
      submitting,
      submitSucceeded
    } = this.props;

    const { dialogOpen, complete, message } = this.state;

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
        {(submitting || email.loading) && (
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
              name="from"
              label="Email"
              type="email"
            />
            <Field
              required
              component={Select}
              name="location"
              label="Location *"
              options={[{ name: "", value: "" }, ...Regions]}
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
              required
              component={Select}
              name="to"
              label="Authority email *"
              defaultValue={Recipients[0].value}
              options={Recipients}
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
              component={UploadImageBlock}
              label="Image"
              image={image}
            />
          </FormBody>
          <FormFooter container justify="flex-end">
            <Grid item sm={6}>
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
          message={message}
        />
      </FormWrapper>
    );
  }
}

ReportForm.defaultProps = {
  candidate: null
};

export default reduxForm({ form: "report", validate })(withRouter(ReportForm));
