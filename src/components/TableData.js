import React, { Component } from "react";
import TableDataRow from "./TableDataRow";

class TableData extends Component {

    // dùng để xoá 
  deleteButtonClick = (idUser) => {
      this.props.deleteUser(idUser);
  }
  // Dùng hàm map để duyệt qua các phần tử để lấy ra dữ liệu từ json truyền qua bảng
  mappingDataUser = () =>
    this.props.dataUserProps.map((value, key) => (
      <TableDataRow
      deleteButtonClick={(idUser) => this.deleteButtonClick(idUser)}
        editFunClick={(user) => this.props.editFun(value)}
        name={value.name}
        stt={key}
        id={value.id}
        tel={value.tel}
        permission={value.permission}
        key={key}
        changeEditUserStatus ={ () =>this.props.changeEditUserStatus() }

      />
    ));

  render() {
    return (
      <div className="col">
        {/* b4-table-special */}
        <table className="table table-striped table-hover ">
          <thead>
            <tr>
              <th>STT</th>
              <th>Tên</th>
              <th>Điện Thoại</th>
              <th>Quyền</th>
              <th>Thao tác</th>
            </tr>
          </thead>
          <tbody>{this.mappingDataUser()}</tbody>
        </table>
      </div>
    );
  }
}

export default TableData;
