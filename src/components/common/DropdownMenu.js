import React, { PureComponent } from "react";
import classNames from "classnames";
import { withStyles } from "material-ui/styles";
import Menu, { MenuItem, MenuList } from "material-ui/Menu";
import { Manager, Target, Popper } from "react-popper";
import ClickAwayListener from "material-ui/utils/ClickAwayListener";
import { Link } from "react-router-dom";
import Paper from "material-ui/Paper";
import Portal from "material-ui/Portal";
import Collapse from "material-ui/transitions/Collapse";

const styles = {
  popperClose: {
    pointerEvents: "none"
  }
};

const MenuItemLink = ({ item }) => (
  <Link to={item.path} {...item}>
    {item.name}
  </Link>
);

class DropdownMenu extends PureComponent {
  _renderMenuItems = items => {
    return items.map(item => <MenuItem component={MenuItemLink} item={item} />);
  };
  render() {
    const { open, handleClose, menuId, menuItems, ref } = this.props;
    const MenuItems = this._renderMenuItems(menuItems);
    return (
      <Portal>
        <Popper
          placement="bottom"
          eventsEnabled={open}
          // className={classNames({ [classes.popperClose]: !open })}
        >
          {({ ref }) => (
            <ClickAwayListener onClickAway={this.handleClose}>
              <Collapse
                in={open}
                id={menuId}
                style={{ transformOrigin: "0 0 0 " }}
              >
                <Paper data-placement="bottom-right" ref={ref}>
                  <MenuList role="menu">{MenuItems}</MenuList>
                </Paper>
              </Collapse>
            </ClickAwayListener>
          )}
        </Popper>
      </Portal>
    );
  }
}
export default DropdownMenu;
