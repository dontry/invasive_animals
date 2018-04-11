import React, { Children } from "react";
import PropTypes from "prop-types";
import { grey } from "material-ui/colors";
import styled from "styled-components";
import { Link } from "react-router-dom";
import NavigationLink from "./NavLink";

const Separator = styled.span`
    display: inline-block;
    color: ${props => props.color || grey[400]}
    text-align: center;
    flex-shrink: 0;
    padding: ${props => props.padding || '0.5rem'};
`;

Separator.displayName = "Separator";

export const BreadcrumbsItem = ({ href, text, hasSeparator = false }) => {
  return (
    <span>
      <NavigationLink to={href}>{text || href}</NavigationLink>
      {hasSeparator && <Separator>/</Separator>}
    </span>
  );
};

BreadcrumbsItem.propTypes = {
  href: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
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