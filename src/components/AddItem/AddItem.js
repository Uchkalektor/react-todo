import React, { Component } from "react";

import "./AddItem.css";

class AddItem extends Component {
  render() {
    return (
      <div className="add-item">
        <input
          type="text"
          placeholder="new task"
          className="form-control add-item-input"
        />
        <button className="btn btn-info btn-block add-item-btn">
          Add task
        </button>
      </div>
    );
  }
}

export default AddItem;
