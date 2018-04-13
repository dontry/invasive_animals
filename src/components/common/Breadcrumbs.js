import React, { Children } from "react";
import PropTypes from "prop-types";
import { grey } from "material-ui/colors";
import styled from "styled-components";
import { Link } from "react-router-dom";
import NavigationLink from "./NavLink";
import Icon from "material-ui/Icon";
import { findRouteName } from "../../utils/routing";

export const Separator = styled.span`
  display: inline-block;
  color: ${props => props.color || grey[400]};
  text-align: center;
  flex-shrink: 0;
  padding: ${props => props.padding || "0.5rem"};
`;

Separator.displayName = "Separator";

export const BreadcrumbsItem = ({match,  hasSeparator = false }) => {
  let routeName = findRouteName(match.url);
  let content = null;
  if (routeName) {
    routeName = routeName !== "HOME" ? routeName : <Icon style={{ verticalAlign: "-0.2rem" }}>home</Icon> 
    return (
      <span>
        <NavigationLink textSize="small" to={match.url || ''}>{routeName}</NavigationLink>
        {hasSeparator && <Separator>/</Separator>}
      </span>
    );
  }
};

BreadcrumbsItem.propTypes = {
  hasSeparator: PropTypes.bool
};

//Atlakit breadcrumb
const { toArray } = Children;

export const Breadcrumbs = ({ children }) => {
  const allNonEmptyItems = toArray(children);
  return allNonEmptyItems.map((child, index) =>
    React.cloneElement(child, {
      hasSeparator: index < children.length - 1
    })
  );
};
