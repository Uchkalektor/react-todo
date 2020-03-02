import React from "react";

import ToDoListItem from "../ToDoListItem/ToDoListItem";
import "./ToDoList.css";

const ToDoList = ({ toDoData }) => {
  const elementsList = toDoData.map(item => {
    const { id, ...itemProps } = item;

    return (
      <li className="list-group-item" key={id}>
        <ToDoListItem {...itemProps} />
      </li>
    );
  });

  return <ul className="list-group todo-list">{elementsList}</ul>;
};

export default ToDoList;
