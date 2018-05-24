import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { Redirect, withRouter } from "react-router-dom";
import { Field, reduxForm } from "redux-form";
import ReCAPTCHA from "react-google-recaptcha";
//Material UI
import { InputLabel } from "material-ui/Input";
import Grid from "material-ui/Grid";
import { grey, red } from "material-ui/colors";
import Badge from "material-ui/Badge";
import Tooltip from "material-ui/Tooltip";
//Components
import DropImageZone from "../Detect/DropImageZone";
import ActionButtonGroup from "../common/ActionButtonGroup";
import { Mask } from "../common/Mask";
import { Paragraph } from "../common/Text";
import Loader from "../common/Loader";
import MessageDialog from "../common/ConfirmationDialog";
import {
  DateField,
  TextField,
  Select,
  FieldWrapper
} from "../common/FormFields";
import Regions from "../../assets/regions";
import Lightbox from "react-image-lightbox";
//Utils
import { validate } from "../../utils/formValidation";
import { encodeImageFromFile } from "../../utils/encodeImage";
import VictoriaMap from "../../assets/images/vitoria_map.png";

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
  width: 100%;
  margin-top: 1rem;
`;

const FormButtonGroup = styled(ActionButtonGroup)`
  margin-top: 1rem;
  float: right;
`;

const notlessThan = limit => 
  (value, previousValue, allValues) => value > limit ? value : previousValue

class UploadImageBlock extends Component {
  state = {
    image: null
  };

  componentDidMount() {
    this.setState({ image: this.props.image });
  }

  uploadImage = async image => {
    if (image) {
      const imageBase64 = await encodeImageFromFile(image);
      this.props.input.onChange(imageBase64);
      this.setState({ image });
    }
  };

  render() {
    const {
      label,
      meta: { error }
    } = this.props;
    const { image } = this.state;
    return (
      <FieldWrapper>
        <InputLabel style={{ fontSize: "0.75rem" }} shrink={true}>
          {label}
        </InputLabel>
        <DropzoneWrapper>
          <DropImageZone uploadImage={this.uploadImage} image={image} />
        </DropzoneWrapper>
        {error && <span>{error}</span>}
      </FieldWrapper>
    );
  }
}

const Captcha = ({ input, meta: { touched, error } }) => (
  <Fragment>
    <Paragraph text_color={red[500]}>{touched && error}</Paragraph>
    <ReCAPTCHA
      sitekey="6LfMElYUAAAAAH8NaQnWfmsegkiaRjFqZ9Qq9ILi"
      onChange={res => input.onChange(res)}
      style={{ float: "right" }}
    />
  </Fragment>
);

export class ReportForm extends Component {
  static contextTypes = {
    router: PropTypes.object // replace with PropTypes.object if you use them
  };

  state = {
    dialogOpen: false,
    lightboxOpen: false,
    complete: false,
    dialogMessage: "Default"
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
    this.setState({ dialogOpen: true, dialogMessage: message });
  };

  handleDialogClose = () => {
    this.setState({ dialogOpen: false, complete: true });
  };

  handleSubmit = async values => {
    let { recaptcha, ...email } = values;
    if (!email.species) {
      email = { ...email, species: "UNKNOWN" };
    }
    email = { ...email, to: "vic.invasive@gmail.com" };
    await this.props.sendEmail(email);
  };

  handleCancel = () => {
    this.context.router.history.goBack();
  };

  handleRecaptchaChange = value => {
    this.setState({ recaptchaValue: value });
  };

  handleLightBoxClose = () => {
    this.setState({ lightboxOpen: false });
  };

  handleLightBoxOpen = () => {
    this.setState({ lightboxOpen: true });
  };

  render() {
    const { handleSubmit, image, species, email, submitting } = this.props;

    const { dialogOpen, lightboxOpen, complete, dialogMessage } = this.state;

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
        <Paragraph>Fields marked with * are required.</Paragraph>
        <StyledForm
          onSubmit={handleSubmit(this.handleSubmit)}
          noValidate
          autoComplete="on"
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
              label="Your email address"
              type="email"
            />
            <Field
              required
              component={Select}
              name="location"
              label={
                <Tooltip title="Map of Victoria's regions" placement="top">
                  <Badge
                    color="primary"
                    badgeContent={<span style={{ color: "#fff" }}>?</span>}
                    style={{ paddingRight: 20 }}
                    onClick={this.handleLightBoxOpen}
                  >
                    location
                  </Badge>
                </Tooltip>
              }
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
              placeholder={
                species
                  ? species.candidates
                      .map(species => species.CommonName)
                      .join("/")
                  : "Unknown"
              }
            />
            <Field
              component={TextField}
              name="amount"
              label="Amount of sighting"
              type="number"
              width="200px"
              normalize={notlessThan(0)}
            />
            {/* <Field
              required
              component={Select}
              name="to"
              label="Authority email *"
              defaultValue={Recipients[0].value}
              options={Recipients}
            /> */}
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
              image={image.entity}
            />
          </FormBody>
          <FormFooter container justify="flex-end" spacing={16}>
            <Grid item sm={12}>
              <Field name="recaptcha" component={Captcha} />
            </Grid>
            <Grid item sm={12}>
              <FormButtonGroup
                primaryProps={SubmitProps}
                secondaryProps={CancelProps}
              />
            </Grid>
          </FormFooter>
        </StyledForm>
        <MessageDialog
          open={dialogOpen}
          handleClose={this.handleDialogClose}
          message={dialogMessage}
        />
        {lightboxOpen && (
          <Lightbox
            mainSrc={VictoriaMap}
            onCloseRequest={this.handleLightBoxClose}
            onMovePrevRequest={() => {}}
            onMoveNextRequest={() => {}}
          />
        )}
      </FormWrapper>
    );
  }
}

ReportForm.defaultProps = {
  candidate: null
};

export default reduxForm({ form: "report", validate })(withRouter(ReportForm));
