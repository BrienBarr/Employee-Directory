import React from "react";

function Search (props) {
  return(
    <nav className="navbar navbar-light bg-light d-flex justify-content-center">
        <form className="form-inline" onSubmit={props.handleFormSubmit}>
          <input 
            className="form-control mr-sm-2" 
            type="search" 
            placeholder="Search By Name" 
            aria-label="Search By Name"
            onChange={props.handleInputChange}
          />
          <button 
            className="btn btn-outline-primary my-2 my-sm-0" 
            type="submit"
          >
            Search
          </button>
          <button 
            className="btn btn-outline-primary my-2 my-sm-0" 
            type=""
            onClick={props.resetSearch}
          >
            Reset
          </button>
        </form>
      </nav>
  )
}

export default Search;