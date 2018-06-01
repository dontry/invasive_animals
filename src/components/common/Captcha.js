import React, {Fragment} from "react";
import PropTypes from "prop-types";
import ReCAPTCHA from "react-google-recaptcha";
import { red } from "material-ui/colors";
import { Paragraph } from "../common/Text";


const Captcha = ({ input, meta: { touched, error } }) => (
  <Fragment>
    <Paragraph text_color={red[500]}>{touched && error}</Paragraph>
    <ReCAPTCHA
      sitekey="6LfMElYUAAAAAH8NaQnWfmsegkiaRjFqZ9Qq9ILi"
      onChange={res => input.onChange(res)}
    />
  </Fragment>
);

Captcha.propTypes = {
  input: PropTypes.object,
  meta: PropTypes.object
}

export default Captcha;