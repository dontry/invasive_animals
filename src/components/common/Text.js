import React, { Component } from "react";
import styled from "styled-components";
import Typography from "material-ui/Typography";

export const Paragraph = styled(Typography)`
  && {
    color: ${props => props.textColor || "#fff"};
    text-align: ${props => props.align || "start"};
  }
`;
export const Title = Paragraph.extend`
  && {
    text-align: ${props => props.align || "center"};
    @media screen and (max-width: 599px) {
      text-align: center;
    }
  }
`;