export const validate = values => {
  const errors = {};
  if (!values.username) {
    errors.username = "Required";
  }

  if (!values.email) {
    errors.email = "Required";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = "Invalid email address";
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

  if (!values.description) {
    errors.description = "Required";
  }
  return errors;
};
