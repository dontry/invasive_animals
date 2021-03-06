import React, {Fragment} from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Icon from "material-ui/Icon";
import { grey } from "material-ui/colors";
import { StyledButton } from "./ActionButtonGroup";

const ErrorMessage = styled.h1`
  text-align: center;
  color: ${props => props.color || props.theme.error || "#fff"};
  font-weight: bold;
  text-shadow: 3px 3px 2px ${grey[500]};
`;

const ErrorCode = styled.h2`
  text-align: center;
  color: ${props => props.color || props.theme.error || "#fff"};
  font-weight: bold;
  text-shadow: 3px 3px 2px ${grey[500]};
`

const ErrorLink = styled.h3`
  text-align: center;
  color: #fff;
  text-shadow: 2px 2px ${grey[500]};
`;

const Error = ({ errorMessage, errorCode = "404" }) => {
  return (
    <Fragment>
      <ErrorMessage>{errorMessage}</ErrorMessage>
      <ErrorCode>{errorCode}</ErrorCode>
      <ErrorLink>
        <Link to="/">
          <StyledButton type="primary" trait="dark">
            <Icon>home</Icon>&nbsp;&nbsp;Home
          </StyledButton>
        </Link>
      </ErrorLink>
    </Fragment>
  );
};

Error.propTypes = {
  errorMessage: PropTypes.string,
  errorCode: PropTypes.string
}


export default Error;
