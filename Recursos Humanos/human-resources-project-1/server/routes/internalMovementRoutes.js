const express = require('express');
const router = express.Router();
const internalMovementsController = require('../controllers/internalMovementsController');

// Route for getting all internal movements
router.get('/', internalMovementsController.getAllInternalMovements);

// Route for getting an internal movement by ID
router.get('/:id', internalMovementsController.getInternalMovementById);

// Route for creating a new internal movement
router.post('/', internalMovementsController.createInternalMovement);

// Route for updating an internal movement
router.put('/:id', internalMovementsController.updateInternalMovement);

// Route for deleting an internal movement
router.delete('/:id', internalMovementsController.deleteInternalMovement);

module.exports = router;