import React, { useState } from 'react';
import { FaSortUp, FaSortDown } from 'react-icons/fa';

const Table = ({ employees, handleEdit, handleDelete }) => {
  const [sortColumn, setSortColumn] = useState('');
  const [sortOrder, setSortOrder] = useState('');

  employees.forEach((employee, i) => {
    employee.id = i + 1;
  });

  const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: null,
  });

  const toggleSort = (column) => {
    if (column === sortColumn) {
      setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
    } else {
      setSortColumn(column);
      setSortOrder('asc');
    }
  };

  const getSortIcon = (column) => {
    if (column === sortColumn) {
      return sortOrder === 'asc' ? <FaSortUp /> : <FaSortDown />;
    }
    return null;
  };

  const sortedEmployees = [...employees].sort((a, b) => {
    if (sortColumn) {
      const aValue = a[sortColumn].toUpperCase();
      const bValue = b[sortColumn].toUpperCase();
      return sortOrder === 'asc' ? aValue.localeCompare(bValue) : bValue.localeCompare(aValue);
    }
    return 0;
  });

  return (
    <div className="contain-table">
      <table className="striped-table">
        <thead>
          <tr>
            <th>No.</th>
            <th onClick={() => toggleSort('firstName')}>
              First Name {getSortIcon('firstName')}
            </th>
            <th onClick={() => toggleSort('lastName')}>
              Last Name {getSortIcon('lastName')}
            </th>
            <th onClick={() => toggleSort('email')}>
              Email {getSortIcon('email')}
            </th>
            <th onClick={() => toggleSort('salary')}>
              Salary {getSortIcon('salary')}
            </th>
            <th onClick={() => toggleSort('date')}>
              Date {getSortIcon('date')}
            </th>
            <th colSpan={2} className="text-center">
              Actions
            </th>
          </tr>
        </thead>
        <tbody>
          {sortedEmployees.length > 0 ? (
            sortedEmployees.map((employee, i) => (
              <tr key={employee.id}>
                <td>{i + 1}</td>
                <td>{employee.firstName}</td>
                <td>{employee.lastName}</td>
                <td>{employee.email}</td>
                <td>{formatter.format(employee.salary)}</td>
                <td>{employee.date}</td>
                <td className="text-right">
                  <button onClick={() => handleEdit(employee.id)} className="button muted-button">
                    Edit
                  </button>
                </td>
                <td className="text-left">
                  <button onClick={() => handleDelete(employee.id)} className="button muted-button">
                    Delete
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={7}>No Employees</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
