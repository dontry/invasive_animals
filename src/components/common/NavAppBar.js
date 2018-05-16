import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { Link } from "react-router-dom";

import AppBar from "material-ui/AppBar";
import Button from "material-ui/Button";
import Toolbar from "material-ui/Toolbar";
import Typography from "material-ui/Typography";
import Hidden from "material-ui/Hidden";
import Icon from "material-ui/Icon";
import IconButton from "material-ui/IconButton";

import NavLink from "./NavLink";
import { Manager, Target } from "react-popper";
import DropdownMenu from "./DropdownMenu";
import { NAV_BAR } from "../../routes/routing";
import { LogoIcon } from "./Icons";
import Drawer from "./Drawer";

const AppBarWrapper = styled.div`
  flex-grow: 1;
`;

const StyledAppBar = styled(AppBar)`
  && {
    position: relative;
    z-index: 100;
    background-color: ${props => props.theme.palette.primary.main};
  }
`;

const NavMenu = styled.div`
  flex: 5;
  flex-grow: 1;
  text-align: right;
`;

export const NavItem = styled(NavLink)`
  && {
    margin-right: 20;
  }
`;

const NavButton = NavItem.withComponent(Button);

class DropdownNavMenu extends Component {
  state = {
    open: false
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  handleToggle = () => {
    this.setState({ open: !this.state.open });
  };

  renderMenuItems = items => {
    return items.map(item => (
      <NavItem display="block" key={item.path} to={item.path}>
        {item.name}
      </NavItem>
    ));
  };

  render() {
    const { navItem } = this.props;
    const { open } = this.state;
    return (
      <div style={{ position: "relative", display: "inline-block" }}>
        <Manager>
          <Target>
            <div
              ref={node => {
                this.target = node;
              }}
            >
              <NavButton
                aria-owns={open ? "menu-list-collapse" : null}
                aria-haspopup="true"
                onClick={this.handleToggle}
                style={{ color: "#fff" }}
              >
                {navItem.name}
              </NavButton>
            </div>
          </Target>
          <DropdownMenu
            placement="bottom"
            open={open}
            handleClose={this.handleClose}
            menuId="nav-list-collapse"
            menuItems={navItem.children}
            // ref={ref.bind(this)}
          />
        </Manager>
      </div>
    );
  }
}

class NavAppBar extends Component {
  state = {
    drawerOpen: false
  };

  renderMenuItems = items => {
    return items.map(item => {
      if (item.path) {
        return (
          <NavItem display="inline-block" key={item.path} to={item.path}>
            {item.name}
          </NavItem>
        );
      } else {
        return <DropdownNavMenu key={item.name} navItem={item} />;
      }
    });
  };

  toggleDrawer = open => () => {
    console.log(open);
    this.setState({ drawerOpen: open });
  };

  render() {
    const { title, menuItems } = this.props;
    const { drawerOpen } = this.state;
    return (
      <Fragment>
        <AppBarWrapper>
          <StyledAppBar position="static">
            <Toolbar>
              <Hidden smUp>
                <IconButton
                  color="inherit"
                  aria-label="open drawer"
                  onClick={this.toggleDrawer(true)}
                >
                  <Icon style={{ color: "#fff" }}>menu</Icon>
                </IconButton>
              </Hidden>
              <Typography variant="title">{title}</Typography>
              <Hidden xsDown>
                <NavMenu>{this.renderMenuItems(menuItems)}</NavMenu>
              </Hidden>
            </Toolbar>
          </StyledAppBar>
        </AppBarWrapper>
        <Drawer
          anchor="left"
          open={drawerOpen}
          handleClose={this.toggleDrawer(false)}
          menuItems={menuItems}
        />
      </Fragment>
    );
  }
}

NavAppBar.propTypes = {
  menuItems: PropTypes.array.isRequired,
  title: PropTypes.object
};

NavAppBar.defaultProps = {
  title: (
    <Link to="/">
      <LogoIcon size={"40px"} />
    </Link>
  ),
  menuItems: NAV_BAR
};

export default NavAppBar;
