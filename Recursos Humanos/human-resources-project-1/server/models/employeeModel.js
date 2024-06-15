const { DataTypes } = require('sequelize');
const db = require('../db');

const Employee = db.define('Employee', {
  nro_empleado: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    allowNull: false,
  },
  nro_documento: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  apellido: {
    type: DataTypes.STRING(50),
    allowNull: false,
  },
  nombre: {
    type: DataTypes.STRING(50),
    allowNull: true,
  },
  telefono: {
    type: DataTypes.STRING(50),
    allowNull: true,
  },
  correo_electronico: {
    type: DataTypes.STRING(50),
    allowNull: true,
  },
  fecha_contratacion: {
    type: DataTypes.DATE,
    allowNull: true,
  },
  cargo_id: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  sucursal_id: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  region_id: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  provincia_id: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  salario: {
    type: DataTypes.FLOAT,
    allowNull: true,
  },
  descripcion: {
    type: DataTypes.STRING(50),
    allowNull: true,
  },
  descripcion_corta: {
    type: DataTypes.STRING(50),
    allowNull: true,
  },
});

module.exports = Employee;