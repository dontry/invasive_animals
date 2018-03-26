import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "material-ui/styles";

import Snackbar from "material-ui/Snackbar";
import IconButton from "material-ui/IconButton";
import CloseIcon from "material-ui-icons/Close";

const AUTO_HIDE_DURATION = 2000;

const styles = {
  root: {
    backgroundColor: "rgba(0,0,0,0.5)",
    textAlign: "center"
  }
};

class Notification extends Component {
  state = {
    open: false
  };
  componentWillReceiveProps(nextProps) {
    this.setState({ open: nextProps.message.length !== 0 });
  }

  handleClose = () => {
    this.setState({ open: false });
  };
  render() {
    const { classes, message } = this.props;
    const { open } = this.state;
    return (
      <Snackbar
        open={open}
        className={classes.root}
        message={message}
        autoHideDuration={AUTO_HIDE_DURATION}
        onClose={this.handleClose}
        action={[
          <IconButton
            key="close"
            aria-label="Close"
            color="inherit"
            className={classes.close}
            onClick={this.handleClose}
          >
            <CloseIcon />
          </IconButton>
        ]}
      />
    );
  }
}

Notification.propTypes = {
  message: PropTypes.string.isRequired
};

export default withStyles(styles)(Notification);
