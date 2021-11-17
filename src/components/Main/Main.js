import React, { Component } from "react";
import TaskForm from "./TaskForm";
import TaskList from "./TaskList";
import TaskControl from "./TaskControl";
class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isDisplay: true,
      tasks: [],
      itemEditing: null,
      keyWord: "",
      filterName: "",
      filterStatus: -1,
    };
  }
  componentWillMount() {
    if (localStorage && localStorage.getItem("list")) {
      var tasks = JSON.parse(localStorage.getItem("list"));
      this.setState({ tasks: tasks });
    }
  }
  handleToogleForm = () => {
    this.setState({
      isDisplay: !this.state.isDisplay,
      itemEditing: null,
    });
  };
  s4() {
    return Math.floor((1 + Math.random()) * 0x10000)
      .toString(16)
      .substring(1);
  }
  guid() {
    return (
      this.s4() +
      this.s4() +
      "-" +
      this.s4() +
      "-" +
      this.s4() +
      "-" +
      this.s4() +
      "-" +
      this.s4() +
      this.s4() +
      this.s4()
    );
  }
  handleCloseForm = () => {
    this.setState({ isDisplay: true });
  };
  onhandleDelete = (item) => {
    var { tasks } = this.state;
    var index = this.findIndex(item);
    tasks.splice(index, 1);
    this.setState({ tasks: tasks });
    localStorage.setItem("list", JSON.stringify(tasks));
    this.handleCloseForm();
  };
  onhandleUpdate = (data) => {
    var { tasks, itemEditing, isDisplay } = this.state;
    var index = this.findIndex(data);
    if (itemEditing === null) {
      this.setState({ itemEditing: tasks[index], isDisplay: false });
    }
  };
  handleAddTask = (item) => {
    var { tasks, itemEditing } = this.state;
    item.status = item.status === "true" ? true : false;
    if (item.id === "") {
      item.id = this.guid();
      tasks.push(item);
    } else {
      var index = this.findIndex(item.id);
      tasks[index] = item;
    }
    this.setState({ tasks: tasks });
    localStorage.setItem("list", JSON.stringify(tasks));
  };
  onhanldeUpdateStatus = (data) => {
    var { tasks } = this.state;
    var index = this.findIndex(data);
    tasks[index].status = tasks[index].status === true ? false : true;
    this.setState({ tasks: tasks });
    localStorage.setItem("list", JSON.stringify(tasks));
  };
  handleOnChange = (event) => {
    var target = event.target;
    var name = target.name;
    var value = target.value;
    this.setState({
      [name]: value,
    });
  };
  findIndex(id) {
    var { tasks } = this.state;
    var result = -1;
    tasks.forEach((task, index) => {
      if (task.id === id) {
        result = index;
      }
    });
    return result;
  }
  onhandleSearch = (data) => {
    this.setState({ keyWord: data });
  };
  onFilter = (filterName, filterStatus) => {
    this.setState({
      filterName: filterName,
      filterStatus: parseInt(filterStatus, 10),
    });
  };
  render() {
    var {
      isDisplay,
      tasks,
      itemEditing,
      keyWord,
      filterName,
      filterStatus,
    } = this.state;
    tasks = tasks.filter((task) => {
      return task.name.toLowerCase().indexOf(keyWord.toLowerCase()) !== -1;
    });
    if (filterName) {
      tasks = tasks.filter((task) => {
        return task.name.toLowerCase().indexOf(filterName.toLowerCase()) !== -1;
      });
    }
    if (filterStatus) {
      tasks = tasks.filter((task) => {
        if (filterStatus === -1) {
          return task;
        } else {
          return task.status === (filterStatus === 1 ? true : false);
        }
      });
    }
    return (
      <div className="container">
        <div className="row">
          <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
            <div
              className={isDisplay ? "" : "col-xs-4 col-sm-4 col-md-4 col-lg-4"}
            >
              {isDisplay ? (
                ""
              ) : (
                <TaskForm
                  handleAddTask={this.handleAddTask}
                  handleCloseForm={this.handleCloseForm}
                  itemEditing={itemEditing}
                />
              )}
            </div>
            <div
              className={
                isDisplay
                  ? "col-xs-12 col-sm-12 col-md-12 col-lg-12"
                  : "col-xs-8 col-sm-8 col-md-8 col-lg-8"
              }
            >
              <div className="row">
                <button
                  type="button"
                  onClick={this.handleToogleForm}
                  className="btn btn-primary"
                >
                  Thêm Công Việc
                </button>
              </div>
              <div className="row mt-10">
                <div className="col-xs-7 col-sm-7 col-md-7 col-lg-7">
                  <TaskControl onhandleSearch={this.onhandleSearch} />
                </div>
              </div>
              <div className="row">
                <TaskList
                  onFilter={this.onFilter}
                  onhandleUpdate={this.onhandleUpdate}
                  onhandleDelete={this.onhandleDelete}
                  onhanldeUpdateStatus={this.onhanldeUpdateStatus}
                  tasks={tasks}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Main;
