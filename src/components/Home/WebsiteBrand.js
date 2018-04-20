import React from "react";
import styled from "styled-components";
import { Title } from "../common/Text";
import { BrandIcon } from "../common/Icons";
import Grid from "material-ui/Grid";

const Wrapper = styled(Grid)`
  && {
    width: 100vw;
    padding: 10px;
    line-height: 1.5rem;
    background-color: ${props => props.theme.palette.primary.dark};
    text-align: center;
  }
`;

const WebsiteBrand = () => (
  <Wrapper container justify="center" alignItems="center">
    <Grid item>
      <BrandIcon />
    </Grid>
    <Grid item>
      <Title variant="title">VicInvasiveStopper</Title>
    </Grid>
  </Wrapper>
);

export default WebsiteBrand;
