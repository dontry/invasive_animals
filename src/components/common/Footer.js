import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import {Link} from "react-router-dom";
import Grid from "material-ui/Grid";
import {grey} from "material-ui/colors";
import {Title} from "./Text";
import {SITE_MAP} from "../../routes/routing"

const FooterWrapper = styled.div`
  position: relative;
  width: 100%;
  margin: 0 !important;
  bottom: 0;
`;
const ContentWrapper = styled(Grid)`
  && {
    box-sizing: content-box;
    position: relative;
    text-align: center;
    color: ${grey[600]};
    padding-top: 1rem;
    padding-bottom: 1.5rem;
    background-color: ${grey[800]};
  }
`;

const CopyrightWrapper = ContentWrapper.extend`
  && {
    height: 80px;
    width: 100%;
    /* fixed footer margin overflow issue */
    margin-left: 0 !important; 
    margin-right: 0 !important;
  }
`;

function renderFooterMenuList(menu) {
  return menu.map((list, index) => {
    const listItems = renderMenuItems(list.children);
    return (
      <Grid item xs={3} md={2} key={index}>
        <Title variant="subheading" color={grey[300]} padding={"0 0 0.5rem 0"}>
          {list.name}
        </Title>
        {listItems}
      </Grid>
    );
  });
}

function renderMenuItems(items) {
  return items.map((item, index) => (
    <Link to={item.path} key={index}>
      <Title variant="caption" color={grey[500]}>
        {item.name}
      </Title>
    </Link>
  ));
}

export const Copyright = () => (
  <CopyrightWrapper container direction="column">
    <Grid item>
      <Title text_color={grey[500]}>© 2018 Victoria Guardian</Title>
      <Title text_color={grey[500]}>Powered by G4</Title>
    </Grid>
  </CopyrightWrapper>
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
