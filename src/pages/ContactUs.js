import React, { Fragment } from "react";
import PageContainer from "../components/PageContainer";

const style = {
  lineHeight: "1.5em"
}

export default () => (
  <Fragment>
    <PageContainer>
      <h2>Contact Us</h2>
      <ul style={style}>
        <li>Dong Cai: <a href="mailto:dcai16@student.monash.edu">dcai16@student.monash.edu</a></li>
        <li>Ninad Mirajkar: <a href="mailto:nir0001@student.monash.edu">nir0001@student.monash.edu</a></li>
        <li>Tram Ngo: <a href="mailto:pngo0001@student.monash.edu">pngo0001@student.monash.edu</a></li>
        <li>Patrick Mo: <a href="mailto:ymo22@student.monash.edu">ymo22@student.monash.edu</a></li>
      </ul>
    </PageContainer>
  </Fragment>
);
