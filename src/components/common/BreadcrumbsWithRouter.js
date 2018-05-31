import React from "react";
import styled from "styled-components";
import {Route, withRouter} from "react-router-dom";
import {BreadcrumbsItem} from "./Breadcrumbs";

/* eslint react/prop-types: 0 */
const BreadcrumbsWrapper = styled.div`
  padding-top: 1rem;
  padding-left: 2rem;
`;

function renderBreadcrumbItems(paths) {
  return paths.map((p, index) => {
    if (index < paths.length - 1) {
      return (
        <Route
          path={p}
          key={p}
          render={props => <BreadcrumbsItem {...props} hasSeparator={true} />}
        />
      );
    } else {
      return <Route key={p} path={p} component={BreadcrumbsItem} />;
    }
  });
}

const BreadcrumbsWithRouter = ({ location }) => {
  const paths = [];
  location.pathname.split("/").reduce((prev, curr, index) => {
    paths[index] = `${prev}/${curr}`;
    return paths[index];
  });
  if (paths[1] !== "/") paths[0] = "/";
  const breadcrumbsItems = renderBreadcrumbItems(paths);
  return <BreadcrumbsWrapper>{breadcrumbsItems}</BreadcrumbsWrapper>;
};

export default withRouter(BreadcrumbsWithRouter);
