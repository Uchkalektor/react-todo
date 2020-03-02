import React, { Component } from "react";

import AppHeader from "../AppHeader";
import ItemStatusFilter from "../ItemStatusFilter";
import SearchPanel from "../SearchPanel";
import ToDoList from "../ToDoList";
import AddItem from "../AddItem";

import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      toDoData: [
        {
          label: "Drink Coffee",
          id: 1
        },
        {
          label: "Create Awesome React App",
          id: 2
        },
        {
          label: "Go To Lunch",
          id: 3
        }
      ]
    };

    this.onDeleted = id => {
      this.setState(({ toDoData }) => {
        const deleteIndex = toDoData.findIndex(obj => obj.id === id);
        const resultData = [
          ...toDoData.slice(0, deleteIndex),
          ...toDoData.slice(deleteIndex + 1)
        ];
        return {
          toDoData: resultData
        };
      });
    };

    this.onAddItem = text => {};
  }

  render() {
    const { toDoData } = this.state;

    return (
      <div className="todo-app">
        <AppHeader toDo={1} done={3} />
        <div className="top-panel d-flex">
          <SearchPanel />
          <ItemStatusFilter />
        </div>
        <ToDoList toDoData={toDoData} onDeleted={this.onDeleted} />
        <div className="bottom-panel d-flex">
          <AddItem />
        </div>
      </div>
    );
  }
}

export default App;
