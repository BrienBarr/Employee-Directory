import React from 'react';
import './App.css';
import API from './utils/API'
import Search from './components/Search';
import Table from './components/Table';

class App extends React.Component {

  state = {
    employees: [],
    filter: "",
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
    this.setState({ filter: event.target.value });
  };

  filterEmployees = () => {
    if(this.state.filter === ""){
      return this.state.employees;
    } else {
      let filtered_employees = this.state.employees.filter( emp => {
        let filter = this.state.filter.toLowerCase();
        let firstName = emp.name.first.toLowerCase();
        let lastName = emp.name.last.toLowerCase();
        return firstName.includes(filter) || lastName.includes(filter);
      });
      return filtered_employees;
    }
  }

  handleFormSubmit = event => {
    event.preventDefault();
  };

  render() {
    return (
      <div className="card w-100 text-center">
        <div className="card-header bg-primary text-white">
          <h1>Employee Directory</h1>
        </div>
        <Search 
          employees = {this.filterEmployees()}
          filter = {this.state.filter}
          handleFormSubmit = {this.handleFormSubmit}
          handleInputChange = {this.handleInputChange}
        />
        <Table employees = {this.filterEmployees()}/>
        <footer className="footer footer-dark bg-dark">
          <div className="container">
            <strong>Created by Brien Barr 2021</strong>
          </div>
        </footer>
    </div>
    );
  }
}

export default App;
