import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import FilesUploadComponent from "./files-upload-component";
import List from "./List";
import {BrowserRouter,Route,Routes} from "react-router-dom";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" exact element={<FilesUploadComponent />} />
          <Route path="/list" exact element={<List/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
