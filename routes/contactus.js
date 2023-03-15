const express = require('express');

const formalitesController = require('../controllers/formalities')

const path = require('path');

const router = express.Router();

router.get('/contactus',formalitesController.getContactus);

router.post('/contactus',formalitesController.postContactus);

module.exports = router;