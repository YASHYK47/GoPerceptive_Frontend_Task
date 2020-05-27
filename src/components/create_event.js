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
    this.props.createEvent(props).then(() => {
      this.context.router.push("/");
    });
  };

  renderError({ error, touched }) {
    if (touched && error) {
      return (
        <div className="text danger">
          <div className="header">{error}</div>
        </div>
      );
    }
  }

  renderInput = ({ input, label, meta }) => {
    const className = `field ${meta.error && meta.touched ? "error" : ""}`;
    return (
      <div className={className}>
        <label>{label}</label>
        <input {...input} autoComplete="off" />
        {this.renderError(meta)}
      </div>
    );
  };
  renderTextArea = ({ input, label, meta }) => {
    const className = `field ${meta.error && meta.touched ? "error" : ""}`;
    return (
      <div className={className}>
        <label>{label}</label>
        <textarea {...input} autoComplete="off" />
        {this.renderError(meta)}
      </div>
    );
  };

  render() {
    const { handleSubmit } = this.props;
    return (
      <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
        <h3>Create A New Event</h3>
        <div>
          <label htmlFor="title">Title</label>
          <br />
          <Field
            name="title"
            id="title"
            component={this.renderInput}
            type="text"
          />
        </div>
        <div>
          <label htmlFor="category">Category</label>
          <br />
          <Field
            name="category"
            id="category"
            component={this.renderInput}
            type="text"
          />
        </div>
        <div>
          <label htmlFor="description">Description</label>
          <br />
          <Field
            name="description"
            id="description"
            component={this.renderTextArea}
          />
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
    );
  }
}

function validate(values) {
  const errors = {};
  if (!values.title) errors.title = "Enter a valid Title";
  if (!values.category) errors.category = "Enter a valid Category";
  if (!values.description) errors.description = "Enter a valid Description";
}

CreateEvent = connect(null, { createEvent })(CreateEvent);

export default reduxForm({
  form: "CreateEvent",
  fields: ["title", "category", "description"],
  validate,
})(CreateEvent);
