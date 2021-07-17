import React, { Component } from "react";

// quyền tương ứng với 
const enumPermison = {
    1:"Admin",
    2:"Moderator",
    3:"Normal"
}
  
class TableDataRow extends Component {
//   permissionShow = () => {
//     if (this.props.permission === 1) {
//       return "Admin";
//     } else if (this.props.permission === 2) {
//       return "Moderator";
//     } else {
//       return "Normal";
//     }
//   };

  
  editClick = () => {
    this.props.editFunClick();
    this.props.changeEditUserStatus();
  };
    // dùng để xoá 
  deleteButtonClick = (idUser) => {
    this.props.deleteButtonClick(idUser);
  }

  render() {
      
    return (
      <tr>
        <td>{this.props.stt + 1}</td>
        <td>{this.props.name}</td>
        <td>{this.props.tel}</td>
        <td>{enumPermison[this.props.permission]}</td>
        <td>
          <div className="btn-group">
            <div
              className="btn btn-warning sua"
              onClick={() => this.editClick()}
            >
              <i className="fa fa-edit" />
              Sửa
            </div>
            <div className="btn btn-danger xoa" onClick={(idUser) => this.deleteButtonClick(this.props.id)}> 
              <i className="fa fa-trash" />
              Xoá
            </div>
          </div>
        </td>
      </tr>
    );
  }
}

export default TableDataRow;
