import React, { Fragment } from "react";

import { lime, grey } from "material-ui/colors";
import Paper from "material-ui/Paper";

import { Title } from "../components/common/Text";
import NavAppBar from "../components/common/NavAppBar";
import BreadcrumbsWithRouter from "../components/common/BreadcrumbsWithRouter";
import PageContainer from "../components/common/PageContainer";

import Instruction from "../components/Report/Instruction";
import ReportFormContainer from "../containers/ReportFormContainer";

const style = {
  padding: "1rem 2rem"
};

const Report = () => {
  return (
    <Fragment>
      <NavAppBar />
      <BreadcrumbsWithRouter />
      <PageContainer style={style}>
        <Title variant="display1" txtColor={grey[700]} align="left">
          Report invasive species
        </Title>
        <Instruction />
        <Title variant="title" txtColor={grey[700]} align="left">
          Submit a form
        </Title>
        <br />
        <Paper style={{ padding: "2rem", marginBottom: "3rem" }}>
          <ReportFormContainer />
        </Paper>
      </PageContainer>
    </Fragment>
  );
};

export default Report;
