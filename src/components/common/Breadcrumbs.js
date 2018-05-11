import React, {Children} from "react";
import PropTypes from "prop-types";
import {grey} from "material-ui/colors";
import styled from "styled-components";
import NavLink from "./NavLink";
import Icon from "material-ui/Icon";
import {findRouteName} from "../../routes/routing";
import {strEqual} from "../../utils/tools";

export const Separator = styled.span`
  display: inline-block;
  color: ${props => props.color || grey[400]};
  text-align: center;
  flex-shrink: 0;
  padding: ${props => props.padding || "0.5rem"};
`;

Separator.displayName = "Separator";

export const BreadcrumbsItem = ({ match, hasSeparator = false }) => {
  let routeName = findRouteName(match.url);
  if (routeName) {
    routeName = strEqual.call(routeName, "Home") ? (
      <Icon style={{ verticalAlign: "-0.2rem" }}>home</Icon>
    ) : (
      routeName
    );
    return (
      <span>
        <NavLink style={{textTransform: "uppercase"}}display="inline" text_size="small" to={match.url || ""}>
          {routeName}
        </NavLink>
        {hasSeparator && <Separator>/</Separator>}
      </span>
    );
  } else {
    return <div />;
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
