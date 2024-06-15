# Server Side

This directory contains the server-side code for the Human Resources project.

## Project Structure

The server-side code follows the MVC (Model-View-Controller) architecture pattern. Here's an overview of the project structure:

- `index.js`: The entry point of the server-side application. It sets up the server and handles the routing.
- `controllers/`: This directory contains the controller modules that handle the business logic for different entities.
- `models/`: This directory contains the model modules that define the database schema and methods for interacting with the tables.
- `routes/`: This directory contains the route modules that define the API routes for different entities.
- `db/`: This directory contains the SQL script to create the database tables and insert initial data.
- `package.json`: The configuration file for npm. It lists the dependencies and scripts for the server-side application.
- `README.md`: This file contains the documentation for the server-side application.

## Controllers

- `employeesController.js`: Handles employee-related requests.
- `reportsController.js`: Handles report-related requests.
- `positionsController.js`: Handles position-related requests.
- `branchesController.js`: Handles branch-related requests.
- `regionsController.js`: Handles region-related requests.
- `provincesController.js`: Handles province-related requests.
- `locationsController.js`: Handles location-related requests.
- `internalMovementsController.js`: Handles internal movement-related requests.

## Models

- `employeeModel.js`: Defines the schema and methods for interacting with the employees table.
- `reportModel.js`: Defines the schema and methods for interacting with the reports table.
- `positionModel.js`: Defines the schema and methods for interacting with the positions table.
- `branchModel.js`: Defines the schema and methods for interacting with the branches table.
- `regionModel.js`: Defines the schema and methods for interacting with the regions table.
- `provinceModel.js`: Defines the schema and methods for interacting with the provinces table.
- `locationModel.js`: Defines the schema and methods for interacting with the locations table.
- `internalMovementModel.js`: Defines the schema and methods for interacting with the internal movements table.

## Routes

- `employeeRoutes.js`: Defines the routes for employee-related requests.
- `reportRoutes.js`: Defines the routes for report-related requests.
- `positionRoutes.js`: Defines the routes for position-related requests.
- `branchRoutes.js`: Defines the routes for branch-related requests.
- `regionRoutes.js`: Defines the routes for region-related requests.
- `provinceRoutes.js`: Defines the routes for province-related requests.
- `locationRoutes.js`: Defines the routes for location-related requests.
- `internalMovementRoutes.js`: Defines the routes for internal movement-related requests.

## Database

The database schema includes the following tables:

- `empleados`: Stores information about employees, including their personal details, contact information, and employment history.
- `informes`: Stores information about reports, including their details and the employee they are associated with.
- `cargos`: Stores information about job positions, including their descriptions and salary ranges.
- `sucursales`: Stores information about branches, including their names, addresses, and contact details.
- `regiones`: Stores information about regions, including their descriptions.
- `provincias`: Stores information about provinces, including their names and the region they belong to.
- `localidades`: Stores information about locations, including their names, region, province, and the branch they belong to.
- `movimientos_internos`: Stores information about internal movements, including the employee, the current position, the previous position, and the date of the movement.

The database also includes stored procedures, triggers, and a function for performing various operations related to employees and their data.

Please refer to the SQL script in the `db/` directory for the complete database schema and initial data.

**Note:** The project structure and database setup provided here are just examples. You may need to modify them according to your specific requirements and preferences.

This file is intentionally left blank.