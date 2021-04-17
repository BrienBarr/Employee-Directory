import React from "react";
import Alert from "../Alert"
import "./style.css";

function Search (props) {
  return(
    <div>
      <nav className="navbar d-flex justify-content-center">
        <form className="form-inline" onSubmit={props.handleFormSubmit}>
          <input 
            className="form-control mr-sm-2" 
            type="search" 
            placeholder="Search By Name" 
            aria-label="Search By Name"
            onChange={props.handleInputChange}
          />
          <button 
            className="btn btn-success my-2 my-sm-0" 
            type="submit"
          >
            Search
          </button>
          <button 
            className="btn btn-danger my-2 my-sm-0" 
            type=""
            onClick={props.resetSearch}
          >
            Reset
          </button>
        </form>
      </nav>
      <Alert message={props.message}></Alert>
    </div>
  )
}

export default Search;