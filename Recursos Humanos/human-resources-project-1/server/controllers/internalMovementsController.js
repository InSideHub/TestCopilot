const InternalMovement = require('../models/internalMovementModel');

// Controller methods for internal movements

// Get all internal movements
exports.getAllInternalMovements = async (req, res) => {
  try {
    const internalMovements = await InternalMovement.findAll();
    res.json(internalMovements);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
};

// Get internal movement by ID
exports.getInternalMovementById = async (req, res) => {
  const { id } = req.params;
  try {
    const internalMovement = await InternalMovement.findById(id);
    if (internalMovement) {
      res.json(internalMovement);
    } else {
      res.status(404).json({ error: 'Internal movement not found' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
};

// Create a new internal movement
exports.createInternalMovement = async (req, res) => {
  const { employeeId, currentPositionId, previousPositionId, date } = req.body;
  try {
    const internalMovement = await InternalMovement.create({
      employeeId,
      currentPositionId,
      previousPositionId,
      date,
    });
    res.status(201).json(internalMovement);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
};

// Update an internal movement
exports.updateInternalMovement = async (req, res) => {
  const { id } = req.params;
  const { employeeId, currentPositionId, previousPositionId, date } = req.body;
  try {
    const internalMovement = await InternalMovement.findById(id);
    if (internalMovement) {
      internalMovement.employeeId = employeeId;
      internalMovement.currentPositionId = currentPositionId;
      internalMovement.previousPositionId = previousPositionId;
      internalMovement.date = date;
      await internalMovement.save();
      res.json(internalMovement);
    } else {
      res.status(404).json({ error: 'Internal movement not found' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
};

// Delete an internal movement
exports.deleteInternalMovement = async (req, res) => {
  const { id } = req.params;
  try {
    const internalMovement = await InternalMovement.findById(id);
    if (internalMovement) {
      await internalMovement.destroy();
      res.json({ message: 'Internal movement deleted successfully' });
    } else {
      res.status(404).json({ error: 'Internal movement not found' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
};