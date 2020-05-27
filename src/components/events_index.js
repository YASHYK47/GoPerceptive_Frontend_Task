import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router";

class EventsIndex extends Component {
  renderList = () => {
    return this.props.events.map((event) => {
      return <li key={event.title}>{event.title}</li>;
    });
  };
  render() {
    console.log(this.props);
    return (
      <div>
        <div className="ui clearing segment">
          <Link to="/event/create" className="ui right floated primary button">
            Add Event
          </Link>
          <h3>Events</h3>
          <ul>{this.renderList()}</ul>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { events: state.events };
}

export default connect(mapStateToProps)(EventsIndex);
