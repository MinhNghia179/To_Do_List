import React, { Component } from "react";

class TaskForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: "",
      name: "",
      status: false,
    };
  }
  componentWillMount() {
    var { itemEditing } = this.props;
    if (itemEditing && itemEditing.id !== null) {
      this.setState({
        id: itemEditing.id,
        name: itemEditing.name,
        status: itemEditing.status,
      });
    } else {
      this.handlReset();
    }
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps && nextProps.itemEditing) {
      this.setState({
        id: nextProps.itemEditing.id,
        name: nextProps.itemEditing.name,
        status: nextProps.itemEditing.status,
      });
    } else {
      this.handlReset();
    }
  }
  handleSubmit = (event) => {
    event.preventDefault();
  };
  onChange = (event) => {
    var target = event.target;
    var name = target.type === "boolean" ? target.checked : target.name;
    var value = target.value;
    this.setState({
      [name]: value,
    });
  };
  handleClose = () => {
    this.props.handleCloseForm();
  };
  handleClickAdd = () => {
    this.props.handleAddTask(this.state);
    this.handlReset();
  };
  handlReset = () => {
    this.setState({
      id: "",
      name: "",
      status: false,
    });
  };
  render() {
    const { name, status, id } = this.state;
    return (
      <div className="panel panel-default">
        <div className="panel-heading">
          <h3 className="panel-title">
            {id === "" ? "Thêm Công Việc" : "Sửa Công Việc"}
          </h3>
          <button
            type="button"
            onClick={this.handleClose}
            className="label label-warning"
          >
            X
          </button>
        </div>
        <div className="panel-body">
          <form
            onReset={this.handlReset}
            onSubmit={this.handleSubmit}
            role="form"
          >
            <div className="form-group">
              <label>Thêm Công Việc</label>
              <input
                type="text"
                value={name}
                onChange={this.onChange}
                name="name"
                className="form-control"
              />
            </div>
            <div className="form-group">
              <label>Nhập Trạng Thái</label>
              <select
                name="status"
                value={status}
                onChange={this.onChange}
                className="form-control"
              >
                <option value={true}>Kích Hoạt</option>
                <option value={false}>Ẩn</option>
              </select>
            </div>
            <button
              type="submit"
              onClick={this.handleClickAdd}
              className="btn btn-success mr-10"
            >
              Lưu
            </button>
            <button type="reset" className="btn btn-warning">
              Xóa
            </button>
          </form>
        </div>
      </div>
    );
  }
}

export default TaskForm;
