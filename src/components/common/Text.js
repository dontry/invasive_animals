import React, { Component } from "react";
import styled from "styled-components";
import Typography from "material-ui/Typography";

export const Paragraph = styled(Typography)`
  && {
    color: ${props => props.txtColor || "#fff"};
    text-align: ${props => props.align || "start"};
    padding: ${props => props.padding || "none"};
    font-weight: ${props => props.fontWeight};
    white-space: ${props => props.whiteSpace || "pre-line"};
    line-height: ${props => props.lineHeight || "1em"};
    font-size ${props => props.txtsize || "none"};
  }
`;
export const Title = Paragraph.extend`
  && {
    text-align: ${props => props.align || "center"};
  }
`;
