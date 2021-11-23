import React, { Component } from "react";
import axios from "axios";

export default class FilesUploadComponent extends Component {
  constructor(props) {
    super(props);
    
    this.onFileChange = this.onFileChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    
    this.state = {
      profileImg: "",
      flag:false
    };
  }
  
  onFileChange(e) {
    this.setState({ profileImg: e.target.files[0] });
  }
  
  onSubmit(e) {
    e.preventDefault();
    const formData = new FormData();
    formData.append("profileImg", this.state.profileImg);
    axios
      .post("http://localhost:4000/api/user-profile", formData, {})
      .then((res) => {
        this.setState({flag:true});
        console.log(res);
      });

  }
  render() {
    if(!this.state.flag){
        return (
        <div className="container">
          <div className="row">
            <form onSubmit={this.onSubmit}>
              <div className="form-group">
                <input type="file" onChange={this.onFileChange} />
              </div>
              <div className="form-group">
                <button className="btn btn-primary" type="submit">
                  Upload
                </button>
              </div>
            </form>
          </div>
        </div>
        );
      }else if(this.state.flag){
        return (
          <div className="d-flex justify-content-center">
            <div className="spinner-border" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
          </div>
        );
      }
  }
}
