import React from "react";
import Alert from "../Alert"

function Search (props) {
  
  const styles = {
    nav: {
      backgroundColor: "#c5c5c5"
    },
    
    input: {
      marginRight: "5px",
      width: "230px"
    }
  }

  return(
    <div>
      <nav className="navbar d-flex justify-content-center" style={styles.nav}>
        <form className="form-inline" onSubmit={props.handleFormSubmit}>
          <input 
            className="form-control mr-sm-2" 
            style={styles.input}
            type="search" 
            placeholder="Filter By First or Last Name" 
            aria-label="Filter By First or Last Name"
            onChange={props.handleInputChange}
          />
        </form>
      </nav>
      <Alert 
        message={props.employees.length === 0 ? "No results found." : ""}
      >
      </Alert>
    </div>
  )
}

export default Search;