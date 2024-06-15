# Human Resources Project

This is a Human Resources project that utilizes React for the frontend interface, MySQL as the database, and JavaScript for the backend logic.

## Project Structure

The project follows the following directory structure:

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

The client side of the project is located in the `client` directory. It consists of the following files and directories:

- `client/public/index.html`: This file is the HTML template for the React application.
- `client/src/App.js`: This file is the main component of the React application. It renders the different components and handles the state and logic of the application.
- `client/src/index.js`: This file is the entry point of the React application. It renders the `App` component and mounts it to the DOM.
- `client/src/components/EmployeeList.js`: This file exports the `EmployeeList` component, which displays a list of employees.
- `client/src/components/EmployeeItem.js`: This file exports the `EmployeeItem` component, which represents a single employee in the list.
- `client/src/components/AddEmployee.js`: This file exports the `AddEmployee` component, which provides a form to add a new employee.
- `client/src/components/EmployeeReports.js`: This file exports the `EmployeeReports` component, which displays the reports related to an employee.
- `client/src/components/EmployeePositions.js`: This file exports the `EmployeePositions` component, which displays the positions held by an employee.
- `client/src/components/EmployeeBranches.js`: This file exports the `EmployeeBranches` component, which displays the branches where an employee works.
- `client/src/components/EmployeeRegions.js`: This file exports the `EmployeeRegions` component, which displays the regions where an employee is assigned.
- `client/src/components/EmployeeProvinces.js`: This file exports the `EmployeeProvinces` component, which displays the provinces where an employee is located.
- `client/src/components/EmployeeLocations.js`: This file exports the `EmployeeLocations` component, which displays the locations where an employee is assigned.
- `client/src/components/EmployeeInternalMovements.js`: This file exports the `EmployeeInternalMovements` component, which displays the internal movements of an employee.
- `client/src/api/index.js`: This file exports the functions to interact with the server-side API.

## Server Side

The server side of the project is located in the `server` directory. It consists of the following files and directories:

- `server/index.js`: This file is the entry point of the server-side application. It sets up the server and handles the routing.
- `server/controllers/employeesController.js`: This file exports the `employeesController` module, which contains the logic for handling employee-related requests.
- `server/controllers/reportsController.js`: This file exports the `reportsController` module, which contains the logic for handling report-related requests.
- `server/controllers/positionsController.js`: This file exports the `positionsController` module, which contains the logic for handling position-related requests.
- `server/controllers/branchesController.js`: This file exports the `branchesController` module, which contains the logic for handling branch-related requests.
- `server/controllers/regionsController.js`: This file exports the `regionsController` module, which contains the logic for handling region-related requests.
- `server/controllers/provincesController.js`: This file exports the `provincesController` module, which contains the logic for handling province-related requests.
- `server/controllers/locationsController.js`: This file exports the `locationsController` module, which contains the logic for handling location-related requests.
- `server/controllers/internalMovementsController.js`: This file exports the `internalMovementsController` module, which contains the logic for handling internal movement-related requests.
- `server/models/employeeModel.js`: This file exports the `employeeModel` module, which defines the schema and methods for interacting with the employees table in the database.
- `server/models/reportModel.js`: This file exports the `reportModel` module, which defines the schema and methods for interacting with the reports table in the database.
- `server/models/positionModel.js`: This file exports the `positionModel` module, which defines the schema and methods for interacting with the positions table in the database.
- `server/models/branchModel.js`: This file exports the `branchModel` module, which defines the schema and methods for interacting with the branches table in the database.
- `server/models/regionModel.js`: This file exports the `regionModel` module, which defines the schema and methods for interacting with the regions table in the database.
- `server/models/provinceModel.js`: This file exports the `provinceModel` module, which defines the schema and methods for interacting with the provinces table in the database.
- `server/models/locationModel.js`: This file exports the `locationModel` module, which defines the schema and methods for interacting with the locations table in the database.
- `server/models/internalMovementModel.js`: This file exports the `internalMovementModel` module, which defines the schema and methods for interacting with the internal movements table in the database.
- `server/routes/employeeRoutes.js`: This file exports the `employeeRoutes` module, which defines the routes for employee-related requests.
- `server/routes/reportRoutes.js`: This file exports the `reportRoutes` module, which defines the routes for report-related requests.
- `server/routes/positionRoutes.js`: This file exports the `positionRoutes` module, which defines the routes for position-related requests.
- `server/routes/branchRoutes.js`: This file exports the `branchRoutes` module, which defines the routes for branch-related requests.
- `server/routes/regionRoutes.js`: This file exports the `regionRoutes` module, which defines the routes for region-related requests.
- `server/routes/provinceRoutes.js`: This file exports the `provinceRoutes` module, which defines the routes for province-related requests.
- `server/routes/locationRoutes.js`: This file exports the `locationRoutes` module, which defines the routes for location-related requests.
- `server/routes/internalMovementRoutes.js`: This file exports the `internalMovementRoutes` module, which defines the routes for internal movement-related requests.
- `server/db/db.sql`: This file contains the SQL script to create the database tables and insert initial data.
- `server/package.json`: This file is the configuration file for npm. It lists the dependencies and scripts for the server-side application.
- `server/README.md`: This file contains the documentation for the server-side application.

## Database

The project uses MySQL as the database. The database schema includes the following tables:

- `empleados`: Stores information about employees, including their personal details, contact information, and employment history.
- `informes`: Stores information about reports, including their details and the employee they are associated with.
- `cargos`: Stores information about job positions, including their descriptions and salary ranges.
- `sucursales`: Stores information about branches, including their names, addresses, and contact details.
- `regiones`: Stores information about regions, including their descriptions.
- `provincias`: Stores information about provinces, including their names and the region they belong to.
- `localidades`: Stores information about locations, including their names, region, province, and the branch they belong to.
- `movimientos_internos`: Stores information about internal movements, including the employee, the current position, the previous position, and the date of the movement.

The database setup script is located in the `server/db/db.sql` file.

Please note that the project structure and database setup provided here are just examples. You may need to modify them according to your specific requirements and preferences.