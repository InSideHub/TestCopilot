const express = require('express');
const bodyParser = require('body-parser');
const employeeRoutes = require('./routes/employeeRoutes');
const reportRoutes = require('./routes/reportRoutes');
const positionRoutes = require('./routes/positionRoutes');
const branchRoutes = require('./routes/branchRoutes');
const regionRoutes = require('./routes/regionRoutes');
const provinceRoutes = require('./routes/provinceRoutes');
const locationRoutes = require('./routes/locationRoutes');
const internalMovementRoutes = require('./routes/internalMovementRoutes');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());

// Employee routes
app.use('/api/employees', employeeRoutes);

// Report routes
app.use('/api/reports', reportRoutes);

// Position routes
app.use('/api/positions', positionRoutes);

// Branch routes
app.use('/api/branches', branchRoutes);

// Region routes
app.use('/api/regions', regionRoutes);

// Province routes
app.use('/api/provinces', provinceRoutes);

// Location routes
app.use('/api/locations', locationRoutes);

// Internal movement routes
app.use('/api/internal-movements', internalMovementRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});