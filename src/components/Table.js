import React from 'react';

function Table(props) {
  return (
    <table className="table">
        <thead>
          <tr>
            <th scope="col"></th>
            <th scope="col">First</th>
            <th scope="col">Last</th>
            <th scope="col">E-mail</th>
            <th scope="col">Location</th>
          </tr>
        </thead>
        <tbody>
          {props.employees.map(
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