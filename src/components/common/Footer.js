import React, { Fragment } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Grid from "material-ui/Grid";
import { grey } from "material-ui/colors";
import Typography from "material-ui/Typography";
import { Title } from "./Text";
import { SITE_MAP } from "../../utils/routing";

const FooterWrapper = styled.div`
  position: relative;
  bottom: 0;
`;
const ContentWrapper = styled(Grid)`
  && {
    position: relative;
    width: 100vw;
    text-align: center;
    color: ${grey[600]};
    padding-top: 1rem;
    padding-bottom: 1.5rem;
    background-color: ${grey[800]};
  }
`;

function renderFooterMenuList(menu) {
  return menu.map(list => {
    const listItems = renderMenuItems(list.children);
    return (
      <Grid item xs={3} md={2}>
        <Title variant="subheading" color={grey[300]} padding={"0 0 0.5rem 0"}>
          {list.name}
        </Title>
        {listItems}
      </Grid>
    );
  });
}

function renderMenuItems(items) {
  return items.map(item => (
    <Link to={item.path}>
      <Title variant="caption" color={grey[500]}>
        {item.name}
      </Title>
    </Link>
  ));
}

export const Copyright = () => (
  <ContentWrapper container direction="column">
    <Grid item>
      <Title txtColor={grey[500]}>© 2018 OzInvasiveSpecies</Title>
      <Title txtColor={grey[500]}>Powered by G4</Title>
    </Grid>
  </ContentWrapper>
);

export const Sitemap = ({ menu }) => {
  const MenuList = renderFooterMenuList(menu);
  return (
    <ContentWrapper container direction="row" justify="center">
      {MenuList}
    </ContentWrapper>
  );
};

const Footer = () => (
  <FooterWrapper>
    {/* <Sitemap /> */}
    <Copyright />
  </FooterWrapper>
);

Sitemap.propTypes = {
  menu: PropTypes.array.isRequired
};

Sitemap.defaultProps = {
  menu: SITE_MAP
};

export default Footer;
