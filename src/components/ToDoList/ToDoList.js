import React from "react";

import ToDoListItem from "../ToDoListItem/ToDoListItem";

const ToDoList = ({ toDoData }) => {
  const elementsList = toDoData.map((item, key) => {
    return (
      <li key={key}>
        <ToDoListItem {...item} />
      </li>
    );
  });

  return <ul>{elementsList}</ul>;
};

export default ToDoList;
