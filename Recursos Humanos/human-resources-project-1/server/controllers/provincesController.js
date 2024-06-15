const Province = require('../models/provinceModel');

// Controller methods for province-related requests

// Get all provinces
exports.getAllProvinces = async (req, res) => {
  try {
    const provinces = await Province.find();
    res.status(200).json(provinces);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
};

// Get province by ID
exports.getProvinceById = async (req, res) => {
  try {
    const province = await Province.findById(req.params.id);
    if (!province) {
      return res.status(404).json({ error: 'Province not found' });
    }
    res.status(200).json(province);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
};

// Create a new province
exports.createProvince = async (req, res) => {
  try {
    const province = await Province.create(req.body);
    res.status(201).json(province);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
};

// Update province by ID
exports.updateProvinceById = async (req, res) => {
  try {
    const province = await Province.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!province) {
      return res.status(404).json({ error: 'Province not found' });
    }
    res.status(200).json(province);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
};

// Delete province by ID
exports.deleteProvinceById = async (req, res) => {
  try {
    const province = await Province.findByIdAndDelete(req.params.id);
    if (!province) {
      return res.status(404).json({ error: 'Province not found' });
    }
    res.status(200).json({ message: 'Province deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
};