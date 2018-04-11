import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "material-ui/styles";
import AppBar from "material-ui/AppBar";
import IconButton from "material-ui/IconButton";
import Book from "material-ui-icons/Book";
import { grey50 } from "material-ui/styles/colors";
import MenuItem from "material-ui/MenuItem";
import Toolbar from "material-ui/Toolbar";
import Typography from "material-ui/Typography";

import { NavLink, Link } from "react-router-dom";
import "../../assets/NavHeader.css";

const styles = {
  root: {
    flexGrow: 1,
    witdh: "100vw"
  },
  flex: {
    flex: 1
  },
  title: {
    color: "#fff"
  },
  navMenu: {
    flex: 5,
    flexGrow: 1,
    textAlign: "right"
  },
  menuItem: {
    display: "inline",
    marginLeft: 20,
    color: "#fff"
  }
};

class NavAppBar extends Component {
  state = {};
  createMenuItem = (items, className) => {
    return items.map(item => (
      <Link key={item.name} to={`/${item.path}`}>
        <Typography className={className} variant="title">
          {item.name}
        </Typography>
      </Link>
    ));
  };

  render() {
    const { title, menuItems, classes } = this.props;
    const NavMenu = this.createMenuItem(menuItems, classes.menuItem);
    return (
      <div className={classes.root}>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="title" className={classes.title}>
              {title}
            </Typography>
            <div className={classes.navMenu}>{NavMenu} </div>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

NavAppBar.propTypes = {
  classes: PropTypes.object.isRequired
};

NavAppBar.defaultProps = {
  title: "Title",
  menuItems: [
    { name: "Home", path: "" },
    { name: "Get Involved", path: "getinvolved/participate" }
  ]
};

export default withStyles(styles)(NavAppBar);
