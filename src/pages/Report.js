import React, { Fragment } from "react";
import NavAppBar from "../components/common/NavAppBar";
import PageContainer from "../components/common/PageContainer";
import ReportFormContainer from "../containers/ReportFormContainer";
import { Title } from "../components/common/Text";
import { lime } from "material-ui/colors";
import BreadcrumbsWithRouter from "../components/common/BreadcrumbsWithRouter";

const style = {
  padding: "1rem 2rem"
};

const Report = () => {
  return (
    <Fragment>
      <NavAppBar />
      <BreadcrumbsWithRouter />
      <PageContainer style={style}>
        <Title variant="title" txtColor={lime[800]} align="left">
          Report to Goverment
        </Title>
        <ReportFormContainer />
      </PageContainer>
    </Fragment>
  );
};

export default Report;
