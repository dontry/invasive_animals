import React from "react";
import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";
import { grey, indigo } from "material-ui/colors";
import styled from "styled-components";
import Typography from "material-ui/Typography";
import { Title } from "./Text";

const StyledNavLink = styled(NavLink)`
  && {
    display: ${props => props.display};
    height: ${props => props.display !== "inline" && "100%"};
    text-decoration: none;
    cursor: ${props => (props.disabled ? "not-allowed" : "pointer")};
    padding: ${props =>
      props.display !== "inline" && (props.padding || "0.5rem 0.8rem")};
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

const StyledLinkText = styled(Typography)`
  && {
    display: ${props => props.display};
    color: ${props =>
      props.display !== "inline"
        ? props.theme.palette.primary.contrastText
        : (props.txtColor || props.theme.palette.primary.main)};
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
    <StyledLinkText invariant="caption" display={display}>
      {children}
    </StyledLinkText>
  </StyledNavLink>
);

export default CustomizedNavLink;
