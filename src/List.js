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
            image
            <a
              className="badge bg-primary rounded-pill"
              download
              href={x.profileImg}
            >
              <button type="button" className="btn btn-primary">
                Download
              </button>
            </a>
          </li>
        </ul>
      );
    }))};
    render(){
      return (
        <div className="container">
{this.renderedlist()}
        </div>
      );
    }
}

export default List;
