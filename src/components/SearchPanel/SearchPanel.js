import React, { Component } from "react";

import "./SearchPanel.css";

class SearchPanel extends Component {
  constructor(props) {
    super(props);

    this.state = {
      inputValue: ""
    };

    this.onChange = event => {
      this.setState({ inputValue: event.target.value });
      this.props.onChangeSearchString(event.target.value);
    };
  }

  render() {
    const { inputValue } = this.state;

    return (
      <input
        type="text"
        placeholder="type to search"
        className="form-control search-input"
        value={inputValue}
        onChange={this.onChange}
      />
    );
  }
}

export default SearchPanel;
