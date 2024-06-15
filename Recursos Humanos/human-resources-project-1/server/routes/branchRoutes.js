const express = require('express');
const router = express.Router();
const branchesController = require('../controllers/branchesController');

// Routes for branch-related requests
router.get('/', branchesController.getAllBranches);
router.get('/:id', branchesController.getBranchById);
router.post('/', branchesController.createBranch);
router.put('/:id', branchesController.updateBranch);
router.delete('/:id', branchesController.deleteBranch);

module.exports = router;