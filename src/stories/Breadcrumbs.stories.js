import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { BreadcrumbsItem, Breadcrumbs } from "../components/common/Breadcrumbs";

storiesOf("Breadcrumbs", module).add("Breadcrumbs", () => (
  <Breadcrumbs>
    <BreadcrumbsItem href="/" text="Home" />
    <BreadcrumbsItem href="/getinvolved" text="Get involved" />
    <BreadcrumbsItem href="/getinvolved/detect" text="detect" />
  </Breadcrumbs>
));
