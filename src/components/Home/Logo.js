import React from "react";
import styled from "styled-components";
import {Title} from "../common/Text";
import Grid from "material-ui/Grid";
import {LogoIcon} from "../common/Icons";
import {green} from "material-ui/colors";

const Wrapper = styled(Grid)`
  && {
    width: 100%;
    line-height: 2rem;
    background-color: ${props => props.theme.palette.primary.light};
    text-align: center;
    margin: 0;
    height: ${props => props.height || "70px"};
  }
`;

const Logo = () => (
  <Wrapper container justify="center" alignItems="center">
    <Grid item>
      <LogoIcon size="64px" />
    </Grid>
    <Grid item>
      <Title variant="title" txtColor={green[900]}>
        Victorian Guardian
      </Title>
    </Grid>
  </Wrapper>
);

export default Logo;
