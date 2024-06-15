import React from 'react';
import EmployeeList from './components/EmployeeList';
import AddEmployee from './components/AddEmployee';
import EmployeeReports from './components/EmployeeReports';
import EmployeePositions from './components/EmployeePositions';
import EmployeeBranches from './components/EmployeeBranches';
import EmployeeRegions from './components/EmployeeRegions';
import EmployeeProvinces from './components/EmployeeProvinces';
import EmployeeLocations from './components/EmployeeLocations';
import EmployeeInternalMovements from './components/EmployeeInternalMovements';

function App() {
  return (
    <div>
      <h1>Human Resources App</h1>
      <h2>Employee List</h2>
      <EmployeeList />
      <h2>Add Employee</h2>
      <AddEmployee />
      <h2>Employee Reports</h2>
      <EmployeeReports />
      <h2>Employee Positions</h2>
      <EmployeePositions />
      <h2>Employee Branches</h2>
      <EmployeeBranches />
      <h2>Employee Regions</h2>
      <EmployeeRegions />
      <h2>Employee Provinces</h2>
      <EmployeeProvinces />
      <h2>Employee Locations</h2>
      <EmployeeLocations />
      <h2>Employee Internal Movements</h2>
      <EmployeeInternalMovements />
    </div>
  );
}

export default App;