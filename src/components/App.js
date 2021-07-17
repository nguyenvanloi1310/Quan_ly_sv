import React, { Component } from "react";
import "./../App.css";
import AddUser from "./AddUser";
import Header from "./Header";
import Search from "./Search";
import TableData from "./TableData";
import DataUser from "./Data.json";
import MyAppBar from "./MyAppBar";
const { v4: uuidv4 } = require("uuid");

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      hienThiForm: false,
      data: DataUser,
      searchText: "",
      editUserStatus: false,
      userEditObject: {},
    };
  }

  // thay đổi trạng thái
  doiTrangThai = () => {
    this.setState({
      hienThiForm: !this.state.hienThiForm,
    });
  };

  //lấy dl ra
  getTextSearch = (dl) => {
    // gán dl cho biến searchText
    this.setState({
      searchText: dl,
    });
    console.log("Dữ liệu bố nó nhận được : " + dl);
  };

  // lấy name,tel,permission ra
  getNewUserData = (name, tel, permission) => {
    // khai báo và đóng gói 1 item
    var item = {};
    item.id = uuidv4();
    item.name = name;
    item.tel = tel;
    item.permission = permission;

    //tạo 1 biến items để lấy dữ liệu
    var items = this.state.data;
    items.push(item);

    this.setState({
      data: items,
    });

    // in ra form đã được đóng gói bằng biến items
    console.log(items);

    console.log(this.state.data);
  };

  // dùng để kết nối với tabledatarow thông qua hàm editUser -> editFun -> editFunClick -> editClick
  editUser = (user) => {
    console.log("ket noi thanh cong");

    //

    //đẩy dữ liệu vào hàm state
    this.setState({
      userEditObject: user,
    });

    console.log(user);
  };
  //
  getUserEditInfoApp = (info) => {
    console.log("thong tin da sua xong : " + info.name);

    // so sánh id để hiển thị dl đã sửa ra bảng
    this.state.data.forEach((value, key) => {
      if (value.id === info.id) {
        value.name = info.name;
        value.tel = info.tel;
        value.permission = info.permission;
      }
    });
  };
  // nút xoá (lấy id của p,tu truyen len tabeldata len app ròi loại bỏ)
  deleteUser = (idUser) => {
   
    var tempData = this.state.data.filter(item => item.id !== idUser);
    this.setState({
      data: tempData,
    });

      // console.log(idUser);
  };

  // dùng để mở form sửa thông qua biến changeEditUserStatus bằng nút onClick Sửa và Save
  changeEditUserStatus = () => {
    this.setState({
      editUserStatus: !this.state.editUserStatus,
    });
  };

  render() {
    var ketqua = [];
    // tìm kiếm bằng hình thức so sánh nếu khác -1 thì cho ra kq tìm kiếm được
    this.state.data.forEach((item) => {
      if (item.name.indexOf(this.state.searchText) !== -1) {
        ketqua.push(item);
      }
    });
    console.log(ketqua);
    // console.log(this.state.data)
    return (
      <div>
        <MyAppBar/>
        <Header />
        <div className="searchForm">
          <div className="container">
            <div className="row">
              <Search
                getUserEditInfoApp={(info) => this.getUserEditInfoApp(info)}
                checkConectProps={(dl) => this.getTextSearch(dl)}
                ketNoi={() => this.doiTrangThai()}
                hienThiForm={this.state.hienThiForm}
                editUserStatus={this.state.editUserStatus}
                changeEditUserStatus={() => this.changeEditUserStatus()}
                userEditObject={this.state.userEditObject}
              />
              {/* trả về in ra kq tìm kiếm */}
              <TableData
                editFun={(user) => this.editUser(user)}
                dataUserProps={ketqua}
                changeEditUserStatus={() => this.changeEditUserStatus()}
                deleteUser={(idUser) => this.deleteUser(idUser)}
              />
              <AddUser
                add={(name, tel, permission) =>
                  this.getNewUserData(name, tel, permission)
                }
                hienThiForm={this.state.hienThiForm}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
