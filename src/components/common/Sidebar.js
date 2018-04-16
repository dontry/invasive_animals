import React, { Component } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Drawer from "material-ui/Drawer";
import List, { ListItem, ListItemText } from "material-ui/List";
import NavLink from "./NavLink";
import Divider from "material-ui/Divider";

const FullListWrapper = styled.div`
  width: auto;
`;

const SideListWrapper = FullListWrapper.extend`
  width: 25vw;
  min-width: 250px;
  max-width: 500px;
`;

class Sidebar extends Component {
  _renderListItems = items => {
    return items.map(item => (
      <ListItem button key={item.path}>
        <NavLink to={item.path}>
          <ListItemText primary={item.name} />
        </NavLink>
      </ListItem>
    ));
  };
  render() {
    const { menuItems } = this.props;
    const ListItems = this._renderListItems(menuItems);
    return (
      <SideListWrapper>
        <List compoonent="nav">{ListItems}</List>
      </SideListWrapper>
    );
  }
}

Sidebar.propTypes = {
  menuItems: PropTypes.array.isRequired
};

Sidebar.defaultProps = {
  menuItems: [
    {
      name: "Home",
      path: "/"
    },
    {
      name: "Get Involved",
      path: "/get_involved"
    }
  ]
};

export default Sidebar;
