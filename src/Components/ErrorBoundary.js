import React, { Component } from "react";

class ErrorBoundary extends Component {
  constructor() {
    super();
    this.state = {
      hasError: false
    };
  }

  // Adding the new Hook Method
  componentDidCatch(error, infor) {
    this.setState({ hasError: true });
  }

  render() {
    const { hasError } = this.state;
    return hasError ? <h1> Service not available </h1> : this.props.children;
  }
}

export default ErrorBoundary;
