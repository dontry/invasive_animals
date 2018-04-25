import React, { Component } from "react";
import styled from "styled-components";
//Material UI
import Grid from "material-ui/Grid";
import TextField from "material-ui/TextField";

export const FieldWrapper = styled(Grid)`
  && {
    width: ${props => props.width || "50%"};
    margin-top: 1rem;
    padding: 1rem;
    @media screen and (max-width: 599px) {
      width: 100%;
    }
  }
`;

const StyledTextField = styled(TextField)`
  && {
    width: ${props => props.width || "100%"};
  }
`;

export const renderTextField = ({
  input,
  label,
  meta: { touched, error },
  xs = 12,
  sm = 6,
  ...custom
}) => {
  return (
    <FieldWrapper item xs={xs} sm={sm}>
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

export const renderDateField = ({
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
