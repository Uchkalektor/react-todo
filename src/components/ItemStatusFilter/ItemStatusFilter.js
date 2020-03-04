import React, { Component } from "react";

import "./ItemStatusFilter.css";

class ItemStatusFilter extends Component {
  render() {
    const { filterData, onChangeFilter } = this.props;
    const filterItems = filterData.map(obj => {
      const className =
        "btn" + (obj.active ? " btn-info" : " btn-outline-secondary");
      return (
        <button
          key={obj.id}
          type="button"
          className={className}
          onClick={() => onChangeFilter(obj.id)}
        >
          {obj.label}
        </button>
      );
    });
    return <div className="btn-group">{filterItems}</div>;
  }
}

export default ItemStatusFilter;
