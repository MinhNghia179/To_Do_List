import React, { Component } from "react";

class Footer extends Component {
  render() {
    return (
      <div className="container-fluid">
        <div className="row footer">
          <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
            <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
              Album example is © Bootstrap, but please download and customize it
              for yourself! New to Bootstrap? Visit the homepage or read our
              getting started guide.
            </div>
            <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
              <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4 text-white">
                <p className="text-center">Liên Hệ Với Chúng Tôi</p>
                <p className="">Số Điện Thoại</p>
                <p className="">Email</p>
                <p className="">Địa Chỉ</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Footer;
