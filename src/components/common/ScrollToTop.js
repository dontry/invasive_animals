import  { Component } from "react";
import PropTypes from "prop-types";
import { withRouter } from "react-router";

//Reference: https://github.com/ReactTraining/react-router/blob/master/packages/react-router-dom/docs/guides/scroll-restoration.md
class ScrollToTop extends Component {
  componentDidUpdate(prevProps) {
    if (this.props.location !== prevProps.location) {
      window.scrollTo(0, 0);
    }
  }
  render() {
    return this.props.children;
  }
}

ScrollToTop.propTypes = {
  location: PropTypes.object,
  children: PropTypes.object
}

export default withRouter(ScrollToTop);
