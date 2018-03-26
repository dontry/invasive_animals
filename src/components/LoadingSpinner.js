import React from "react";
import PropTypes from "prop-types";
import Loading from "react-loading";

const LoadingSpinner = ({ type = "spin", color = "#222" }) => (
  <div className="loading-wrapper">
    <Loading delay={200} type={type} color={color} className="loading" />
  </div>
);

LoadingSpinner.propTypes = {
  type: PropTypes.string,
  color: PropTypes.string
}

export default LoadingSpinner;