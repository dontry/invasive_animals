import React, { Component } from "react";
import Popover from "material-ui/Popover";
import Menu from "material-ui/Menu";
import MenuItem from "material-ui/MenuItem";

function createMenuItem(items) {
  return items.map(item => <MenuItem primaryText={item} />);
}

const DropdownMenu = ({ open, handleClose, handleOpen, anchorEl, items }) => {
  const MenuItems = createMenuItem(items);
  return (
    <Popover
      open={open}
      anchorEl={anchorEl}
      achorOrigin={{ horizontal: "left", vertical: "bottom" }}
      targetOrigin={{ horizontal: "left", vertical: "top" }}
      onRequestClose={handleClose}
    >
      <Menu>{MenuItems}</Menu>
    </Popover>
  );
};

export default DropdownMenu;
