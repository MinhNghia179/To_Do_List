import React, { Component } from "react";

class TaskSearch extends Component {
  render() {
    return (
      <div className="mr-10">
        <input
          type="text"
          name="txtKeyWord"
          className="form-control"
          defaultValue
        />
      </div>
    );
  }
}

export default TaskSearch;
