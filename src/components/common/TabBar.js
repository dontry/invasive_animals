import React, {Component} from "react";
import PropTypes from "prop-types";
import {withStyles} from "material-ui/styles";
import {Redirect, withRouter} from "react-router-dom";
import Tabs, {Tab} from "material-ui/Tabs";
import Typography from "material-ui/Typography";

const TabContainer = props => {
  return <Typography component="div">{props.children}</Typography>;
};

TabContainer.propTypes = {
  children: PropTypes.node.isRequired
};

const styles = {
  root: {
    flexGrow: 1,
    justifyContent: "flex-end"
  },
  tab: {
    flex: 1,
    textAlign: "center"
  }
};

class TabBar extends Component {
  static contextTypes = {
    router: PropTypes.object
  };
  state = {
    tabIndex: 0,
    redirect: false
  };
  handleChange = (event, index) => {
    const { tabIndex } = this.state;
    if (tabIndex !== index) {
      this.setState({ tabIndex: index, redirect: true });
    }
  };

  createTabs = (labels, className) => {
    return labels.map(label => {
      return (
        <Tab  key={label.path} label={label.name} />
      );
    });
  };

  render() {
    const { labels, classes } = this.props;
    const { tabIndex, redirect } = this.state;
    const tabs = this.createTabs(labels, classes.tab);

    return (
      <div className={classes.root}>
        <Tabs value={tabIndex} onChange={this.handleChange.bind(this)} fullWidth style={{display: "flex", justifyContent: "flex-end", flexGrow: 1}}>
          {tabs}
        </Tabs>
        <Redirect to={labels[tabIndex].path} />
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

export default withStyles(styles)(withRouter(TabBar));
