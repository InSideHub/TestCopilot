const { DataTypes } = require('sequelize');
const db = require('../db');

const Report = db.define('Report', {
  informe_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  detalle: {
    type: DataTypes.STRING(50),
    allowNull: false,
  },
  nro_empleado: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
});

module.exports = Report;