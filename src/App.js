import React from "react";
import { Link } from "react-router-dom";
import logo from './logo.svg';
import './App.css';


// const styles = {
//   container: {
//     width: 100 + "%"
//   }
// }

function App() {
  return (
    <div className="container">
      <header className="text-center">
        <h1>Employee Directory</h1>
      </header>
      <hr/>
      <nav className="navbar navbar-light bg-light d-flex justify-content-center">
        <form className="form-inline">
          <input 
          className="form-control mr-sm-2" 
          type="search" 
          placeholder="Search" 
          aria-label="Search"
          />
          <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
        </form>
        <form className="form-inline">
          <input 
          className="form-control mr-sm-2" 
          type="search" 
          placeholder="Search" 
          aria-label="Search"
          />
          <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
        </form>
      </nav>
      <hr/>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">First</th>
            <th scope="col">Last</th>
            <th scope="col">Location</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>Mark</td>
            <td>Otto</td>
            <td>Houston, TX</td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>Indianapolis, IN</td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td>Larry</td>
            <td>the Bird</td>
            <td>French Lick, IN</td>
          </tr>
        </tbody>
      </table>
      <footer className="footer footer-dark bg-dark">
        <div className="container">
          <strong>Brien Barr</strong><br/>
          {/* <Link className="navbar-brand" to="mailto:brien.barr3320@gmail.com">
          brien.barr3320@gmail.com
          </Link> */}
          <br/>
          PH: 317-910-6049
        </div>
      </footer>
  </div>
  );
}

export default App;
