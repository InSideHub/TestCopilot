const Employee = require('../models/employeeModel');

// Controller methods for handling employee-related requests

// Get all employees
const getAllEmployees = async (req, res) => {
  try {
    const employees = await Employee.findAll();
    res.json(employees);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
};

// Get employee by ID
const getEmployeeById = async (req, res) => {
  const { id } = req.params;
  try {
    const employee = await Employee.findById(id);
    if (employee) {
      res.json(employee);
    } else {
      res.status(404).json({ error: 'Employee not found' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
};

// Create a new employee
const createEmployee = async (req, res) => {
  const { nro_empleado, nro_documento, apellido, nombre, telefono, correo_electronico, fecha_contratacion, cargo_id, sucursal_id, region_id, provincia_id, salario, descripcion, descripcion_corta } = req.body;
  try {
    const employee = await Employee.create({
      nro_empleado,
      nro_documento,
      apellido,
      nombre,
      telefono,
      correo_electronico,
      fecha_contratacion,
      cargo_id,
      sucursal_id,
      region_id,
      provincia_id,
      salario,
      descripcion,
      descripcion_corta
    });
    res.status(201).json(employee);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
};

// Update an employee
const updateEmployee = async (req, res) => {
  const { id } = req.params;
  const { nro_empleado, nro_documento, apellido, nombre, telefono, correo_electronico, fecha_contratacion, cargo_id, sucursal_id, region_id, provincia_id, salario, descripcion, descripcion_corta } = req.body;
  try {
    const employee = await Employee.findById(id);
    if (employee) {
      await employee.update({
        nro_empleado,
        nro_documento,
        apellido,
        nombre,
        telefono,
        correo_electronico,
        fecha_contratacion,
        cargo_id,
        sucursal_id,
        region_id,
        provincia_id,
        salario,
        descripcion,
        descripcion_corta
      });
      res.json(employee);
    } else {
      res.status(404).json({ error: 'Employee not found' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
};

// Delete an employee
const deleteEmployee = async (req, res) => {
  const { id } = req.params;
  try {
    const employee = await Employee.findById(id);
    if (employee) {
      await employee.destroy();
      res.json({ message: 'Employee deleted successfully' });
    } else {
      res.status(404).json({ error: 'Employee not found' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
};

module.exports = {
  getAllEmployees,
  getEmployeeById,
  createEmployee,
  updateEmployee,
  deleteEmployee
};