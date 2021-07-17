import React, { Component } from 'react';

class EditUser extends Component {
    constructor(props) {
        super(props);
        // lấy giá trị ban đầu
        this.state = {
            id : this.props.userEditObject.id,
            name : this.props.userEditObject.name,
            tel : this.props.userEditObject.tel,
            permission : this.props.userEditObject.permission
        }
    }

    // sử dụng 1 state để lưu trữ thông tin trong qá trình sửa
    isChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        this.setState({
            [name]: value 
        })
    }
    // nút lưu sẽ lấy thông tin

    saveButton = () => {
        const {id,name,tel,permission} = this.state;
        const info = {
            id,
            name,
            tel,
            permission


        }
        // var info= {};
        // info.id = this.state.id;
        // info.name = this.state.name;
        // info.tel = this.state.tel;
        // info.permission = this.state.permission;

        // console.log("info la : " + obj.name)

        this.props.getUserEditInfo(info);
        this.props.changeEditUserStatus(); // an form
    }

    render() {
        console.log(this.state)
        return (
            <div className="col-12 mb-2">
          <form>
          <div className="card mt-2 text-white bg-light">
            <div className="text-center card-header text-danger">BẠN MUỐN SỬA THÔNG TIN TRONG USER</div>
            <div className="card-body">
               {/* UserName */}
              <div className="form-group">
                <input
                onChange={(event) => this.isChange(event)}
                defaultValue={this.props.userEditObject.name}
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

                defaultValue={this.props.userEditObject.tel}
                  name="tel"
                  type="text"
                  className="form-control"
                  placeholder="Phone"
                />
              </div>
               {/* Permission */}
              <div className="form-group">
                <select
                onChange={(event) => this.isChange(event)}

                defaultValue={this.props.userEditObject.permission}
                  className="custom-select"
                  name="permission"
                
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
                <input type="button" className="btn btn-block btn-danger" value="Save" onClick={() => this.saveButton()}/>
              </div>
            </div>
          </div>
          </form> 
        </div>
        );
    }
}

export default EditUser;