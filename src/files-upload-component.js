import React, {useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router";
import {Link} from 'react-router-dom';

const FilesUploadComponent=()=> {
    let navigate=useNavigate();
    const [state,setState]=useState({      
         profileImg: "",
         flag:false,
         redirect:"/list"
    });

  
  const onFileChange=(e) =>{
    setState({ profileImg: e.target.files[0] });
  }
  
  const onSubmit=(e)=> {
    e.preventDefault();
    const formData = new FormData();
    formData.append("profileImg", state.profileImg);
    axios
      .post("http://localhost:4000/api/user-profile", formData, {})
      .then((res) => {
        setState({flag:true});
        console.log(res);
        navigate("/list");
      });

  }
  return (
    <div>
      <figure>
        <blockquote className="blockquote">
          <p>A site where you can upload images</p>
        </blockquote>
        <figcaption className="blockquote-footer">
          made with multer and reactJs
        </figcaption>
      </figure>
      <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="container-md">
            <Link className="btn btn-primary stretched-link" to="/list">
              Uploads
              <br />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-upload"
                viewBox="0 0 16 16"
              >
                <path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5z" />
                <path d="M7.646 1.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 2.707V11.5a.5.5 0 0 1-1 0V2.707L5.354 4.854a.5.5 0 1 1-.708-.708l3-3z" />
              </svg>
            </Link>
            <p>To get all Uploads click on Uploads</p>
          </div>
        </nav>
      </div>
      <br />
      <div className="container">
        <form onSubmit={onSubmit}>
          <div className="input-group mb-3">
            <input
              type="file"
              className="form-control"
              onChange={onFileChange}
            />
            <button className="btn btn-outline-secondary" type="submit">
              Upload
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-upload"
                viewBox="0 0 16 16"
              >
                <path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5z" />
                <path d="M7.646 1.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 2.707V11.5a.5.5 0 0 1-1 0V2.707L5.354 4.854a.5.5 0 1 1-.708-.708l3-3z" />
              </svg>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
export default FilesUploadComponent;