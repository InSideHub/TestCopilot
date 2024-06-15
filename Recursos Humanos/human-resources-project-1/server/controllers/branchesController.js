const Branch = require('../models/branchModel');

// Controller logic for handling branch-related requests

// Get all branches
const getAllBranches = async (req, res) => {
  try {
    const branches = await Branch.find();
    res.json(branches);
  } catch (error) {
    res.status(500).json({ message: 'Internal server error' });
  }
};

// Get branch by ID
const getBranchById = async (req, res) => {
  const { id } = req.params;
  try {
    const branch = await Branch.findById(id);
    if (!branch) {
      return res.status(404).json({ message: 'Branch not found' });
    }
    res.json(branch);
  } catch (error) {
    res.status(500).json({ message: 'Internal server error' });
  }
};

// Create a new branch
const createBranch = async (req, res) => {
  const { name, address, provinceId, regionId, localityId, phone } = req.body;
  try {
    const branch = await Branch.create({
      name,
      address,
      provinceId,
      regionId,
      localityId,
      phone,
    });
    res.status(201).json(branch);
  } catch (error) {
    res.status(500).json({ message: 'Internal server error' });
  }
};

// Update branch by ID
const updateBranchById = async (req, res) => {
  const { id } = req.params;
  const { name, address, provinceId, regionId, localityId, phone } = req.body;
  try {
    const branch = await Branch.findByIdAndUpdate(
      id,
      { name, address, provinceId, regionId, localityId, phone },
      { new: true }
    );
    if (!branch) {
      return res.status(404).json({ message: 'Branch not found' });
    }
    res.json(branch);
  } catch (error) {
    res.status(500).json({ message: 'Internal server error' });
  }
};

// Delete branch by ID
const deleteBranchById = async (req, res) => {
  const { id } = req.params;
  try {
    const branch = await Branch.findByIdAndDelete(id);
    if (!branch) {
      return res.status(404).json({ message: 'Branch not found' });
    }
    res.json({ message: 'Branch deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Internal server error' });
  }
};

module.exports = {
  getAllBranches,
  getBranchById,
  createBranch,
  updateBranchById,
  deleteBranchById,
};