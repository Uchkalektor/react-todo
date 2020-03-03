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

    this.startId = 1;

    this.createItem = label => {
      return {
        id: this.startId++,
        label,
        isDone: false,
        isImportant: false
      };
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

    this.onAddItem = label => {
      this.setState(({ toDoData }) => {
        const newItem = this.createItem(label);
        const resultData = [...toDoData, newItem];

        return {
          toDoData: resultData
        };
      });
    };

    this.onToggleProperty = (id, propName) => {
      this.setState(({ toDoData }) => {
        const changedItemIdx = toDoData.findIndex(obj => obj.id === id);
        const changedItem = {
          ...toDoData[changedItemIdx],
          [propName]: !toDoData[changedItemIdx][propName]
        };

        const resultData = [
          ...toDoData.slice(0, changedItemIdx),
          changedItem,
          ...toDoData.slice(changedItemIdx + 1)
        ];

        return {
          toDoData: resultData
        };
      });
    };

    this.state = {
      toDoData: [
        this.createItem("Drink Coffee"),
        this.createItem("Create Awesome App"),
        this.createItem("Go To Lunch")
      ]
    };
  }

  render() {
    const { toDoData } = this.state;

    const doneCount = toDoData.filter(obj => obj.isDone).length;
    const toDoCount = toDoData.length - doneCount;

    return (
      <div className="todo-app">
        <AppHeader toDo={toDoCount} done={doneCount} />
        <div className="top-panel d-flex">
          <SearchPanel />
          <ItemStatusFilter />
        </div>
        <ToDoList
          toDoData={toDoData}
          onDeleted={this.onDeleted}
          onToggleProperty={this.onToggleProperty}
        />
        <div className="bottom-panel d-flex">
          <AddItem onAddItem={this.onAddItem} />
        </div>
      </div>
    );
  }
}

export default App;
