import axios from "axios";

// Export an object containing methods we'll use for accessing the Dog.Ceo API

export default {
  getEmployees: function() {
    return axios.get("https://randomuser.me/api/?results=100&nat=us");
  },

  getEmployeesByName: function(search, employees, results) {
    return results = employees.filter(search => {
      // search === employees.name.last || search === employees.name.first; 
    })
  }
};
