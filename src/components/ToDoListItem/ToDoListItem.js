import React, { Component } from "react";

import "./ToDoListItem.css";

class ToDoListItem extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isDone: false,
      isImportant: false
    };

    this.onLabelClick = () => {
      this.setState(({ isDone }) => {
        return {
          isDone: !isDone
        };
      });
    };

    this.onBtnImportantClick = () => {
      this.setState(({ isImportant }) => {
        return {
          isImportant: !isImportant
        };
      });
    };
  }

  render() {
    const { label, onDeleted } = this.props;
    const { isDone, isImportant } = this.state;

    const itemClassName =
      "todo-list-item" +
      (isDone ? " done" : "") +
      (isImportant ? " important" : "");

    return (
      <span className={itemClassName}>
        <span className="todo-list-item-label" onClick={this.onLabelClick}>
          {label}
        </span>

        <button
          type="button"
          className="btn btn-outline-success btn-sm float-right"
          onClick={this.onBtnImportantClick}
        >
          <i className="fa fa-exclamation" />
        </button>

        <button
          type="button"
          className="btn btn-outline-danger btn-sm float-right"
          onClick={onDeleted}
        >
          <i className="fa fa-trash-o" />
        </button>
      </span>
    );
  }
}

export default ToDoListItem;
