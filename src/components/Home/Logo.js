import React from "react";
import styled from "styled-components";
import {Title} from "../common/Text";
import Grid from "material-ui/Grid";
import {LogoIcon} from "../common/Icons";
import {green} from "material-ui/colors";

const Wrapper = styled(Grid)`
  && {
    width: 100%;
    background-color: #2cad31;
    text-align: center;
    margin: 0;
  }
`;

const Logo = () => (
  <Wrapper container justify="center" alignItems="center">
    <Grid item>
      <LogoIcon size="64px" />
    </Grid>
    <Grid item>
      <Title variant="title" txtColor={green[50]}>
        Victoria Guardian
      </Title>
    </Grid>
  </Wrapper>
);

export default Logo;
