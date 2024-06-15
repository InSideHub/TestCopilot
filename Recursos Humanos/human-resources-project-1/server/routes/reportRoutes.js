const express = require('express');
const router = express.Router();
const reportsController = require('../controllers/reportsController');

// Route for getting all reports
router.get('/', reportsController.getAllReports);

// Route for getting a specific report by ID
router.get('/:id', reportsController.getReportById);

// Route for creating a new report
router.post('/', reportsController.createReport);

// Route for updating a report
router.put('/:id', reportsController.updateReport);

// Route for deleting a report
router.delete('/:id', reportsController.deleteReport);

module.exports = router;