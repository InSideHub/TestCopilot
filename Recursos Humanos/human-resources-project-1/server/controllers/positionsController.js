const Position = require('../models/positionModel');

// Controller methods for position-related requests

// Get all positions
exports.getAllPositions = async (req, res) => {
  try {
    const positions = await Position.find();
    res.json(positions);
  } catch (error) {
    res.status(500).json({ message: 'Server Error' });
  }
};

// Get position by ID
exports.getPositionById = async (req, res) => {
  try {
    const position = await Position.findById(req.params.id);
    if (!position) {
      return res.status(404).json({ message: 'Position not found' });
    }
    res.json(position);
  } catch (error) {
    res.status(500).json({ message: 'Server Error' });
  }
};

// Create a new position
exports.createPosition = async (req, res) => {
  try {
    const newPosition = new Position(req.body);
    const savedPosition = await newPosition.save();
    res.status(201).json(savedPosition);
  } catch (error) {
    res.status(500).json({ message: 'Server Error' });
  }
};

// Update position by ID
exports.updatePosition = async (req, res) => {
  try {
    const position = await Position.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!position) {
      return res.status(404).json({ message: 'Position not found' });
    }
    res.json(position);
  } catch (error) {
    res.status(500).json({ message: 'Server Error' });
  }
};

// Delete position by ID
exports.deletePosition = async (req, res) => {
  try {
    const position = await Position.findByIdAndDelete(req.params.id);
    if (!position) {
      return res.status(404).json({ message: 'Position not found' });
    }
    res.json({ message: 'Position deleted' });
  } catch (error) {
    res.status(500).json({ message: 'Server Error' });
  }
};