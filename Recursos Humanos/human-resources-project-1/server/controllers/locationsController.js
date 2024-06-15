const Location = require('../models/locationModel');

// Controller logic for handling location-related requests

// Get all locations
const getAllLocations = async (req, res) => {
  try {
    const locations = await Location.findAll();
    res.status(200).json(locations);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
};

// Get location by ID
const getLocationById = async (req, res) => {
  const { id } = req.params;
  try {
    const location = await Location.findById(id);
    if (location) {
      res.status(200).json(location);
    } else {
      res.status(404).json({ error: 'Location not found' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
};

// Create a new location
const createLocation = async (req, res) => {
  const { name, region, province, branch } = req.body;
  try {
    const location = await Location.create({ name, region, province, branch });
    res.status(201).json(location);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
};

// Update a location
const updateLocation = async (req, res) => {
  const { id } = req.params;
  const { name, region, province, branch } = req.body;
  try {
    const location = await Location.findById(id);
    if (location) {
      location.name = name;
      location.region = region;
      location.province = province;
      location.branch = branch;
      await location.save();
      res.status(200).json(location);
    } else {
      res.status(404).json({ error: 'Location not found' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
};

// Delete a location
const deleteLocation = async (req, res) => {
  const { id } = req.params;
  try {
    const location = await Location.findById(id);
    if (location) {
      await location.destroy();
      res.status(200).json({ message: 'Location deleted successfully' });
    } else {
      res.status(404).json({ error: 'Location not found' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
};

module.exports = {
  getAllLocations,
  getLocationById,
  createLocation,
  updateLocation,
  deleteLocation,
};