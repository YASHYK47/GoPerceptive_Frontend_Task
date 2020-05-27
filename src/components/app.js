import React, { Component } from "react";

class App extends Component {
  render() {
    return <div className="ui container">{this.props.children}</div>;
  }
}

export default App;
