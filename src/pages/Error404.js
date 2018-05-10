import React, { Fragment } from "react";
import styled from "styled-components";
import Error from "../components/common/Error";
import NavAppBar from "../components/common/NavAppBar";
import PageContainer from "../components/common/PageContainer";
import Background from "../assets/images/404background.jpg";

const ErrorMessageWrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const PageContainerWithBackground = PageContainer.extend`
  background: url(${Background}) no-repeat;
  background-size: cover;
`;

const Error404 = () => {
  return (
    <Fragment>
      <NavAppBar />
      <PageContainerWithBackground height="80vh" maxWidth="100%">
        <ErrorMessageWrapper>
          <Error errorMessage="Is this what you are looking for...?" errorCode="Error 404, page not found" />
        </ErrorMessageWrapper>
      </PageContainerWithBackground>
    </Fragment>
  );
};

export default Error404;
