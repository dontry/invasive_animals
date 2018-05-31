import React, {Component} from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import Snackbar from "material-ui/Snackbar";
import IconButton from "material-ui/IconButton";
import Icon from "material-ui/Icon"

const AUTO_HIDE_DURATION = 2000;

const StyledSnackBar = styled(Snackbar)`
  background-color: rgba(0,0,0,0.5);
  text-align: center;
`


class Notification extends Component {
  state = {
    open: false
  };
  UNSAFE_componentWillReceiveProps(nextProps) {
    this.setState({ open: nextProps.message.length !== 0 });
  }

  handleClose = () => {
    this.setState({ open: false });
  };
  render() {
    const { message } = this.props;
    const { open } = this.state;
    return (
      <StyledSnackBar
        open={open}
        message={message}
        autoHideDuration={AUTO_HIDE_DURATION}
        onClose={this.handleClose}
        action={[
          <IconButton
            key="close"
            aria-label="Close"
            color="inherit"
            onClick={this.handleClose}
          >
            <Icon>close</Icon>
          </IconButton>
        ]}
      />
    );
  }
}

Notification.propTypes = {
  message: PropTypes.string.isRequired
};

export default Notification;
