import React, { Component } from "react";

class AddUser extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     trangThaiChinhSua1: false
  //   }
  // }
  
    // tạo ra hàm isChange để lấy name và value của form nhập
    constructor(props) {
      super(props);
      this.state = {
        id: "",
        name: "",
        tel: "",
        permission: ""
      }
    }

  isChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;

    this.setState({
      [name]: value
    });

      //packed to item
    //   var item = {};
    //   item.id = this.state.id
    //   item.name = this.state.name
    //   item.tel = this.state.tel
    //   item.permission = this.state.permission
    // console.log(item)
  };

  //Kiemtratrangthai
  kiemTraTrangThai = () => {
    if (this.props.hienThiForm === true) {
      return (
        <div className="col">
          <form>
          <div className="card mt-2">
            <div className="card-header">You want add user?</div>
            <div className="card-body">
               {/* UserName */}
              <div className="form-group">
                <input
                  onChange={(event) => this.isChange(event)}
                  type="text"
                  className="form-control"
                  name="name"
                  placeholder="User name"
                />
              </div>
              {/* Phone */}
              <div className="form-group">
                <input
                  onChange={(event) => this.isChange(event)}
                  name="tel"
                  type="text"
                  className="form-control"
                  placeholder="Phone"
                />
              </div>
               {/* Permission */}
              <div className="form-group">
                <select
                  className="custom-select"
                  name="permission"
                  onChange={(event) => this.isChange(event)}
                  required
                >
                  <option value>Choice of permissions </option>
                  <option value={1}>Admin</option>
                  <option value={2}>Moderator</option>
                  <option value={3}>Normal</option>
                </select>
              </div>
              {/* Nút submit */}
              <div className="form-group">
                <input type="reset" className="btn btn-block btn-success" onClick={(name,tel,permission)=>this.props.add(this.state.name,this.state.tel,this.state.permission) }value="Add User"/>
              </div>
            </div>
          </div>
          </form> 
        </div>
        // muốn reset lại forrm đã nhập thì đổi div thành input thêm type="reset" bỏ Add User vào value và thêm <form> </form> vào form
      );
    }
  };

  // nút thay đổi trạng thái
  // thayDoiTrangThai1 = () => {
  //   this.setState({
  //     trangThaiChinhSua1: !this.state.trangThaiChinhSua1

  //   });
  // }

  // hiển thị nút
  // hienThiNut1 = () => {
  //   if(this.state.trangThaiChinhSua1  === true){
  //     return <div className="btn btn-block btn-outline-secondary" onClick={()=> this.thayDoiTrangThai1()}>Đóng lại</div>

  //   }else{
  //     return <div className="btn btn-block btn-outline-info" onClick={()=> this.thayDoiTrangThai1()}>Thêm mới</div>

  //   }
  // }
  // hiển thị form
  // hienThiForm1 = () => {
  //   if(this.state.trangThaiChinhSua1  === true){
  //     return (
  //     <div className="card mt-2">
  //     <div className="card-header">Bạn muốn thêm User ?</div>
  //     <div className="card-body">
  //       <div className="form-group">
  //         <input
  //           type="text"
  //           className="form-control"
  //           placeholder="Tên user"
  //         />
  //       </div>
  //       <div className="form-group">
  //         <input
  //           type="text"
  //           className="form-control"
  //           placeholder="Điện thoại"
  //         />
  //       </div>
  //       <div className="form-group">
  //         <select className="custom-select" required>
  //           <option value>Lựa chọn quyền </option>
  //           <option value={1}>Admin</option>
  //           <option value={2}>Moderator</option>
  //           <option value={3}>Member</option>
  //         </select>
  //       </div>
  //       <div className="form-group">
  //         <div className="btn btn-block btn-success">Thêm mới</div>
  //       </div>
  //     </div>
  //   </div>)
  //   }
  // }

  render() {
    return (
      <div>
        {/* 
          {this.hienThiNut1()} */}
        {/* {this.hienThiForm1()} */}
        {this.kiemTraTrangThai()}
      </div>
    );
  }
}

export default AddUser;
