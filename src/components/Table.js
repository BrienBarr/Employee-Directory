import React from 'react';

function Table(props) {
  const { employees } = props;
  const [sortField, setSortField] = React.useState(null);
  const [sortDirection, setSortDirection] = React.useState('ascending');
  
  let sortedEmployees = [...employees];

  sortedEmployees.sort((a, b) => {
    let aVal;
    let bVal;
    let aVal2;
    let bVal2;

    switch (sortField){
      case 'last':
        aVal = a.name.last;
        bVal = b.name.last;
        aVal2 = a.name.first;
        bVal2 = b.name.first;
        break;
      case 'email':
        aVal = a.email;
        bVal = b.email;
        break;
      case 'location':
        aVal = a.location.state;
        bVal = b.location.state;
        aVal2 = a.location.city;
        bVal2 = b.location.city;
        break;
      default:
        aVal = a.name.last;
        bVal = b.name.last;
        aVal2 = a.name.first;
        bVal2 = b.name.first;
    }

    if (aVal < bVal) {
      return sortDirection === 'ascending' ? -1 : 1;
    } else if (aVal > bVal) {
      return sortDirection === 'ascending' ? 1 : -1;
    } else {
      if (aVal2 < bVal2){
        return sortDirection === 'ascending' ? -1 : 1;
      } else if (aVal2 > bVal2){
        return sortDirection === 'ascending' ? 1 : -1;
      }
      return 0;
    }
  });  
  
  return (
    <table className="table">
        <thead>
          <tr>
            <th scope="col"></th>
            <th scope="col">First</th>
            <th 
              scope="col" 
              onClick={() => setSortField('last')}
            >
              Last
              <i className="fas fa-arrow-up" onClick={() => setSortDirection('ascending')}></i>
              <i className="fas fa-arrow-down" onClick={() => setSortDirection('descending')}></i>
            </th>
            <th 
              scope="col" 
              onClick={() => setSortField('email')}
            >
              E-mail
              <i className="fas fa-arrow-up" onClick={() => setSortDirection('ascending')}></i>
              <i className="fas fa-arrow-down" onClick={() => setSortDirection('descending')}></i>
            </th>
            <th 
              scope="col" 
              onClick={() => setSortField('location')}
            >
              Location
              <i className="fas fa-arrow-up" onClick={() => setSortDirection('ascending')}></i>
              <i className="fas fa-arrow-down" onClick={() => setSortDirection('descending')}></i>
            </th>
          </tr>
        </thead>
        <tbody>
          {sortedEmployees.map(
            item => {
              return (
                  <tr key={item.email}>
                    <td><img src={item.picture.thumbnail} alt={item.name.first + item.name.last} /></td>
                    <td>{item.name.first}</td>
                    <td>{item.name.last}</td>
                    <td>{item.email}</td>
                    <td>{item.location.city}, {item.location.state}</td>
                  </tr>
              )
            }
          )}
        </tbody>
      </table>
  )
};

export default Table;