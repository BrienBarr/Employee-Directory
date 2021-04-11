import React from "react";

function Nav (props) {
  return(
    <nav className="navbar navbar-light bg-light d-flex justify-content-center">
        <form className="form-inline" onSubmit={props.handleFormSubmit}>
          <input 
            className="form-control mr-sm-2" 
            type="search" 
            placeholder="Search" 
            aria-label="Search"
            onChange={props.handleInputChange}
          />
          <button 
            className="btn btn-outline-success my-2 my-sm-0" 
            type="submit"
          >
            Search
          </button>
        </form>
        {/* <form className="form-inline">
          <input 
          className="form-control mr-sm-2" 
          type="search" 
          placeholder="Search" 
          aria-label="Search"
          />
          <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
        </form> */}
      </nav>
  )
}

export default Nav;