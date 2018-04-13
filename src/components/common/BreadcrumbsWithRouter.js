import React, { Component } from "react";
import { Route, withRouter } from "react-router-dom";
import { Breadcrumbs, BreadcrumbsItem, Separator } from "./Breadcrumbs";

function renderBreadcrumbItems(paths) {
  return paths.map((p, index) => {
    if (index < paths.length - 1) {
      return (
        <span>
          <Route key={p} path={p} component={BreadcrumbsItem} />
          <Separator>/</Separator>
        </span>
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
  if(paths[1] !== "/") paths[0] = "/";
  const breadcrumbsItems = renderBreadcrumbItems(paths);
  return <Breadcrumbs>{breadcrumbsItems}</Breadcrumbs>;
};

export default withRouter(BreadcrumbsWithRouter);
