import React from "react";
import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";
import { grey, indigo } from "material-ui/colors";
import styled from "styled-components";
import Typography from "material-ui/Typography";
import {Title} from './Text';

const StyledNavLink = styled(NavLink)`
  && {
    display: ${props => props.display};
    height: ${props => props.display !== "inline" && "100%"};
    text-decoration: none;
    cursor: ${props => (props.disabled ? "not-allowed" : "pointer")};
    color: ${props =>
      props.block
        ? props.theme.palette.primary.contrastText
        : props.theme.palette.primary.main};
    padding: ${props =>
      props.display !== "inline" && (props.padding || "0.2rem 0.5rem")};
    font-size: ${props =>
      props.textSize
        ? props.theme.textSize[props.textSize]
        : props.theme.textSize.medium};
    &:hover {
      background-color: ${props =>
        props.display !== "inline" && props.theme.palette.primary.dark};
      text-decoration: ${props => (props.underline ? "underline" : "none")};
    }
    transition: 0.2s all ease-in-out;
  }
  &.active {
    font-weight: bold;
    color: ${props => props.theme.palette[props.type][props.trait]};
  }
`;

StyledNavLink.propTypes = {
  to: PropTypes.string.isRequired,
  textSize: PropTypes.string
};

StyledNavLink.defaultProps = {
  display: "inline",
  textSize: "sm",
  type: "primary",
  trait: "light"
};

const CustomizedNavLink = ({ children, to, display, textSize }) => (
  <StyledNavLink to={to} display={display} textSize={textSize}>
    <Title invariant="body">{children}</Title>
  </StyledNavLink>
);

export default CustomizedNavLink;
