import React from "react";
import fundebug from "fundebug-javascript";
fundebug.apikey = "57df08fc09d43042c879b919ee41e6faaf9a5414c37b4e49bf7b4b5cd105b7f4";

class ErrorBoundary extends React.Component {
    constructor(props) {
      super(props);
      this.state = { hasError: false };
    }
  
    componentDidCatch(error, info) {
      this.setState({ hasError: true });
      // 将component中的报错发送到Fundebug
      fundebug.notifyError(error, {
        metaData: {
          info: info
        }
      });
    }
  
    render() {
      if (this.state.hasError) {
        return null;
      }
      return this.props.children;
    }
  }

  export default ErrorBoundary;
  