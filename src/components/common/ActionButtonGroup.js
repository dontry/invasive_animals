import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "material-ui/styles";
import Button from "material-ui/Button";
import styled from "styled-components";

export const StyledButton = styled(Button)`
  && {
  margin-left: 5px;
  margin-right: 5px;
  background-color: ${props => props.theme.palette[props.type].main};
  color: ${props => props.theme.palette[props.type].contrastText};
  font-size: ${props => props.theme.textSize.size};

  &:hover {
    background-color: ${props => props.theme.palette[props.type].dark};
  }
`;

export const ActionButton = ({
  raised,
  action,
  label,
  type = "primary",
  trait = "main"
}) => (
  <StyledButton
    variant={raised ? "raised" : "flat"}
    onClick={action}
    type={type}
    trait={trait}
  >
    {label}
  </StyledButton>
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
    label: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
    primary: PropTypes.bool,
    onClick: PropTypes.func,
    disabled: PropTypes.bool,
    type: PropTypes.string
  }),
  secondaryProps: PropTypes.shape({
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
    label: "Primary",
    primary: false,
    action() {
      console.log("onClick");
    },
    disabled: false,
    type: "primary",
    trait: "main"
  },
  secondaryProps: {
    className: "",
    label: "Secondary",
    raised: false,
    primary: false,
    action() {
      console.log("onClick");
    },
    disabled: false,
    type: "secondary",
    trait: "light"
  }
};

export default ActionButtonGroup;
