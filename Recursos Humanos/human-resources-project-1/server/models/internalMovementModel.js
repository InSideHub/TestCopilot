const { DataTypes } = require('sequelize');
const { sequelize } = require('../db/db');

const InternalMovement = sequelize.define('InternalMovement', {
  nro_movimiento: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  nro_empleado: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  cargo_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  cargo_historico: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  periodo: {
    type: DataTypes.DATE,
    allowNull: false,
  },
});

module.exports = InternalMovement;