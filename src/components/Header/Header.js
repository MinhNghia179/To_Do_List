import React, { Component } from "react";

class Header extends Component {
  render() {
    return (
      <div className="container-fluid bg-gray">
        <div className="container-fluid top-bar">
          <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
            <p className="flex-row-center text-white">
              NguyenMinhNghia.thd@gmail.com <span> / </span> +84.358229075
            </p>
          </div>
          <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6 top_bar">
            <div className="top-bar-social top-right flex-row-center">
              <ul className="top-bar-social-list text-white">
                <li>
                  <i className="fab fa-facebook-square" />
                </li>
                <li>
                  <i className="fab fa-twitter" />
                </li>
                <li>
                  <i className="fab fa-google-pay" />
                </li>
                <li>
                  <i className="fab fa-google-plus-square" />
                </li>
              </ul>
            </div>
            <div className="top-right flex-row-center">
              <button type="button" className="btn btn-success mr-10">
                Đăng Nhập
              </button>
              <button type="button" className="btn btn-warning">
                Đăng Ký
              </button>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row bg-header">
            <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
              <img
                src="https://mwg.vn/img/web/logo.png"
                className="img-responsive"
                alt="Image"
              />
            </div>
            <div className="col-xs-8 col-sm-8 col-md-8 col-lg-8">
              <nav className="navbar flex-row-center">
                <ul className="nav navbar-nav">
                  <li className="active">
                    <a>Trang Chủ</a>
                  </li>
                  <li>
                    <a>Điện Thoại</a>
                  </li>
                  <li>
                    <a>LapTop</a>
                  </li>
                  <li>
                    <a>Đồ Chơi Công Nghê</a>
                  </li>
                  <li>
                    <a>About</a>
                  </li>
                </ul>
                <button type="button" className="btn btn-success top-right">
                  Giỏ Hàng <i className="fas fa-cart-plus" />
                </button>
              </nav>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
