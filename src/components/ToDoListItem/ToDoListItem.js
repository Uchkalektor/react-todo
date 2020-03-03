import React, { Component } from "react";

import "./ToDoListItem.css";

class ToDoListItem extends Component {
  render() {
    const {
      label,
      isDone,
      isImportant,
      onDeleted,
      onToggleImportant,
      onToggleDone
    } = this.props;

    const itemClassName =
      "todo-list-item" +
      (isDone ? " done" : "") +
      (isImportant ? " important" : "");

    return (
      <span className={itemClassName}>
        <span className="todo-list-item-label" onClick={onToggleDone}>
          {label}
        </span>

        <button
          type="button"
          className="btn btn-outline-success btn-sm float-right"
          onClick={onToggleImportant}
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
