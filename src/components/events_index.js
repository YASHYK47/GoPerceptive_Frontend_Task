import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router";

class EventsIndex extends Component {
  renderEvents = () => {
    const { events } = this.props;
    return events
      .sort((a, b) => (a.date > b.date ? 1 : -1))
      .map((event) => {
        return (
          <li
            key={event.title}
            style={{
              border: "3px solid rgb(101, 107, 128)",
              borderRadius: "5px",
              margin: "5px",
            }}
          >
            <Link
              to={{ pathname: "/event/view", state: { event } }}
              style={{ color: "rgb(0,0,0)" }}
              className="ui grid"
            >
              <h3 className="ten wide column" style={{ padding: "20px" }}>
                Title: {event.title}
              </h3>
              <h3
                className="six wide column"
                style={{ margin: "0", padding: "20px" }}
              >
                Date: {event.date}
              </h3>
            </Link>
          </li>
        );
      });
  };
  render() {
    return (
      <div>
        <div
          className="ui clearing segment"
          style={{
            backgroundColor: "rgb(208, 199, 254)",
            border: "3px solid rgb(0,0,0)",
            borderRadius: "10px",
          }}
        >
          <Link
            to="/event/create"
            style={{
              border: "2px solid rgb(101, 107, 128)",
              borderRadius: "10px",
            }}
            className="ui right floated primary button"
          >
            Add Event
          </Link>
          <h2 className="ui deviding header">Events</h2>

          <ul className="ui celled list">{this.renderEvents()}</ul>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { events: state.events };
}

export default connect(mapStateToProps)(EventsIndex);
