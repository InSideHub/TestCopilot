const express = require('express');
const router = express.Router();
const positionsController = require('../controllers/positionsController');

// Route for getting all positions
router.get('/', positionsController.getAllPositions);

// Route for getting a specific position by ID
router.get('/:id', positionsController.getPositionById);

// Route for creating a new position
router.post('/', positionsController.createPosition);

// Route for updating a position
router.put('/:id', positionsController.updatePosition);

// Route for deleting a position
router.delete('/:id', positionsController.deletePosition);

module.exports = router;