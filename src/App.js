import React from 'react';
// import { Link } from "react-router-dom";
// import logo from './logo.svg';
import './App.css';
import API from './utils/API'
import Nav from './components/Nav';
import Table from './components/Table';

class App extends React.Component {

  state = {
    employees: [],
    error: ""
  };

  componentDidMount() {
    API.getEmployees()
      .then(res => this.setState({ employees: res.data.results }))
      .catch(err => console.log(err));
  }

  render() {
    console.log(this.state);
    return (
      <div className="card text-center">
        <div className="card-header bg-primary text-white">
          Employee Directory
        </div>
        <Nav />
        <Table employees={this.state.employees}/>
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
}

export default App;
