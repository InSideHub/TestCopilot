const { DataTypes } = require('sequelize');
const db = require('../db');

const Region = db.define('Region', {
  region_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  region_descripcion: {
    type: DataTypes.STRING(50),
    allowNull: false,
  },
});

module.exports = Region;