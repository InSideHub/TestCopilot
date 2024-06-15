# Human Resources Project - Client

This is the client-side of the Human Resources project. It is built using React and interacts with the server-side to manage employee data. Below is an overview of the project structure:

## Project Structure

```
human-resources-project
├── client
|   ├── public
|   |   └── index.html
|   ├── src
|   |   ├── App.js
|   |   ├── index.js
|   |   ├── components
|   |   |   ├── EmployeeList.js
|   |   |   ├── EmployeeItem.js
|   |   |   ├── AddEmployee.js
|   |   |   ├── EmployeeReports.js
|   |   |   ├── EmployeePositions.js
|   |   |   ├── EmployeeBranches.js
|   |   |   ├── EmployeeRegions.js
|   |   |   ├── EmployeeProvinces.js
|   |   |   ├── EmployeeLocations.js
|   |   |   └── EmployeeInternalMovements.js
|   |   └── api
|   |       └── index.js
|   ├── package.json
|   └── README.md
├── server
|   ├── index.js
|   ├── controllers
|   |   ├── employeesController.js
|   |   ├── reportsController.js
|   |   ├── positionsController.js
|   |   ├── branchesController.js
|   |   ├── regionsController.js
|   |   ├── provincesController.js
|   |   ├── locationsController.js
|   |   └── internalMovementsController.js
|   ├── models
|   |   ├── employeeModel.js
|   |   ├── reportModel.js
|   |   ├── positionModel.js
|   |   ├── branchModel.js
|   |   ├── regionModel.js
|   |   ├── provinceModel.js
|   |   ├── locationModel.js
|   |   └── internalMovementModel.js
|   ├── routes
|   |   ├── employeeRoutes.js
|   |   ├── reportRoutes.js
|   |   ├── positionRoutes.js
|   |   ├── branchRoutes.js
|   |   ├── regionRoutes.js
|   |   ├── provinceRoutes.js
|   |   ├── locationRoutes.js
|   |   └── internalMovementRoutes.js
|   ├── db
|   |   └── db.sql
|   ├── package.json
|   └── README.md
└── README.md
```

## Client Side

The client-side of the project is located in the `client` directory. It contains the React application that interacts with the server-side to manage employee data.

### `public/index.html`

This file is the HTML template for the React application. It provides the root element where the React components are rendered.

### `src/App.js`

This file is the main component of the React application. It renders the different components and handles the state and logic of the application.

### `src/index.js`

This file is the entry point of the React application. It renders the `App` component and mounts it to the DOM.

### Components

The `src/components` directory contains the following components:

- `EmployeeList.js`: Displays a list of employees.
- `EmployeeItem.js`: Represents a single employee in the list.
- `AddEmployee.js`: Provides a form to add a new employee.
- `EmployeeReports.js`: Displays the reports related to an employee.
- `EmployeePositions.js`: Displays the positions held by an employee.
- `EmployeeBranches.js`: Displays the branches where an employee works.
- `EmployeeRegions.js`: Displays the regions where an employee is assigned.
- `EmployeeProvinces.js`: Displays the provinces where an employee is located.
- `EmployeeLocations.js`: Displays the locations where an employee is assigned.
- `EmployeeInternalMovements.js`: Displays the internal movements of an employee.

### `src/api/index.js`

This file provides functions to interact with the server-side API. It handles HTTP requests and responses for employee data.

## Getting Started

To run the client-side of the Human Resources project, follow these steps:

1. Install the dependencies by running `npm install` in the `client` directory.
2. Start the development server by running `npm start`.
3. Open your browser and navigate to `http://localhost:3000` to access the application.

For more information, refer to the server-side documentation in the `server/README.md` file.

Please note that the server-side of the project must be running for the client-side to function properly.

This file is intentionally left blank.