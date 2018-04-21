import React from "react";
import PropTypes from "prop-types";
import ReactLoading from "react-loading";
import { ScreenMask } from "./Mask";
import styled from "styled-components";

const Wrapper = styled.div`
  position: absolute;
  z-index: 100;
  text-align: center;
  top: 50%;
  left: 50%;
  transform: translate(-80%, -50%);
`;

const Loading = ({ type = "spin", color = "#222" }) => (
  <Wrapper>
    <ReactLoading delay={200} type={type} color={color} />
  </Wrapper>
);

Loading.propTypes = {
  type: PropTypes.string,
  color: PropTypes.string
};
export default Loading;
