const { DataTypes } = require('sequelize');
const db = require('../db');

const Position = db.define('position', {
  positionId: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  description: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  minSalary: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
  maxSalary: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
});

module.exports = Position;