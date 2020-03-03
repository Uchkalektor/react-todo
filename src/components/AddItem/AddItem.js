import React, { Component } from "react";

import "./AddItem.css";

class AddItem extends Component {
  constructor(props) {
    super(props);

    this.state = {
      label: ""
    };

    this.onLabelChange = event => {
      this.setState({ label: event.target.value });
    };

    this.onFormSubmit = event => {
      event.preventDefault();
      this.props.onAddItem(this.state.label);
      this.setState({ label: "" });
    };
  }

  render() {
    const { label } = this.state;

    return (
      <form action="" className="d-flex add-item" onSubmit={this.onFormSubmit}>
        <input
          type="text"
          className="form-control"
          onChange={this.onLabelChange}
          placeholder="What needs to be done?"
          value={label}
        />
        <button className="btn btn-info btn-block add-item-btn">
          Add task
        </button>
      </form>
    );
  }
}

export default AddItem;
