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
    allEmployees: [],
    search: "",
    searchResults: [],
    error: ""
  };

  componentDidMount() {
    API.getEmployees()
      .then(res => {
        this.setState({ employees: res.data.results });
        this.setState({ allEmployees: res.data.results });
      })
      .catch(err => console.log(err));
  }

  handleInputChange = event => {
    console.log(event.target.value)
    this.setState({ search: event.target.value });
  };

  handleFormSubmit = event => {
    
    event.preventDefault();
    
    let filtered_emp = this.state.employees.filter( emp => {
      if(emp.name.first === this.state.search || emp.name.last === this.state.search){
        return emp;
      }
      // return true;
    });
    console.log(filtered_emp);
    if(filtered_emp.length === 0){
      this.setState({ employees: this.state.allEmployees });
    } else {
      this.setState({employees: filtered_emp} );
      console.log(this.state.employees);
    }
    
  };

  render() {
    console.log(this.state);
    return (
      <div className="card text-center">
        <div className="card-header bg-primary text-white">
          Employee Directory
        </div>
        <Nav 
          employees = {this.state.employees}
          search = {this.state.search}
          searchResults = {this.state.searchResults}
          handleInputChange = {this.handleInputChange}
          handleFormSubmit = {this.handleFormSubmit}
        />
        <Table employees = {this.state.employees}/>
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
