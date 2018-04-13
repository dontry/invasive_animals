import React, { Component } from "react";
import { Route, withRouter } from "react-router-dom";
import { BreadcrumbsItem, Separator } from "./Breadcrumbs";

function renderBreadcrumbItems(paths) {
  return paths.map((p, index) => {
    if (index < paths.length - 1) {
      return (
        <Route
          path={p}
          render={props => <BreadcrumbsItem {...props} hasSeparator={true} />}
        />
      );
    } else {
      return <Route key={p} path={p} component={BreadcrumbsItem} />;
    }
  });
}

const BreadcrumbsWithRouter = ({ location, match }) => {
  const paths = [];
  location.pathname.split("/").reduce((prev, curr, index) => {
    paths[index] = `${prev}/${curr}`;
    return paths[index];
  });
  if (paths[1] !== "/") paths[0] = "/";
  const breadcrumbsItems = renderBreadcrumbItems(paths);
  return <div>{breadcrumbsItems}</div>;
};

export default withRouter(BreadcrumbsWithRouter);
