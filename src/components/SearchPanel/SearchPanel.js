import React, { Component } from "react";

import "./SearchPanel.css";

class SearchPanel extends Component {
  render() {
    return (
      <input
        type="text"
        placeholder="type to search"
        className="form-control search-input"
      />
    );
  }
}

export default SearchPanel;
