import React, { Component } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { Link } from "react-router-dom";

import AppBar from "material-ui/AppBar";
import IconButton from "material-ui/IconButton";
import Book from "material-ui-icons/Book";
import { grey50 } from "material-ui/styles/colors";
// import MenuItem from "material-ui/MenuItem";
import Button from "material-ui/Button";
import Toolbar from "material-ui/Toolbar";
import Typography from "material-ui/Typography";

import NavLink from "./NavLink";
import Popover from "material-ui/Popover";
import { Manager, Target, Popper } from "react-popper";
import Portal from "material-ui/Portal";
import Collapse from "material-ui/transitions/Collapse";
import DropdownMenu from "./DropdownMenu";
import Paper from "material-ui/Paper";
import ClickAwayListener from "material-ui/utils/ClickAwayListener";
import Menu, { MenuItem, MenuList } from "material-ui/Menu";
import { BrandIcon } from "./Icons";
import {NAV_BAR} from "../../routes/routing";


const AppBarWrapper = styled.div`
  flex-grow: 1;
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

export const NavItem = styled(NavLink)`
  && {
    margin-right: 20;
  }
`;

const NavButton = NavItem.withComponent(Button);

const StyledMenuList = styled(MenuList)`
  && {
    box-sizing: border-box;
    background-color: ${props =>
      props.bgColor || props.theme.palette.primary.main};
    padding: 0.1rem 0.5rem 0.1rem 0.5rem;
  }
`;

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

const NavAppBar = ({ title, menuItems }) => {
  const _renderMenuItems = items => {
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

  const NavItems = _renderMenuItems(menuItems);
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
  title: (
    <Link to="/">
      <BrandIcon size={"40px"}/>
    </Link>
  ),
  menuItems: NAV_BAR
};

export default NavAppBar;
