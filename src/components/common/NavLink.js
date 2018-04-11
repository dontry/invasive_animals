import React from "react";
import { NavLink } from "react-router-dom";
import { grey, indigo } from "material-ui/colors";
import styled from "styled-components";

const activeStyle = (style = {}) => ({
  fontWeight: "bold",
  color: style.color || grey[400]
});

const StyledNavLink = styled(NavLink)`
    &:hover {
        color: ${indigo[700]}
    }
`

export default ({ to, style, children }) => (
  <StyledNavLink to={to} activeStyle={activeStyle(style)}>
    {children}
  </StyledNavLink>
);
