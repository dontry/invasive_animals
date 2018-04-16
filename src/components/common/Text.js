import React, { Component } from "react";
import styled from "styled-components";
import Typography from "material-ui/Typography";

export const Paragraph = styled(Typography)`
  && {
    color: ${props => props.txtColor || "#fff"};
    text-align: ${props => props.align || "start"};
    padding: ${props => props.padding || "none"};
    font-weight: ${props => props.fontWeight};
  }
`;
export const Title = Paragraph.extend`
  && {
    text-align: ${props => props.align || "center"};
  }
`;
