import React from 'react';
// import { Link } from "react-router-dom";
// import logo from './logo.svg';
import './App.css';
import Nav from './components/Nav';
import Table from './components/Table';

function App() {
  return (
    <div className="card text-center">
      <div className="card-header bg-primary text-white">
        Employee Directory
      </div>
      <Nav />
      <Table />
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
