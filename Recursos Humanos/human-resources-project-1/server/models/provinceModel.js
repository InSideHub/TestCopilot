const { DataTypes } = require('sequelize');
const db = require('../db');

const Province = db.define('Province', {
  province_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  province_nombre: {
    type: DataTypes.STRING(50),
    allowNull: false,
  },
  region_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
});

module.exports = Province;