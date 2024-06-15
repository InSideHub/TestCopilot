import React, { useState, useEffect } from 'react';
import EmployeeItem from './EmployeeItem';
import api from '../api';

const EmployeeList = () => {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    const fetchEmployees = async () => {
      try {
        const response = await api.get('/employees');
        setEmployees(response.data);
      } catch (error) {
        console.error('Error fetching employees:', error);
      }
    };

    fetchEmployees();
  }, []);

  return (
    <div>
      <h2>Employee List</h2>
      {employees.length === 0 ? (
        <p>No employees found.</p>
      ) : (
        <ul>
          {employees.map((employee) => (
            <EmployeeItem key={employee.nro_empleado} employee={employee} />
          ))}
        </ul>
      )}
    </div>
  );
};

export default EmployeeList;