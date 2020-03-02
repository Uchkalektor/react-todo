import React, { Component } from "react";

import ToDoListItem from "../ToDoListItem/ToDoListItem";
import "./ToDoList.css";

class ToDoList extends Component {
  render() {
    const { toDoData, onDeleted } = this.props;

    const elementsList = toDoData.map(item => {
      const { id, ...itemProps } = item;

      return (
        <li className="list-group-item" key={id}>
          <ToDoListItem {...itemProps} onDeleted={() => onDeleted(id)} />
        </li>
      );
    });

    return <ul className="list-group todo-list">{elementsList}</ul>;
  }
}

export default ToDoList;
