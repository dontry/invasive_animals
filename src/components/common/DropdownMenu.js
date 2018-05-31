import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import {MenuList} from "material-ui/Menu";
import {Popper} from "react-popper";
import ClickAwayListener from "material-ui/utils/ClickAwayListener";
import {Link} from "react-router-dom";
import Paper from "material-ui/Paper";
import Portal from "material-ui/Portal";
import Collapse from "material-ui/transitions/Collapse";
import NavLink from "./NavLink";

const NavItem = styled(NavLink)`
  && {
    padding: 0.2rem 1rem;
  }
`

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

MenuItemLink.propTypes = {
  item: PropTypes.shape({
    path: PropTypes.string,
    name: PropTypes.string
  })
}

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

DropdownMenu.propTypes = {
  open: PropTypes.bool,
  placement: PropTypes.string,
  handleClose: PropTypes.func,
  menuId: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  menuItems: PropTypes.array
}
export default DropdownMenu;
