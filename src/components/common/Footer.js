import React from "react";
import styled from "styled-components";
import { Title } from "./Text";
import { Link } from "react-router-dom";
import Grid from "material-ui/Grid";
import { grey } from "material-ui/colors";

const Footer = () => {};

const FooterWrapper = styled(Grid)`
  position: absolute;
  bottom: 0;
  width: 100vw;
  text-align: center;
  color: ${grey[600]};
  padding-top: 1rem;
  padding-bottom: 1.5rem;
  background-color: ${grey[800]};
`;

export const FooterCopyright = () => (
  <FooterWrapper container direction="column">
    <Grid item>
      <Title>© 2018 OzInvasiveAnimal</Title>
      <Title>Powered by G4</Title>
    </Grid>
  </FooterWrapper>
);
