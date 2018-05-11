import React, { Fragment } from "react";
import styled from "styled-components";
//Material UI
import { grey } from "material-ui/colors";
import Paper from "material-ui/Paper";
//Components
import { Title } from "../components/common/Text";
import NavAppBar from "../components/common/NavAppBar";
import BreadcrumbsWithRouter from "../components/common/BreadcrumbsWithRouter";
import PageContainer from "../components/common/PageContainer";

import Instruction from "../components/Report/Instruction";
import ReportFormContainer from "../containers/ReportFormContainer";

const Wrapper = styled.div`
  padding: 1rem 2rem;
`;

const Report = () => {
  return (
    <Fragment>
      <NavAppBar />
      <PageContainer >
        <BreadcrumbsWithRouter />
        <Wrapper>
          <Title variant="display1" text_color={grey[700]} align="left">
            Report invasive species
          </Title>
          <Instruction />
          <Paper style={{ padding: "2rem", marginBottom: "3rem" }}>
            <ReportFormContainer />
          </Paper>
        </Wrapper>
      </PageContainer>
    </Fragment>
  );
};

export default Report;
