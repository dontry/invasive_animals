import React, { Fragment } from "react";
import styled from "styled-components";
import NavAppBar from "../components/common/NavAppBar";
import PageContainer from "../components/common/PageContainer";
import { Title  } from "../components/common/Text";

const ErrorMessageWrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const ComingSoon = () => {
  return (
    <Fragment>
      <NavAppBar />
      <PageContainer height="80vh">
        <ErrorMessageWrapper>
            <Title variant="display3" txtColor="#777">Coming Soon...</Title>
        </ErrorMessageWrapper>
      </PageContainer>
    </Fragment>
  );
};

export default ComingSoon;
