import React, { Component } from "react";
import TaskSort from "./TaskSort";
import TaskSearch from "./TaskSearch";
class TaskControl extends Component {
  constructor(props) {
    super(props);
    this.state = {
      keyWord: "",
    };
  }
  handleChange = (event) => {
    var target = event.target;
    var name = target.name;
    var value = target.value;
    this.setState({
      [name]: value,
    });
  };
  onhandleSearch = () => {
    this.props.onhandleSearch(this.state.keyWord);
  }
  render() {
    return (
      <div className="input-group">
        <input
          type="text"
          name="keyWord"
          value={this.state.keyWord}
          onChange={this.handleChange}
          className="form-control"
        />
        <button type="button" onClick={this.onhandleSearch} className="btn btn-primary">
          Tìm Kiếm
        </button>
      </div>
    );
  }
}

export default TaskControl;
