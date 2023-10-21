const express = require('express')
const uploadController = require('../controllers/uploadController');
const multer = require('multer');
const upload = multer({ dest: 'uploads/' })
const router = express.Router();
//Define the route for CSV upload
router.post('/', upload.single('csvFile'), uploadController.validateAndSaveData)
module.exports = router;