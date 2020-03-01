import React from "react";
import ReactDOM from "react-dom";

import ToDoList from "./components/ToDoList/ToDoList";
import AppHeader from "./components/AppHeader/AppHeader";
import SearchPanel from "./components/SearchPanel/SearchPanel";

const App = () => {
  const toDoData = [
    {
      label: "Drink Coffee",
      important: false
    },
    {
      label: "Create Awesome React App",
      important: true
    },
    {
      label: "Go To Lunch",
      important: false
    }
  ];

  return (
    <div>
      <AppHeader />
      <SearchPanel />
      <ToDoList toDoData={toDoData} />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
