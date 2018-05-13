import React from "react";
import styled from "styled-components";
//Material UI
import Grid from "material-ui/Grid";
import MuiTextField from "material-ui/TextField";
import { InputLabel } from "material-ui/Input";
import { FormControl, FormHelperText } from "material-ui/Form";
import MuiSelect from "material-ui/Select";

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

const StyledFormControl = styled(FormControl)`
  && {
    width: 100%;
  }
`;

const StyledTextField = styled(MuiTextField)`
  && {
    width: ${props => props.width || "100%"};
  }
`;

export const TextField = ({
  input,
  label,
  meta: { touched, error },
  xs = 12,
  sm = 6,
  ...custom
}) => {
  return (
    <FieldWrapper item xs={xs} sm={sm}>
      <StyledFormControl>
        <StyledTextField
          label={label}
          InputLabelProps={{ shrink: true }}
          error={touched && !!error}
          helperText={touched && error}
          {...input}
          {...custom}
        />
      </StyledFormControl>
    </FieldWrapper>
  );
};

export const DateField = ({
  input,
  label,
  meta: { touched, error },
  ...custom
}) => (
  <FieldWrapper item>
    <StyledFormControl>
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
    </StyledFormControl>
  </FieldWrapper>
);

export const Select = ({
  id,
  name,
  label,
  input,
  meta: { touched, error },
  defaultValue,
  onChange,
  options,
  xs = 12,
  sm = 6,
  ...custom
}) => {
  if (onChange) {
    input = { ...input, onChange };
  }
  return (
    <FieldWrapper item xs={xs} sm={sm}>
      <StyledFormControl error={touched && !!error}>
        <InputLabel htmlFor={id || `id-${name}`}>{label}</InputLabel>
        <MuiSelect
          native
          defaultValue={defaultValue}
          {...input}
          inputProps={{ id: id || `id-${name}` }}
          {...custom}
        >
          {options.map(option => (
            <option key={option.value} value={option.value}>
              {option.name || option.value}
            </option>
          ))}
        </MuiSelect>
        <FormHelperText>{error}</FormHelperText>
      </StyledFormControl>
    </FieldWrapper>
  );
};
