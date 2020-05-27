import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router";
import PropTypes from "prop-types";

import { deleteEvent } from "../actions/index";

class ViewEvent extends Component {
  static contextTypes = {
    router: PropTypes.object,
  };
  handleDelete = () => {
    const { title } = this.props.location.state.event;
    this.props.deleteEvent(title);
    this.context.router.push("/");
  };
  render() {
    const { event } = this.props.location.state;
    return (
      <div
        className="ui clearing segment"
        style={{
          backgroundColor: "rgb(208, 199, 254)",
          border: "4px solid rgb(101, 107, 128)",
          borderRadius: "10px",
        }}
      >
        <h1
          className="ui center aligned header"
          style={{ textDecoration: "underline" }}
        >
          Event Details
        </h1>
        <h2>
          <span style={{ textDecoration: "underline" }}>Title</span> :{" "}
          {event.title}
        </h2>
        <div className="inline ui grid">
          <h2 className="eight wide column">
            <span style={{ textDecoration: "underline" }}>Category</span> :{" "}
            {event.category}
          </h2>
          <h2 className="eight wide column" style={{ margin: "0px" }}>
            <span style={{ textDecoration: "underline" }}>Date</span> :{" "}
            {event.date}
          </h2>
        </div>
        <h2 style={{ marginTop: "0px" }}>
          <span style={{ textDecoration: "underline" }}>Description</span> :{" "}
        </h2>
        <p
          style={{
            fontSize: "20px",
            border: "2px solid rgb(101, 107, 128)",
            borderRadius: "5px",
            padding: "5px",
          }}
        >
          {event.description}
        </p>
        <Link to="/" style={{ margin: "5px" }} className="ui green button">
          Back
        </Link>
        <button to="/" onClick={this.handleDelete} className="ui red button">
          Delete
        </button>
      </div>
    );
  }
}

export default connect(null, { deleteEvent })(ViewEvent);
