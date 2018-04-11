import styled from "styled-components";

export const Mask = styled.div`
  position: relative;
  &:after {
    position: absolute;
    content: "";
    z-index: 10;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: rgba(0, 0, 0, ${props => props.opacity || 0.2});
  }
`;


export const ScreenMask = Mask.extend`
  &:after {
    position: fixed;
    content: "";
  }
`;
