const Report = require('../models/reportModel');

// Controller methods for handling report-related requests

// Get all reports
exports.getAllReports = async (req, res) => {
  try {
    const reports = await Report.findAll();
    res.status(200).json(reports);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
};

// Get a single report by ID
exports.getReportById = async (req, res) => {
  const { id } = req.params;
  try {
    const report = await Report.findById(id);
    if (!report) {
      return res.status(404).json({ error: 'Report not found' });
    }
    res.status(200).json(report);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
};

// Create a new report
exports.createReport = async (req, res) => {
  const { detail, employeeId } = req.body;
  try {
    const report = await Report.create({ detail, employeeId });
    res.status(201).json(report);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
};

// Update a report
exports.updateReport = async (req, res) => {
  const { id } = req.params;
  const { detail } = req.body;
  try {
    const report = await Report.findById(id);
    if (!report) {
      return res.status(404).json({ error: 'Report not found' });
    }
    report.detail = detail;
    await report.save();
    res.status(200).json(report);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
};

// Delete a report
exports.deleteReport = async (req, res) => {
  const { id } = req.params;
  try {
    const report = await Report.findById(id);
    if (!report) {
      return res.status(404).json({ error: 'Report not found' });
    }
    await report.destroy();
    res.status(204).end();
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
};