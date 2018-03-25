import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "material-ui/styles";
import AppBar from "material-ui/AppBar";
import { Link, NavLink } from "react-router-dom";
import Tabs, { Tab } from "material-ui/Tabs";
import Typography from "material-ui/Typography";

const TabContainer = props => {
  return <Typography component="div">{props.children}</Typography>;
};

TabContainer.PropTypes = {
  children: PropTypes.node.isRequired
};

const styles = {
  root: {
    width: "100vw",
    flexGrow: 1
  },
  tab: {
    flex: 1,
    maxWidth: "none",
    textAlign: "center"
  }
};

class TabBar extends Component {
  state = {
    tabIndex: 0
  };

  createTabs = (labels, className) => {
    return labels.map(label => {
      //TODO: something wrong with the Link
      return (
        <Link className={className} to={label.path} key={label.name}>
          <Tab style={{ width: "100%" }} key={label.path} label={label.name} />
        </Link>
      );
    });
  };

  render() {
    const { labels, classes } = this.props;
    const { tabIndex } = this.state;
    const tabs = this.createTabs(labels, classes.tab);
    return (
      <div className={classes.root}>
        <Tabs value={tabIndex}>{tabs}</Tabs>
      </div>
    );
  }
}

TabBar.propTypes = {
  classes: PropTypes.object.isRequired,
  labels: PropTypes.array.isRequired
};

TabBar.defaultProps = {
  classes: {},
  labels: []
};

export default withStyles(styles)(TabBar);
