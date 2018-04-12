import React from "react";
import { NavLink } from "react-router-dom";
import { grey, indigo } from "material-ui/colors";
import styled from "styled-components";

const StyledNavLink = styled(NavLink)`
  && {
    display: ${props => (props.block ? "inline-block" : "inline")};
    height: ${props => props.block && "100%"};
    text-decoration: none;
    cursor: ${props => (props.disabled ? "not-allowed" : "pointer")};
    color: ${props =>
      props.block
        ? props.theme.palette.primary.contrastText
        : props.theme.palette.primary.main};
    padding: ${props => props.block && (props.padding || "0.2rem 0.5rem")};
    font-size: ${props =>
      props.textSize
        ? props.theme.textSize[props.textSize]
        : props.theme.textSize.medium};
    &:hover {
      background-color: ${props =>
        props.block && props.theme.palette.primary.dark};
      text-decoration: ${props => (props.underline ? "underline" : "none")};
    }
    transition: 0.2s all ease-in-out;
  }
  &.active {
    font-weight: bold;
    color: ${props => props.theme.palette.primary.dark};
  }
`;

export default ({ to, activeStyle, children, block = null }) => (
  <StyledNavLink to={to} block={block}>
    {children}
  </StyledNavLink>
);
