import React, { Fragment } from "react";
import NavAppBar from "../components/common/NavAppBar";
import UploadImageModule from "../components/Detect/UploadImageModule";
import UploadImageContainer from "../containers/UploadImageContainer";
import DetectionResultContainer from "../containers/DetectionResultContainer";
import Divider from "material-ui/Divider";
import ResultModule from "../components/ResultModule";
import PageContainer from "../components/common/PageContainer";

const Participate = () => {
  return (
    <Fragment>
      <PageContainer>
        <UploadImageContainer className="module" />
        <DetectionResultContainer className="module" />
      </PageContainer>
    </Fragment>
  );
};

export default Participate;
