import React, { Fragment } from "react";
import NavAppBar from "../components/NavAppBar";
import UploadImageModule from "../components/UploadImageModule";
import Divider from "material-ui/Divider";
import ResultModule from "../components/ResultModule";
import PageContainer from "../components/PageContainer";

const Participate = () => {
  return (
    <Fragment>
      <NavAppBar title="Get Involved" />
      <PageContainer>
        <UploadImageModule className="module" />
        <ResultModule className="module" />
      </PageContainer>
    </Fragment>
  );
};

export default Participate;
