import styled from "styled-components";

export const Mask = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  &:after {
    position: absolute;
    content: "";
    z-index: 10;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: rgba(255, 255, 255, ${props => props.opacity || 0.5});
  }
`;

export const ScreenMask = Mask.extend`
  position: fixed;
  width: 100vw;
  height: 100vh;
  z-index: 10;
  background: transparent;
  &:after {
    position: fixed;
    content: "";
  }
`;
