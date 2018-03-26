import React, { Fragment } from "react";
import NavAppBar from "../components/NavAppBar";
import UploadImageModule from "../components/UploadImageModule";
import UploadImageContainer from "../containers/UploadImageContainer";
import DetectionResultContainer from "../containers/DetectionResultContainer";
import Divider from "material-ui/Divider";
import ResultModule from "../components/ResultModule";
import PageContainer from "../components/PageContainer";

const Participate = () => {
  return (
    <Fragment>
      <NavAppBar title="Get Involved" />
      <PageContainer>
        <UploadImageContainer className="module" />
        <DetectionResultContainer className="module" />
      </PageContainer>
    </Fragment>
  );
};

export default Participate;
