import React, { Component } from "react";

import "./AppHeader.css";

class AppHeader extends Component {
  render() {
    const { toDo, done } = this.props;

    return (
      <div className="app-header d-flex">
        <h1>ToDo List</h1>
        <h2>
          {toDo} more to do, {done} done
        </h2>
      </div>
    );
  }
}

export default AppHeader;
