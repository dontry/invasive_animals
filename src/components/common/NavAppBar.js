import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "material-ui/styles";
import AppBar from "material-ui/AppBar";
import IconButton from "material-ui/IconButton";
import Book from "material-ui-icons/Book";
import { grey50 } from "material-ui/styles/colors";
// import MenuItem from "material-ui/MenuItem";
import Toolbar from "material-ui/Toolbar";
import Typography from "material-ui/Typography";

import NavLink from "./NavLink";
import styled from "styled-components";

const AppBarWrapper = styled.div`
  flex-grow: 1;
  margin-bottom: 2rem;
`;

const StyledAppBar = styled(AppBar)`
  && {
    background-color: ${props => props.theme.palette.primary.main};
  }
`;

const NavMenu = styled.div`
  flex: 5;
  flex-grow: 1;
  text-align: right;
`;

const MenuItem = styled(NavLink)`
  && {
    display: inline-block;
    margin-right: 20;
  }
`;

const NavAppBar = ({ title, menuItems }) => {
  const _renderMenuItem = items => {
    return items.map(item => (
      <MenuItem block key={item.name} to={`/${item.path}`}>
        {item.name}
      </MenuItem>
    ));
  };

  const NavItems = _renderMenuItem(menuItems);
  return (
    <AppBarWrapper>
      <StyledAppBar position="static">
        <Toolbar>
          <Typography variant="title">{title}</Typography>
          <NavMenu>{NavItems}</NavMenu>
        </Toolbar>
      </StyledAppBar>
    </AppBarWrapper>
  );
};

NavAppBar.propTypes = {
  menuItems: PropTypes.array.isRequired,
  title: PropTypes.object
};

NavAppBar.defaultProps = {
  title: "Title",
  menuItems: [
    { name: "Home", path: "" },
    { name: "Get Involved", path: "getinvolved/participate" }
  ]
};

export default NavAppBar;
