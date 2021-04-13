import React from "react";

function Search (props) {
  return(
    <nav className="navbar navbar-light bg-light d-flex justify-content-center">
        <form className="form-inline" onSubmit={props.handleFormSubmit}>
        <label htmlFor="formControlSelect1">Filter By: </label>
        <select 
          className="form-control" 
          id="formControlSelect1"
          onChange={props.handleFilterChange}
        >
          <option>Last Name</option>
          <option>First Name</option>
          <option>City</option>
          <option>State</option>
        </select>
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