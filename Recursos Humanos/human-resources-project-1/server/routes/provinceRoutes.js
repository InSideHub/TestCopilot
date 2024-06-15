const express = require('express');
const router = express.Router();
const provinceController = require('../controllers/provincesController');

// Routes for province-related requests
router.get('/', provinceController.getAllProvinces);
router.get('/:id', provinceController.getProvinceById);
router.post('/', provinceController.createProvince);
router.put('/:id', provinceController.updateProvince);
router.delete('/:id', provinceController.deleteProvince);

module.exports = router;