import React, { Component } from "react";

class App extends Component {
  render() {
    return (
      <div className="ui container" style={{ marginTop: "25px" }}>
        <h1
          className="ui header center aligned"
          style={{
            backgroundColor: "rgb(208, 199, 254)",
            border: "4px solid rgb(0,0,0)",
            borderRadius: "10px",
            padding: "10px",
            width: "25%",
            marginLeft: "35%",
            fontWeight: "1800",
          }}
        >
          Event Manager
        </h1>
        {this.props.children}
      </div>
    );
  }
}

export default App;
