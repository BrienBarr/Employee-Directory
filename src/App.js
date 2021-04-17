import React from 'react';
import './App.css';
import API from './utils/API'
import Search from './components/Search';
import Table from './components/Table';

class App extends React.Component {

  state = {
    employees: [],
    allEmployees: [],
    search: "",
    error: "",
    message: ""
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
      if(emp.name.first.includes(this.state.search) || emp.name.last.includes(this.state.search)){
        return emp;
      }
      return false;
    });

    console.log(filtered_emp);
    if(filtered_emp.length === 0){
      this.setState({ employees: this.state.allEmployees });
      this.setState({ message: 'No results found.' })
    } else {
      this.setState({employees: filtered_emp} );
      console.log(this.state.employees);
    }

  };

  resetSearch = event => {
    event.preventDefault();
    this.setState({ employees: this.state.allEmployees });
    this.setState({ search: "" });
    this.setState({ message: "" });
    event.target.parentElement[0].value = "";
  };

  render() {
    return (
      <div className="card w-100 text-center">
        <div className="card-header bg-primary text-white">
          <h1>Employee Directory</h1>
        </div>
        <Search 
          employees = {this.state.employees}
          search = {this.state.search}
          searchResults = {this.state.searchResults}
          handleInputChange = {this.handleInputChange}
          handleFormSubmit = {this.handleFormSubmit}
          resetSearch = {this.resetSearch}
          message = {this.state.message}
        />
        <Table employees = {this.state.employees}/>
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
