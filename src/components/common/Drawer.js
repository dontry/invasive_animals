import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
//MUI Components
import { green } from "material-ui/colors";
import MuiDrawer from "material-ui/Drawer";
import Divider from "material-ui/Divider";
//Components
import List, { ListItem, ListItemText } from "material-ui/List";
import IconButton from "material-ui/IconButton";
import { Title } from "./Text";
import { LogoIcon } from "./Icons";

const LogoWrapper = styled.div`
  padding: 3rem;
  text-align: center;
`;

const StyledListItemText = styled(ListItemText)`
  font-weight: bolder;
  font-size: 2rem;
`;


function renderListItems(items) {
  return items.map(item => (
    <ListItem button key={item.name}>
      <Link style={{ margin: "0 auto" }} to={item.path}>
        <StyledListItemText primary={<h3 style={{color: green[600]}}>{item.name}</h3>} />
      </Link>
      <Divider />
    </ListItem>
  ));
}

export default ({ open, anchor, handleClose, menuItems }) => (
  <MuiDrawer anchor={anchor} open={open} onClose={handleClose}>
    <LogoWrapper>
      <Link to="/">
        <LogoIcon size={"40px"} />
        <Title variant="title">Victoria Guardian</Title>
      </Link>
    </LogoWrapper>
    <Divider />
    <List style={{ width: 250 }}>{renderListItems(menuItems)}</List>
  </MuiDrawer>
);
