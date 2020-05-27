import React, { Component } from "react";

class ViewEvent extends Component {
  state = {};
  render() {
    const { event } = this.props.location.state;
    console.log(event);
    return (
      <div>
        <h1>Event View</h1>
      </div>
    );
  }
}

export default ViewEvent;
