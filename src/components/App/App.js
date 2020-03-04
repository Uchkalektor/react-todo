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

    this.onChangeFilter = filterItemId => {
      this.setState(({ filterData }) => {
        const resultData = filterData.map(obj => {
          return { ...obj, active: obj.id === filterItemId };
        });

        return {
          filterData: resultData
        };
      });
    };

    this.onChangeSearchString = searchString => {
      this.setState({ searchString });
    };

    this.state = {
      toDoData: [
        this.createItem("Drink Coffee"),
        this.createItem("Create Awesome App"),
        this.createItem("Go To Lunch")
      ],
      filterData: [
        { id: 1, label: "All", active: true },
        { id: 2, label: "Active", active: false },
        { id: 3, label: "Done", active: false }
      ],
      searchString: ""
    };
  }

  render() {
    const { toDoData, filterData, searchString } = this.state;

    const doneCount = toDoData.filter(obj => obj.isDone).length;
    const toDoCount = toDoData.length - doneCount;

    const filterState = filterData.find(obj => obj.active === true).label;
    let toDoDataFiltered = [];

    switch (filterState) {
      case "Active": {
        toDoDataFiltered = toDoData.filter(obj => obj.isDone === false);
        break;
      }
      case "Done": {
        toDoDataFiltered = toDoData.filter(obj => obj.isDone === true);
        break;
      }
      case "All":
      default: {
        toDoDataFiltered = toDoData.slice();
        break;
      }
    }

    const searchRegexp = new RegExp(searchString, "gi");

    toDoDataFiltered = toDoDataFiltered.filter(obj =>
      obj.label.match(searchRegexp)
    );

    return (
      <div className="todo-app">
        <AppHeader toDo={toDoCount} done={doneCount} />
        <div className="top-panel d-flex">
          <SearchPanel onChangeSearchString={this.onChangeSearchString} />
          <ItemStatusFilter
            filterData={filterData}
            onChangeFilter={this.onChangeFilter}
          />
        </div>
        <ToDoList
          toDoData={toDoDataFiltered}
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
