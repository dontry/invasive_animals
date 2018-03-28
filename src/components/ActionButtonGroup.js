import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "material-ui/styles";
import Button from "material-ui/Button";

const styles = {
  button: {
    marginLeft: 5,
    marginRight: 5
  }
};

const ActionButton = props => (
  <Button
    variant={props.raised ? "raised" : "flat"}
    style={styles.button}
    className={props.className}
    color="primary"
    disabled={props.disabled}
    onClick={props.action}
    type={props.type}
  >
    {props.label}
  </Button>
);

const ActionButtonGroup = ({ className, primaryProps, secondaryProps }) => {
  return (
    <div className={className}>
      <ActionButton {...primaryProps} />
      <ActionButton {...secondaryProps} />
    </div>
  );
};

ActionButtonGroup.propTypes = {
  className: PropTypes.string,
  primaryProps: PropTypes.shape({
    className: PropTypes.string,
    label: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
    primary: PropTypes.bool,
    onClick: PropTypes.func,
    disabled: PropTypes.bool,
    type: PropTypes.string
  }),
  secondaryProps: PropTypes.shape({
    className: PropTypes.string,
    label: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
    primary: PropTypes.bool,
    onClick: PropTypes.func,
    disabled: PropTypes.bool,
    type: PropTypes.string
  })
};

ActionButtonGroup.defaultProps = {
  className: "",
  primaryProps: {
    className: "",
    raised: true,
    label: "label",
    primary: false,
    action() {
      console.log("onClick");
    },
    disabled: true,
    type: "button"
  },
  secondaryProps: {
    className: "",
    label: "label",
    raised: false,
    primary: false,
    action() {
      console.log("onClick");
    },
    disabled: true,
    type: "button"
  }
};

export default withStyles(styles)(ActionButtonGroup);
