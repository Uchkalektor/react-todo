import React, { Component } from "react";

import AppHeader from "../AppHeader";
import ItemStatusFilter from "../ItemStatusFilter";
import SearchPanel from "../SearchPanel";
import ToDoList from "../ToDoList";

import "./App.css";

class App extends Component {
  render() {
    const toDoData = [
      {
        label: "Drink Coffee",
        important: false,
        id: 1
      },
      {
        label: "Create Awesome React App",
        important: true,
        id: 2
      },
      {
        label: "Go To Lunch",
        important: false,
        id: 3
      }
    ];

    return (
      <div className="todo-app">
        <AppHeader toDo={1} done={3} />
        <div className="top-panel d-flex">
          <SearchPanel />
          <ItemStatusFilter />
        </div>
        <ToDoList toDoData={toDoData} />
      </div>
    );
  }
}

export default App;
