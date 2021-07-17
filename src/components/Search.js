import React, { Component } from "react";
import EditUser from "./EditUser";

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tempValue: "",
      userObj:{}
    };
  }

  // nhập in ra text muôn tìm kiếm
  isChange = (event) => {
    console.log(event.target.value);
    // lấy dl text nhập vào rồi gán vào biến temValue
    this.setState({
      tempValue: event.target.value,
    });
    this.props.checkConectProps(this.state.tempValue);
  };

  // hiển thị nút
  hienThiNut = () => {
    if (this.props.hienThiForm === true) {
      return (
        <div className="btn btn-secondary" onClick={() => this.props.ketNoi()}>
          Close
        </div>
      );
    } else {
      return (
        <div className="btn btn-success" onClick={() => this.props.ketNoi()}>
          Add{" "}
        </div>
      );
    }
  };

  //prop.changeEditUserStatus

  // dùng để lưu dữ liệu thông qa biến getUserEditInfo truyền xuống EditUser 
  getUserEditInfo = (info) => {
    this.setState({
      userObj: info
    });
    this.props.getUserEditInfoApp(info);
    // console.log(info)
  }
 
  // hiển thị form sửa
  isShowEditForm = () => {
    if (this.props.editUserStatus) {
      return (
        <EditUser
        getUserEditInfo={(info)=>this.getUserEditInfo(info)}
        userEditObject={this.props.userEditObject}    
        changeEditUserStatus={() => this.props.changeEditUserStatus()}
        />
      );
    }
  };

  render() {
    return (
      <div className="col-12 ">
        <div className="row">{this.isShowEditForm()}</div>
        <div className="form-group">
          <div className="btn-group">
            {/* Dùng b4-form-input-text */}
            <input
              type="text"
              className="form-control"
              onChange={(event) => this.isChange(event)}
              placeholder="Nhập từ khoá"
              style={{ width: "600px" }}
            />
            <div
              className="btn btn-info"
              // onClick tác dụng khi nhấn vào thì trả về text đã nhập
              onClick={(dl) =>
                this.props.checkConectProps(this.state.tempValue)
              }
            >
              Tìm
            </div>
            <div className="btn-group1 ml-2">{this.hienThiNut()}</div>
          </div>
        </div>
      </div>
    );
  }
}

export default Search;
