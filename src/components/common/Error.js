import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { red, grey } from "material-ui/colors";

const ErrorMessage = styled.h3`
  text-align: center;
  color: ${props => props.color || props.theme.error || red[500]};
  font-weight: bold;
`;

const ErrorLink = styled.h4`
  text-align: center;
  color: ${grey[700]}
`;

const Error = ({ errorCode = "404" }) => {
  return (
    <div>
      <ErrorMessage>Oops, Error {errorCode}</ErrorMessage>
      <ErrorLink>
        Please go back to <Link to="/">Homepage</Link>
      </ErrorLink>
    </div>
  );
};

export default Error;
