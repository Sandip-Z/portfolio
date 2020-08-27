import React, { Component } from "react";

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: undefined,
    };
  }

  componentDidCatch(error, info) {
    if (error) {
      this.setState({ error: info });
    }
  }

  render() {
    return this.state.error ? (
      <h1 className="text-danger">{this.state.error}</h1>
    ) : (
      this.props.children
    );
  }
}

export default ErrorBoundary;
