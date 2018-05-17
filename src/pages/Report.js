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

const ReportWrapper = styled(Paper)`
  padding: 2rem;
  margin-bottom: 3rem;
  @media screen and (max-width: 600px) {
    & {
      padding: 0.5rem;
    }
  }
`;
const Report = () => {
  return (
    <Fragment>
      <NavAppBar />
      <PageContainer>
        <BreadcrumbsWithRouter />
        <Wrapper>
          <Title variant="display1" text_color={grey[700]} align="left">
            Report invasive species
          </Title>
          <Instruction />
          <ReportWrapper>
            <ReportFormContainer />
          </ReportWrapper>
        </Wrapper>
      </PageContainer>
    </Fragment>
  );
};

export default Report;
