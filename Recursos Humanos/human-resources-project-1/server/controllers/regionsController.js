const Region = require('../models/regionModel');

// Controller methods for handling region-related requests

// Get all regions
exports.getAllRegions = async (req, res) => {
  try {
    const regions = await Region.find();
    res.status(200).json(regions);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
};

// Get region by ID
exports.getRegionById = async (req, res) => {
  try {
    const region = await Region.findById(req.params.id);
    if (!region) {
      return res.status(404).json({ error: 'Region not found' });
    }
    res.status(200).json(region);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
};

// Create a new region
exports.createRegion = async (req, res) => {
  try {
    const region = new Region(req.body);
    const savedRegion = await region.save();
    res.status(201).json(savedRegion);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
};

// Update region by ID
exports.updateRegionById = async (req, res) => {
  try {
    const region = await Region.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!region) {
      return res.status(404).json({ error: 'Region not found' });
    }
    res.status(200).json(region);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
};

// Delete region by ID
exports.deleteRegionById = async (req, res) => {
  try {
    const region = await Region.findByIdAndDelete(req.params.id);
    if (!region) {
      return res.status(404).json({ error: 'Region not found' });
    }
    res.status(200).json({ message: 'Region deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
};