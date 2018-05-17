export const validate = values => {
  const errors = {};
  if (!values.username) {
    errors.username = "Required";
  }

  if (!values.from) {
    errors.from = "Required";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.from)) {
    errors.from = "Invalid email address";
  }

  if (!values.to) {
    errors.to = "Required";
  }

  if(!values.recaptcha) {
    errors.recaptcha = "Verification required";
  }

  if (Number(values.amount) <= 0) {
    errors.amount = "The amount value should be greater than 0";
  }

  if (!values.location) {
    errors.location = "Required";
  }

  if (!values.date) {
    errors.date = "Required";
  }

  return errors;
};
