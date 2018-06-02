import React from "react";
import PropTypes from "prop-types";
import Button from "material-ui/Button";
import styled from "styled-components";

const ButtonGroupWrapper = styled.div`
  text-align: center;
`;

export const StyledButton = styled(Button)`
  && {
    margin-left: 5px;
    margin-right: 5px;
    background-color: ${props =>
      props.theme.palette
        ? props.type
          ? props.trait
            ? props.theme.palette[props.type][props.trait]
            : props.theme.palette[props.type].main
          : props.theme.palette.primary.main
        : "#fff"};
    color: ${props =>
      props.theme.palette
        ? props.type
          ? props.theme.palette[props.type].contrastText
          : props.theme.palette.primary.contrastText
        : "#222"};
    font-size: ${props =>
      props.theme.palette ? props.theme.text_size.size : "1em"};
    height: ${props => props.height || "auto"};
    width: ${props => props.width || "auto"};
    padding ${props => props.padding || "auto"};

    &:hover {
      background-color: ${props =>
        props.theme.palette
          ? props.type
            ? props.theme.palette[props.type].dark
            : props.theme.palette.primary.dark
          : "#acacac"};
    }
  }
`;

export const ActionButton = ({
  raised,
  action,
  label,
  height,
  width,
  padding,
  type = "primary",
  trait = "main"
}) => (
  <StyledButton
    variant={raised ? "raised" : "flat"}
    onClick={action}
    type={type}
    trait={trait}
    height={height}
    width={width}
    padding={padding}
  >
    {label}
  </StyledButton>
);

ActionButton.propTypes = {
  raised: PropTypes.bool,
  action: PropTypes.func,
  label: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
  height: PropTypes.string,
  width: PropTypes.string,
  padding: PropTypes.string,
  type: PropTypes.string,
  trait: PropTypes.string
};

const ActionButtonGroup = ({ btnStyle, primaryProps, secondaryProps }) => {
  return (
    <ButtonGroupWrapper btnStyle={btnStyle}>
      <ActionButton className="action-btn" {...primaryProps} />
      <ActionButton className="action-btn" {...secondaryProps} />
    </ButtonGroupWrapper>
  );
};

ActionButtonGroup.propTypes = {
  btnStyle: PropTypes.object.isRequired,
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
  style: {},
  primaryProps: {
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
