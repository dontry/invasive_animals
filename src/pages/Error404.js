import React, { Fragment } from "react";
import styled from "styled-components";
import Error from "../components/common/Error";
import NavAppBar from "../components/common/NavAppBar";
import PageContainer from "../components/common/PageContainer";

const ErrorMessageWrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const Error404 = () => {
  return (
    <Fragment>
      <NavAppBar />
      <PageContainer height="80vh">
        <ErrorMessageWrapper>
          <Error errorCode="404" />
        </ErrorMessageWrapper>
      </PageContainer>
    </Fragment>
  );
};

export default Error404;
