import React, { PureComponent } from "react";
import styled from "styled-components";
import Menu, { MenuItem, MenuList } from "material-ui/Menu";
import { Manager, Target, Popper } from "react-popper";
import ClickAwayListener from "material-ui/utils/ClickAwayListener";
import { Link } from "react-router-dom";
import Paper from "material-ui/Paper";
import Portal from "material-ui/Portal";
import Collapse from "material-ui/transitions/Collapse";
import NavLink from "./NavLink";

const NavItem = styled(NavLink)`
  && {
    padding: 0.2rem 1rem;
  }
`

const styles = {
  popperClose: {
    pointerEvents: "none"
  }
};

const StyledPaper = styled(Paper)`
  margin: 3px;
`;

const StyledMenuList = styled(MenuList)`
  && {
    box-sizing: border-box;
    background-color: ${props =>
      props.bgColor || props.theme.palette.primary.main};
  }
`;

const MenuItemLink = ({ item }) => (
  <Link to={item.path} {...item}>
    {item.name}
  </Link>
);

class DropdownMenu extends PureComponent {
  renderMenuItems = items => {
    return items.map(item => (
      <NavItem display="block" key={item.path} to={item.path}>
        {item.name}
      </NavItem>
    ));
  };

  render() {
    const { open, placement, handleClose, menuId, menuItems } = this.props;
    const MenuItems = this.renderMenuItems(menuItems);
    return (
      <Portal>
        <Popper
          placement={placement}
          eventsEnabled={open}
          // className={classNames({ [classes.popperClose]: !open })}
        >
          <ClickAwayListener onClickAway={handleClose}>
            <Collapse
              in={open}
              id={menuId}
              style={{ transformOrigin: "0 0 0 " }}
            >
              <StyledPaper>
                <StyledMenuList role="menu">{MenuItems}</StyledMenuList>
              </StyledPaper>
            </Collapse>
          </ClickAwayListener>
        </Popper>
      </Portal>
    );
  }
}
export default DropdownMenu;
