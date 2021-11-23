import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import axios from 'axios';
import {Link} from 'react-router-dom';
export class List extends React.Component{
    constructor(props){
      super(props);
      this.state={data:[]}
    }
    componentDidMount(){
      axios
        .get("http://localhost:4000/api")
        .then((res) => {
         this.setState({data:res.data.users})
          console.log(this.state.data);
        });
    }
    renderedlist(){
    return (this.state.data.map((x)=>{
      return (
        <ul className="list-group" key={x._id}>
          <li className="list-group-item d-flex justify-content-between align-items-center">
            <img
              src={x.profileImg}
              width="100px"
              height="100px"
              alt={x._id}
              className="img-thumbnail"
            />
            <a
              className="badge bg-primary rounded-pill"
              download
              href={x.profileImg}
            >
              <button type="button" className="btn btn-primary">
                Download
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-download"
                  viewBox="0 0 16 16"
                >
                  <path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5z" />
                  <path d="M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3z" />
                </svg>
              </button>
            </a>
          </li>
        </ul>
      );
    }))};
    render(){
      return (
        <div className="container">
          <div className="header ">
            <Link to="/">
              <button className="btn btn-primary">
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
            </Link>

          </div>
          <br/>
          {this.renderedlist()}
        </div>
      );
    }
}

export default List;
