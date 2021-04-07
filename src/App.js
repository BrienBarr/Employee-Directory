import React from 'react';
// import { Link } from "react-router-dom";
// import logo from './logo.svg';
import './App.css';
import Nav from './components/Nav';

function App() {
  return (
    <div className="container">
      <header className="text-center">
        <h1>Employee Directory</h1>
      </header>
      <hr/>
      <Nav />
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
          <br/>
          PH: 317-910-6049
        </div>
      </footer>
  </div>
  );
}

export default App;
