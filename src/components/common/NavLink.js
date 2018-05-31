import React from "react";
import PropTypes from "prop-types";
import {NavLink} from "react-router-dom";
import styled from "styled-components";
import Typography from "material-ui/Typography";

/* eslint react/prop-types: 0 */
const StyledNavLink = styled(NavLink)`
  && {
    display: ${props => props.display};
    height: ${props => props.display !== "inline" && "100%"};
    text-decoration: none;
    cursor: ${props => (props.disabled ? "not-allowed" : "pointer")};
    padding: ${props =>
      props.display !== "inline" && (props.padding || "0.5rem 0.8rem")};
    font-size: ${props =>
      props.text_size
        ? props.theme.text_size[props.text_size]
        : props.theme.text_size.medium};
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
        : (props.text_color || props.theme.palette.primary.main)};
  }
`;

StyledNavLink.propTypes = {
  to: PropTypes.string.isRequired,
  text_size: PropTypes.string
};

StyledNavLink.defaultProps = {
  display: "inline",
  text_size: "sm",
  type: "primary",
  trait: "light"
};

const CustomNavLink = ({ children, to, display, text_size, ...rest }) => (
  <StyledNavLink to={to} display={display} text_size={text_size} {...rest}>
    <StyledLinkText invariant="caption" display={display}>
      {children}
    </StyledLinkText>
  </StyledNavLink>
);

CustomNavLink.propTypes = {
  to: PropTypes.string.isRequired,
  display: PropTypes.string,
  text_size: PropTypes.string
}

export default CustomNavLink;
