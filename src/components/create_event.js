import React, { Component } from "react";
import { reduxForm, Field } from "redux-form";
import { connect } from "react-redux";
import { Link } from "react-router";
import PropTypes from "prop-types";

import { createEvent } from "../actions/index";

class CreateEvent extends Component {
  static contextTypes = {
    router: PropTypes.object,
  };

  onSubmit = (props) => {
    this.props.createEvent(props);
    this.context.router.push("/");
  };

  renderError({ error, touched }) {
    if (touched && error) {
      return <div className="ui top pointing red basic label">{error}</div>;
    }
  }
  renderDateError({ error, touched }) {
    if (touched && error) {
      return <div className="ui left pointing red basic label">{error}</div>;
    }
  }
  renderInput = ({ input, label, meta }) => {
    const className = `field ${meta.error && meta.touched ? "error" : ""}`;
    return (
      <div className={className}>
        <label>{label}</label>
        <input
          {...input}
          autoComplete="off"
          style={{
            border: "2px solid rgb(101, 107, 128)",
            borderRadius: "10px",
          }}
        />
        {this.renderError(meta)}
      </div>
    );
  };
  renderTextArea = ({ input, label, meta }) => {
    const className = `field ${meta.error && meta.touched ? "error" : ""}`;
    return (
      <div className={className}>
        <label>{label}</label>
        <textarea
          {...input}
          autoComplete="off"
          style={{
            border: "2px solid rgb(101, 107, 128)",
            borderRadius: "10px",
          }}
        />
        {this.renderError(meta)}
      </div>
    );
  };
  renderDate = ({ input, label, meta }) => {
    const className = `field ${meta.error && meta.touched ? "error" : ""}`;
    return (
      <div className={className}>
        <label>{label}</label>
        <input
          {...input}
          autoComplete="off"
          type="date"
          style={{
            width: "50%",
            border: "2px solid rgb(101, 107, 128)",
            borderRadius: "10px",
          }}
        />
        {this.renderDateError(meta)}
      </div>
    );
  };

  render() {
    const { handleSubmit } = this.props;
    return (
      <div
        className="ui clearing segment"
        style={{
          backgroundColor: "rgb(208, 199, 254)",
          border: "4px solid rgb(101, 107, 128)",
          borderRadius: "10px",
        }}
      >
        <form
          onSubmit={handleSubmit(this.onSubmit.bind(this))}
          className="ui form"
        >
          <h2 className="ui deviding header">Create A New Event</h2>
          <div className="field">
            <label htmlFor="title">Title</label>
            <Field
              name="title"
              id="title"
              component={this.renderInput}
              type="text"
            />
          </div>
          <div className="field">
            <label htmlFor="category">Category</label>
            <Field
              name="category"
              id="category"
              component={this.renderInput}
              type="text"
            />
          </div>
          <div className="field">
            <label htmlFor="description">Description</label>
            <Field
              name="description"
              id="description"
              component={this.renderTextArea}
            />
          </div>
          <div className="two fields">
            <div className="field">
              <label htmlFor="date">Date</label>
              <Field name="date" id="date" component={this.renderDate} />
            </div>
          </div>

          <button
            type="submit"
            style={{ margin: "5px" }}
            className="ui primary button"
          >
            Submit
          </button>
          <Link to="/" className="ui secondary button">
            Cancel
          </Link>
        </form>
      </div>
    );
  }
}

function validate(values) {
  const errors = {};
  if (!values.title) errors.title = "Enter a valid Title";
  if (!values.category) errors.category = "Enter a valid Category";
  if (!values.description) errors.description = "Enter a valid Description";
  if (!values.date) errors.date = "Enter a valid Date";

  return errors;
}

CreateEvent = connect(null, { createEvent })(CreateEvent);

export default reduxForm({
  form: "CreateEventForm",
  fields: ["title", "category", "description", "date"],
  validate,
})(CreateEvent);
