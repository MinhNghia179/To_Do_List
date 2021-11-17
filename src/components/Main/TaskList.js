import React, { Component } from "react";
class TaskList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filterName: "",
      filterStatus: -1,
    };
  }
  handleUpdate = (data) => {
    this.props.onhandleUpdate(data);
  };
  hanldeDelete = (data) => {
    this.props.onhandleDelete(data);
  };
  handleUpdateStatus = (data) => {
    this.props.onhanldeUpdateStatus(data);
  };
  handleChange = (event) => {
    var target = event.target;
    var name = target.name;
    var value = target.type === "checked" ? target.checked : target.value;
    this.props.onFilter(
      name === "filterName" ? value : this.state.filterName,
      name === "filterStatus" ? value : this.state.filterStatus
    );
    this.setState({
      [name]: value,
    });
  };
  render() {
    const { tasks } = this.props;
    const { filterName, filterStatus } = this.state;
    var eleTasks = tasks.map((item, index) => {
      return (
        <tr key={item.id} className="text-center">
          <td>{index}</td>
          <td>{item.name}</td>
          <td>
            <span
              onClick={() => {
                this.handleUpdateStatus(item.id);
              }}
              className={
                item.status
                  ? "label label-info pointer"
                  : "label label-danger pointer"
              }
            >
              {item.status ? "Kích Hoạt" : "Ẩn"}
            </span>
          </td>
          <td>
            <div className="input-group">
              <button
                onClick={() => {
                  this.handleUpdate(item.id);
                }}
                type="button"
                className="btn btn-warning mr-10"
              >
                Sửa
              </button>
              <button
                type="button"
                onClick={() => {
                  this.hanldeDelete(item.id);
                }}
                className="btn btn-danger mr-10"
              >
                Xóa
              </button>
            </div>
          </td>
        </tr>
      );
    });
    return (
      <div className="table-responsive">
        <table className="table table-hover">
          <thead>
            <tr>
              <th>STT</th>
              <th>Tên Công Việc</th>
              <th>Trạng Thái</th>
              <th>Hành Động</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td></td>
              <td>
                <input
                  type="text"
                  name="filterName"
                  value={filterName}
                  className="form-control"
                  onChange={this.handleChange}
                />
              </td>
              <td>
                <select
                  name="filterStatus"
                  value={filterStatus}
                  className="form-control"
                  onChange={this.handleChange}
                >
                  <option value={-1}>Tất Cả</option>
                  <option value={0}>Ẩn </option>
                  <option value={1}>Kích Hoạt</option>
                </select>
              </td>
              <td></td>
            </tr>
            {eleTasks}
          </tbody>
        </table>
      </div>
    );
  }
}
export default TaskList;
