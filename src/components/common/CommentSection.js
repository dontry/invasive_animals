import React, { Fragment } from "react";
import FacebookProvider, { Comments } from "react-facebook";
import { grey } from "material-ui/colors";
import { Title } from "../common/Text";

export default () => (
  <Fragment>
    <Title variant="title" text_color={grey[700]} align="left" />
    <FacebookProvider appId="439671156486299">
      <Comments />
    </FacebookProvider>
  </Fragment>
);
